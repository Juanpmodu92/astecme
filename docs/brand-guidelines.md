# Brand Guidelines v1.0

## ASTECME - Asesoría Técnica en Mecánica

---

## Quick Reference
- **Primary Color:** #1B3A4B (Deep Industrial Blue)
- **Secondary Color:** #E86C00 (Safety Orange)
- **Accent Color:** #00A3E0 (Technical Blue)
- **Primary Font:** Inter (Headings & Body)
- **Monospace Font:** JetBrains Mono (Technical specs, code)
- **Voice:** Profesional, Técnico, Confiable, Innovador

---

## 1. Color Palette

### Primary Colors
| Name | Hex | RGB | Usage |
|------|-----|-----|-------|
| Industrial Blue | #1B3A4B | rgb(27,58,75) | Primary brand color, headers, navigation, primary CTAs |
| Safety Orange | #E86C00 | rgb(232,108,0) | Secondary CTAs, warnings, highlights, accent elements |
| Technical Blue | #00A3E0 | rgb(0,163,224) | Links, technical callouts, data visualization, secondary actions |

### Secondary Colors
| Name | Hex | RGB | Usage |
|------|-----|-----|-------|
| Steel Gray | #4A5A6A | rgb(74,90,106) | Sub-headers, secondary text, borders |
| Slate Light | #E8EBEF | rgb(232,235,239) | Card backgrounds, section dividers |
| Success Green | #1B8A4A | rgb(27,138,74) | Success states, completed items |
| Alert Red | #C0392B | rgb(192,57,43) | Error states, critical alerts |

### Neutral Palette
| Name | Hex | RGB | Usage |
|------|-----|-----|-------|
| Background | #FFFFFF | rgb(255,255,255) | Page backgrounds |
| Surface | #F8FAFC | rgb(248,250,252) | Card backgrounds, containers |
| Text Primary | #1E293B | rgb(30,41,59) | Body text, headings |
| Text Secondary | #64748B | rgb(100,116,139) | Captions, muted text, meta info |
| Border | #E2E8F0 | rgb(226,232,240) | Dividers, borders, input fields |
| Border Focus | #00A3E0 | rgb(0,163,224) | Focus states, active borders |

### Gradients
| Name | Definition | Usage |
|------|------------|-------|
| Industrial Gradient | linear-gradient(135deg, #1B3A4B 0%, #00A3E0 100%) | Hero backgrounds, primary buttons |
| Safety Gradient | linear-gradient(135deg, #E86C00 0%, #F97316 100%) | Secondary CTAs, highlights |
| Steel Gradient | linear-gradient(135deg, #4A5A6A 0%, #1E293B 100%) | Footer, dark sections |

### Accessibility
- Text/Background Contrast: 7:1 (WCAG AAA for primary text)
- CTA Contrast: 4.5:1 minimum (WCAG AA)
- All interactive elements meet WCAG 2.1 AA
- Focus indicators: 3px solid #00A3E0 with 2px offset

---

## 2. Typography

### Font Stack
```css
--font-heading: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
--font-body: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
--font-mono: 'JetBrains Mono', 'Fira Code', monospace;
```

### Type Scale
| Element | Font | Weight | Size (Desktop/Mobile) | Line Height | Letter Spacing |
|---------|------|--------|----------------------|-------------|----------------|
| H1 | Inter | 700 | 48px / 36px | 1.15 | -0.02em |
| H2 | Inter | 600 | 36px / 28px | 1.2 | -0.01em |
| H3 | Inter | 600 | 28px / 24px | 1.25 | 0 |
| H4 | Inter | 600 | 22px / 20px | 1.3 | 0 |
| Body Large | Inter | 400 | 18px / 16px | 1.6 | 0 |
| Body | Inter | 400 | 16px / 16px | 1.6 | 0 |
| Small | Inter | 400 | 14px / 14px | 1.5 | 0 |
| Caption | Inter | 400 | 12px / 12px | 1.4 | 0.01em |
| Button | Inter | 600 | 14px / 14px | 1 | 0.02em |
| Code/Technical | JetBrains Mono | 400 | 14px / 13px | 1.5 | 0 |

---

## 3. Logo Usage

### Variants
- **Primary:** Horizontal wordmark "ASTECME" with gear icon — Industrial Blue on white
- **Stacked:** Vertical arrangement with icon above wordmark
- **Icon:** Gear/cog symbol only for favicons, app icons, social media
- **Monochrome:** Single color (Industrial Blue or White) for limited palettes
- **Reverse:** White on dark backgrounds

### Clear Space
Minimum clear space = height of the "A" in ASTECME wordmark

### Minimum Size
- Digital: 120px width minimum (wordmark)
- Print: 30mm width minimum
- Icon only: 24px × 24px minimum

### Don'ts
- Don't rotate or skew the logo
- Don't change colors outside approved palette
- Don't add effects (shadows, gradients, outlines)
- Don't crop or modify proportions
- Don't place on busy backgrounds without clear space
- Don't use the icon separately from wordmark in primary branding

---

## 4. Voice & Tone

### Brand Personality
**Profesional:** Expertos en ingeniería mecánica, comunicamos con precisión técnica y autoridad ganada
**Técnico:** Hablamos el idioma de la ingeniería — especificaciones, tolerancias, materiales, normativas
**Confiable:** Cumplimos lo que prometemos, la seguridad y durabilidad son innegociables
**Innovador:** Aplicamos tecnología de vanguardia a problemas industriales reales

### Voice Chart
| Trait | We Are | We Are Not |
|-------|--------|------------|
| Profesional | Precisos, formales pero accesibles | Rígidos, burocráticos, distantes |
| Técnico | Detallados, específicos, con datos | Vagos, genéricos, "marketinianos" |
| Confiable | Transparentes, realistas, comprometidos | Exagerados, prometedores imposibles |
| Innovador | Orientados a soluciones, modernos | Experimentales sin validar, trendy |

### Tone by Context
| Context | Tone | Example |
|---------|------|---------|
| Marketing (Hero) | Inspirador pero fundamentado | "Diseñamos la maquinaria que mueve tu industria" |
| Especificaciones Técnicas | Exacto, objetivo, normativo | "Compactadora CNC-500: fuerza de compactación 500kN, ciclo 45s, ISO 9001" |
| Soporte/Contacto | Cercano, resolutivo, experto | "Nuestro equipo de ingenieros analiza tu caso en 24h" |
| Casos de Estudio | Basado en evidencia, cuantificable | "Redujimos paradas no planificadas 40% en planta de reciclaje" |
| Error/Alerta | Claro, accionable, sin culpa | "Especificación fuera de rango: verifique presión hidráulica (máx 250 bar)" |

### Prohibited Terms
- "La mejor del mercado" — sin datos comparativos verificables
- "Revolucionario" — usamos "innovador", "optimizado", "de nueva generación"
- "Barato" / "Económico" — usamos "rentable", "optimización de costes", "ROI comprobado"
- "Fácil" sin contexto — usamos "operación simplificada", "mantenimiento reducido"
- Jerga de marketing vacía ("soluciones integrales", "partner estratégico")

---

## 5. Imagery Guidelines

### Photography Style
- **Lighting:** Industrial, natural o iluminación técnica fría (5000K-6500K)
- **Subjects:** Maquinaria en operación, detalle de componentes, ingenieros trabajando, instalaciones reales
- **Color treatment:** Ligeramente desaturado, énfasis en azules industriales y naranjas de seguridad
- **Composición:** Limpia, con espacio negativo, líneas geométricas, perspectiva técnica

### Illustrations
- **Style:** Technical line art, isométrico para maquinaria, esquemas simplificados
- **Colors:** Brand palette only (Industrial Blue, Technical Blue, Safety Orange, neutros)
- **Stroke:** 2px base, 1px para detalles, 3px para énfasis
- **Corner radius:** 4px para elementos UI, 0px para esquemas técnicos

### Icons
- **Style:** Outlined (2px stroke), filled para estados activos
- **Size:** 24px base grid (24×24, 32×32, 48×48)
- **Corner radius:** 2px
- **Familia:** Phosphor Icons / Heroicons outline como base, adaptados a stroke 2px

### UI Elements
- **Border radius:** 8px (cards, buttons), 4px (inputs, badges), 0px (tablas técnicas)
- **Shadows:** 
  - Elevation 1: `0 1px 3px rgba(27,58,75,0.08)`
  - Elevation 2: `0 4px 12px rgba(27,58,75,0.12)`
  - Elevation 3: `0 12px 24px rgba(27,58,75,0.16)`
- **Transitions:** 150ms ease-out para interacciones, 300ms para cambios de estado complejos

---

## 6. Spacing System

### Base Unit: 8px
| Token | Value | Usage |
|-------|-------|-------|
| space-1 | 4px | Micro spacing, icon gaps |
| space-2 | 8px | Base unit, button padding X |
| space-3 | 12px | Form field gaps |
| space-4 | 16px | Card padding, button padding Y |
| space-5 | 24px | Section spacing, card gaps |
| space-6 | 32px | Large section spacing |
| space-7 | 48px | Hero vertical padding |
| space-8 | 64px | Major section breaks |
| space-9 | 96px | Page-level spacing |

---

## 7. Component Specifications

### Buttons
| Variant | Background | Text | Border | Hover | Focus |
|---------|------------|------|--------|-------|-------|
| Primary | Industrial Blue | White | None | Darken 10% | Ring Technical Blue |
| Secondary | White | Industrial Blue | 2px Industrial Blue | Industrial Blue bg | Ring Technical Blue |
| Accent | Safety Orange | White | None | Darken 10% | Ring Safety Orange |
| Ghost | Transparent | Industrial Blue | None | Slate Light bg | Ring Technical Blue |
| Danger | Alert Red | White | None | Darken 10% | Ring Alert Red |

**Padding:** 12px 24px (desktop), 10px 20px (mobile)
**Border radius:** 8px
**Font:** Inter 600, 14px

### Cards
- **Background:** White / Surface
- **Border:** 1px solid Border
- **Border radius:** 12px
- **Padding:** 24px
- **Hover:** Elevation 2, border Technical Blue

### Forms
- **Input height:** 44px (desktop), 48px (mobile)
- **Border:** 1px solid Border
- **Focus:** 2px solid Technical Blue, border disappears
- **Error:** Border Alert Red, icon Alert Red
- **Label:** Inter 500, 14px, Text Secondary

### Tables (Technical Specs)
- **Header:** Industrial Blue bg, White text, Inter 600, 13px
- **Rows:** Alternating White / Surface
- **Border:** 1px solid Border
- **Font:** JetBrains Mono 13px for numeric data
- **Hover row:** Slate Light

---

## 8. Motion & Animation

### Durations
- **Fast:** 100ms (button press, toggle)
- **Base:** 150ms (hover, focus, simple transitions)
- **Slow:** 300ms (modal, drawer, complex state changes)
- **Page:** 400ms (route transitions)

### Easing
- **Standard:** `cubic-bezier(0.4, 0, 0.2, 1)` (Material standard)
- **Emphasized:** `cubic-bezier(0.4, 0, 0, 1)` (deceleration)
- **Spring:** `cubic-bezier(0.34, 1.56, 0.64, 1)` (bouncy, for success states)

### Reduced Motion
Respetar `prefers-reduced-motion: reduce` — desactivar todas las animaciones no esenciales, mantener solo transiciones de estado instantáneas (0ms).

---

## 9. Responsive Breakpoints

| Name | Width | Usage |
|------|-------|-------|
| Mobile | < 640px | Single column, stacked layouts |
| Tablet | 640px - 1023px | Two column, adjusted spacing |
| Desktop | 1024px - 1439px | Full layout, sidebar navigation |
| Wide | ≥ 1440px | Max-width container 1280px, generous whitespace |

### Container Max-Widths
- **Mobile:** 100% (padding 16px)
- **Tablet:** 100% (padding 24px)
- **Desktop:** 1280px (centered)
- **Wide:** 1400px (centered)

---

## 10. Technical Specifications Display

### Machinery Cards
- **Image:** 16:9 aspect ratio, machinery in operation
- **Specs:** List with JetBrains Mono for values
- **Tags:** Safety Orange badges para capacidades clave
- **CTA:** Primary button "Ver ficha técnica"

### Data Visualization
- **Charts:** Technical Blue primary, Safety Orange accent
- **Grid lines:** Border color
- **Tooltips:** Industrial Blue bg, White text, Elevation 2
- **Legends:** Inter 13px, Text Secondary

---

## Extractable Fields (para scripts)

```json
{
  "colors": {
    "primary": "#1B3A4B",
    "secondary": "#E86C00",
    "accent": "#00A3E0",
    "neutral": {
      "background": "#FFFFFF",
      "surface": "#F8FAFC",
      "textPrimary": "#1E293B",
      "textSecondary": "#64748B",
      "border": "#E2E8F0"
    },
    "semantic": {
      "success": "#1B8A4A",
      "warning": "#E86C00",
      "error": "#C0392B"
    }
  },
  "typography": {
    "heading": "Inter",
    "body": "Inter",
    "mono": "JetBrains Mono"
  },
  "spacing": { "base": 8 },
  "radius": { "base": 8, "card": 12, "input": 8 },
  "shadows": { "1": "0 1px 3px rgba(27,58,75,0.08)", "2": "0 4px 12px rgba(27,58,75,0.12)", "3": "0 12px 24px rgba(27,58,75,0.16)" }
}
```

---

## Version History
| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | 2026-11-09 | Claude Code + Brand Skill | Initial creation for ASTECME |