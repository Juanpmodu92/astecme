/**
 * ASTECME - Main JavaScript
 * Handles navigation, forms, animations and interactions
 */

// ==========================================================================
// UTILITIES
// ==========================================================================

const $ = (selector, context = document) => context.querySelector(selector);
const $$ = (selector, context = document) => [...context.querySelectorAll(selector)];

const debounce = (fn, delay) => {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn(...args), delay);
  };
};

const throttle = (fn, limit) => {
  let inThrottle;
  return (...args) => {
    if (!inThrottle) {
      fn(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

// ==========================================================================
// MOBILE NAVIGATION
// ==========================================================================

class MobileNavigation {
  constructor() {
    this.toggle = $('.header__menu-toggle');
    this.menu = $('#mobile-menu');
    this.links = $$('.header__mobile-nav-link');
    this.isOpen = false;

    this.init();
  }

  init() {
    if (!this.toggle || !this.menu) return;

    this.toggle.addEventListener('click', () => this.toggleMenu());
    this.links.forEach(link => link.addEventListener('click', () => this.closeMenu()));

    // Close on escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.isOpen) this.closeMenu();
    });

    // Close on click outside
    this.menu.addEventListener('click', (e) => {
      if (e.target === this.menu) this.closeMenu();
    });
  }

  toggleMenu() {
    this.isOpen ? this.closeMenu() : this.openMenu();
  }

  openMenu() {
    this.isOpen = true;
    this.toggle.setAttribute('aria-expanded', 'true');
    this.menu.classList.add('is-open');
    document.body.style.overflow = 'hidden';

    // Focus first link for accessibility
    setTimeout(() => this.links[0]?.focus(), 100);
  }

  closeMenu() {
    this.isOpen = false;
    this.toggle.setAttribute('aria-expanded', 'false');
    this.menu.classList.remove('is-open');
    document.body.style.overflow = '';
  }
}

// ==========================================================================
// HEADER SCROLL EFFECT
// ==========================================================================

class HeaderScrollEffect {
  constructor() {
    this.header = $('.header');
    this.lastScrollY = 0;
    this.ticking = false;

    this.init();
  }

  init() {
    if (!this.header) return;

    window.addEventListener('scroll', () => this.onScroll(), { passive: true });
  }

  onScroll() {
    this.lastScrollY = window.scrollY;

    if (!this.ticking) {
      window.requestAnimationFrame(() => this.update());
      this.ticking = true;
    }
  }

  update() {
    const scrollY = this.lastScrollY;

    if (scrollY > 20) {
      this.header.style.boxShadow = 'var(--shadow-elevation-1)';
      this.header.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
    } else {
      this.header.style.boxShadow = 'none';
      this.header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
    }

    this.ticking = false;
  }
}

// ==========================================================================
// SMOOTH SCROLL
// ==========================================================================

class SmoothScroll {
  constructor() {
    this.init();
  }

  init() {
    $$('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => this.handleClick(e, anchor));
    });
  }

  handleClick(e, anchor) {
    const href = anchor.getAttribute('href');
    if (href === '#') return;

    const target = document.querySelector(href);
    if (!target) return;

    e.preventDefault();

    const headerHeight = $('.header')?.offsetHeight || 72;
    const targetPosition = target.getBoundingClientRect().top + window.scrollY - headerHeight;

    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });

    // Update URL without scroll
    history.pushState(null, '', href);

    // Focus target for accessibility
    target.setAttribute('tabindex', '-1');
    target.focus({ preventScroll: true });
  }
}

// ==========================================================================
// INTERSECTION OBSERVER ANIMATIONS
// ==========================================================================

class ScrollAnimations {
  constructor() {
    this.observer = null;
    this.elements = [];
    this.init();
  }

  init() {
    if (!('IntersectionObserver' in window)) return;

    this.observer = new IntersectionObserver(
      (entries) => this.handleIntersection(entries),
      {
        root: null,
        rootMargin: '0px 0px -10% 0px',
        threshold: 0.1
      }
    );

    // Elements to animate
    this.elements = [
      ...$$('.product-card'),
      ...$$('.service-card'),
      ...$$('.project-card'),
      ...$$('.about__feature'),
      ...$$('.about__stat'),
      ...$$('.hero__stat'),
      ...$$('.contact__card')
    ];

    this.elements.forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
      el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
      this.observer.observe(el);
    });
  }

  handleIntersection(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        this.observer.unobserve(entry.target);
      }
    });
  }
}

// ==========================================================================
// CONTACT FORM
// ==========================================================================

class ContactForm {
  constructor() {
    this.form = $('.contact__form');
    this.submitBtn = $('.form__submit');
    this.init();
  }

  init() {
    if (!this.form) return;

    this.form.addEventListener('submit', (e) => this.handleSubmit(e));

    // Real-time validation
    $$('input, select, textarea', this.form).forEach(field => {
      field.addEventListener('blur', () => this.validateField(field));
      field.addEventListener('input', () => this.clearError(field));
    });
  }

  validateField(field) {
    const value = field.value.trim();
    let isValid = true;
    let message = '';

    // Remove existing error
    this.clearError(field);

    // Required check
    if (field.hasAttribute('required') && !value) {
      isValid = false;
      message = 'Este campo es obligatorio';
    }

    // Email validation
    if (field.type === 'email' && value) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        isValid = false;
        message = 'Introduce un email válido';
      }
    }

    // Phone validation (basic)
    if (field.type === 'tel' && value) {
      const phoneRegex = /^[\d\s\+\-\(\)]{9,}$/;
      if (!phoneRegex.test(value)) {
        isValid = false;
        message = 'Introduce un teléfono válido';
      }
    }

    // Checkbox group validation
    if (field.type === 'checkbox' && field.name === 'tipo-proyecto') {
      const checkboxes = $$('input[name="tipo-proyecto"]', this.form);
      const checked = checkboxes.some(cb => cb.checked);
      if (!checked) {
        isValid = false;
        message = 'Selecciona al menos un tipo de proyecto';
        // Show error on first checkbox
        this.showError(checkboxes[0], message);
        return false;
      }
    }

    // Privacy checkbox
    if (field.name === 'privacidad' && !field.checked) {
      isValid = false;
      message = 'Debes aceptar la política de privacidad';
    }

    if (!isValid && field.type !== 'checkbox') {
      this.showError(field, message);
    }

    return isValid;
  }

  showError(field, message) {
    field.setAttribute('aria-invalid', 'true');

    // Remove existing error
    const existingError = field.parentNode.querySelector('.form__error');
    if (existingError) existingError.remove();

    // Add error message
    const error = document.createElement('span');
    error.className = 'form__error';
    error.textContent = message;
    error.style.cssText = `
      display: block;
      color: var(--color-error);
      font-size: var(--text-caption-size);
      margin-top: var(--space-1);
    `;
    field.parentNode.appendChild(error);
  }

  clearError(field) {
    field.removeAttribute('aria-invalid');
    const error = field.parentNode.querySelector('.form__error');
    if (error) error.remove();
  }

  validateForm() {
    let isValid = true;
    const fields = $$('input, select, textarea', this.form);

    fields.forEach(field => {
      if (!this.validateField(field)) {
        isValid = false;
      }
    });

    // Check checkbox group
    const projectCheckboxes = $$('input[name="tipo-proyecto"]', this.form);
    if (!projectCheckboxes.some(cb => cb.checked)) {
      isValid = false;
    }

    return isValid;
  }

  async handleSubmit(e) {
    e.preventDefault();

    if (!this.validateForm()) {
      // Focus first invalid field
      const firstInvalid = this.form.querySelector('[aria-invalid="true"]');
      firstInvalid?.focus();
      return;
    }

    // Show loading state
    this.submitBtn.disabled = true;

    // Collect form data
    const formData = new FormData(this.form);
    const data = Object.fromEntries(formData.entries());

    // Handle checkbox array
    data['tipo-proyecto'] = $$('input[name="tipo-proyecto"]:checked', this.form).map(cb => cb.value);

    try {
      // Simulate API call
      await this.submitToAPI(data);

      // Success
      this.showSuccess();
      this.form.reset();
    } catch (error) {
      this.showError('Error al enviar. Inténtalo de nuevo o contáctanos por teléfono.');
    } finally {
      this.submitBtn.disabled = false;
    }
  }

  async submitToAPI(data) {
    // Simulate network request
    await new Promise(resolve => setTimeout(resolve, 1500));

    // In production, replace with actual API call:
    // const response = await fetch('/api/contact', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(data)
    // });
    // if (!response.ok) throw new Error('Failed');

    console.log('Form submitted:', data);
    return { success: true };
  }

  showSuccess() {
    // Create success message
    const success = document.createElement('div');
    success.className = 'form__success';
    success.innerHTML = `
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" style="margin-bottom: var(--space-3);">
        <circle cx="24" cy="24" r="22" fill="#1B8A4A" opacity="0.1"/>
        <path d="M16 24 L22 30 L32 18" stroke="#1B8A4A" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      <h3 style="font-size: var(--text-h4-size-desktop); margin-bottom: var(--space-2); color: var(--color-text-primary);">
        ¡Solicitud enviada correctamente!
      </h3>
      <p style="color: var(--color-text-secondary); margin: 0;">
        Un ingeniero de nuestro equipo te contactará en menos de 24 horas.
      </p>
    `;
    success.style.cssText = `
      padding: var(--space-6);
      background-color: var(--color-surface);
      border: 1px solid var(--color-success);
      border-radius: var(--radius-card);
      text-align: center;
      animation: fadeIn 0.3s ease-out;
    `;

    // Replace form with success message
    this.form.innerHTML = '';
    this.form.appendChild(success);

    // Add animation keyframes if not exists
    if (!document.getElementById('form-animations')) {
      const style = document.createElement('style');
      style.id = 'form-animations';
      style.textContent = `
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `;
      document.head.appendChild(style);
    }
  }

  showError(message) {
    // Create error message at top of form
    const error = document.createElement('div');
    error.className = 'form__error-message';
    error.innerHTML = `
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="margin-right: var(--space-2); flex-shrink: 0;">
        <circle cx="12" cy="12" r="10"/>
        <line x1="15" y1="9" x2="9" y2="15"/>
        <line x1="9" y1="9" x2="15" y2="15"/>
      </svg>
      <span>${message}</span>
    `;
    error.style.cssText = `
      display: flex;
      align-items: flex-start;
      gap: var(--space-2);
      padding: var(--space-3) var(--space-4);
      background-color: rgba(192, 57, 43, 0.1);
      border: 1px solid var(--color-error);
      border-radius: var(--radius-base);
      color: var(--color-error);
      margin-bottom: var(--space-4);
      animation: fadeIn 0.3s ease-out;
    `;

    // Remove existing error
    const existing = this.form.querySelector('.form__error-message');
    if (existing) existing.remove();

    // Insert at top
    this.form.insertBefore(error, this.form.firstChild);

    // Scroll to error
    error.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
}

// ==========================================================================
// HERO STATS COUNTER ANIMATION
// ==========================================================================

class CounterAnimation {
  constructor() {
    this.counters = $$('.hero__stat-value, .about__stat-value, .project-card__result-value');
    this.animated = new WeakSet();
    this.init();
  }

  init() {
    if (!('IntersectionObserver' in window)) return;

    const observer = new IntersectionObserver(
      (entries) => this.handleIntersection(entries),
      { threshold: 0.5 }
    );

    this.counters.forEach(counter => observer.observe(counter));
  }

  handleIntersection(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting && !this.animated.has(entry.target)) {
        this.animateCounter(entry.target);
        this.animated.add(entry.target);
      }
    });
  }

  animateCounter(element) {
    const text = element.textContent.trim();
    const match = text.match(/^([\d,.]+)([^\d]*)$/);
    if (!match) return;

    const target = parseFloat(match[1].replace(',', ''));
    const suffix = match[2];
    const duration = 1500;
    const startTime = performance.now();

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing: easeOutExpo
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const current = Math.floor(target * eased);

      element.textContent = current.toLocaleString() + suffix;

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        element.textContent = text; // Ensure exact final value
      }
    };

    requestAnimationFrame(animate);
  }
}

// ==========================================================================
// LAZY LOAD IMAGES
// ==========================================================================

class LazyImages {
  constructor() {
    this.images = $$('img[loading="lazy"]');
    this.init();
  }

  init() {
    if (!('IntersectionObserver' in window)) {
      this.images.forEach(img => this.loadImage(img));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => this.handleIntersection(entries),
      { rootMargin: '50px 0px', threshold: 0.01 }
    );

    this.images.forEach(img => observer.observe(img));
  }

  handleIntersection(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        this.loadImage(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }

  loadImage(img) {
    if (img.dataset.src) {
      img.src = img.dataset.src;
      img.removeAttribute('data-src');
    }
    img.removeAttribute('loading');
    img.classList.add('loaded');
  }
}

// ==========================================================================
// ACTIVE NAV HIGHLIGHT
// ==========================================================================

class ActiveNavHighlight {
  constructor() {
    this.sections = $$('section[id]');
    this.navLinks = $$('.header__nav-link, .header__mobile-nav-link');
    this.init();
  }

  init() {
    if (!('IntersectionObserver' in window)) return;

    const observer = new IntersectionObserver(
      (entries) => this.handleIntersection(entries),
      { rootMargin: '-20% 0px -60% 0px', threshold: 0 }
    );

    this.sections.forEach(section => observer.observe(section));
  }

  handleIntersection(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        this.updateActiveLink(id);
      }
    });
  }

  updateActiveLink(id) {
    this.navLinks.forEach(link => {
      const href = link.getAttribute('href');
      if (href === `#${id}`) {
        link.classList.add('is-active');
        link.setAttribute('aria-current', 'page');
      } else {
        link.classList.remove('is-active');
        link.removeAttribute('aria-current');
      }
    });
  }
}

// ==========================================================================
// INITIALIZATION
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
  // Initialize all components
  new MobileNavigation();
  new HeaderScrollEffect();
  new SmoothScroll();
  new ScrollAnimations();
  new ContactForm();
  new CounterAnimation();
  new LazyImages();
  new ActiveNavHighlight();

  // Add loaded class to body for CSS transitions
  document.body.classList.add('is-loaded');
});

// Handle page visibility for animations
document.addEventListener('visibilitychange', () => {
  if (document.visibilityState === 'visible') {
    document.body.classList.add('is-visible');
  }
});

// Export for potential module usage
export {
  MobileNavigation,
  HeaderScrollEffect,
  SmoothScroll,
  ScrollAnimations,
  ContactForm,
  CounterAnimation,
  LazyImages,
  ActiveNavHighlight
};