# ASTECME - Asesoría Técnica en Mecánica

Sitio web corporativo para ASTECME, empresa especializada en asesoría técnica en mecánica, fabricación de maquinaria industrial, compactadoras, bandas transportadoras y soluciones de ingeniería a medida.

## 🚀 Inicio Rápido

### Prerrequisitos
- Node.js 18+ (para servidor de desarrollo)

### Instalación
```bash
cd astecme
npm install
```

### Desarrollo
```bash
npm run dev
# Abre http://localhost:3000
```

### Producción
```bash
npm run build
npm run preview
```

## 📁 Estructura del Proyecto

```
astecme/
├── index.html              # Página principal
├── package.json            # Configuración npm
├── README.md               # Este archivo
├── assets/
│   ├── design-tokens.json  # Tokens de diseño (JSON)
│   └── design-tokens.css   # Tokens de diseño (CSS Custom Properties)
├── docs/
│   └── brand-guidelines.md # Guías de marca completas
├── public/
│   └── favicon.svg         # Favicon
├── scripts/
│   └── main.js             # JavaScript principal (ES Modules)
└── styles/
    └── main.css            # Estilos principales
```

## 🎨 Sistema de Diseño

El proyecto utiliza un sistema de diseño basado en **Design Tokens** definidos en:
- `assets/design-tokens.json` — Para uso en herramientas de diseño (Figma, etc.)
- `assets/design-tokens.css` — Variables CSS nativas (`--color-*`, `--space-*`, `--font-*`, etc.)

### Colores Principales
| Token | Valor | Uso |
|-------|-------|-----|
| `--color-industrial-blue` | `#1B3A4B` | Primario, headers, CTAs principales |
| `--color-safety-orange` | `#E86C00` | Secundario, alertas, highlights |
| `--color-technical-blue` | `#00A3E0` | Acento, enlaces, datos técnicos |

### Tipografía
- **Headings & Body:** Inter (400, 500, 600, 700)
- **Mono/Technical:** JetBrains Mono (400, 500)

### Espaciado
Sistema basado en 8px (`--space-base: 8px`):
- `--space-1` a `--space-9` (4px a 96px)

### Breakpoints
- Mobile: `< 640px`
- Tablet: `640px - 1023px`
- Desktop: `1024px - 1439px`
- Wide: `≥ 1440px`

## 🛠️ Tecnologías

- **HTML5** semántico y accesible (WCAG 2.1 AA)
- **CSS Custom Properties** para theming
- **Vanilla JavaScript (ES Modules)** sin dependencias
- **IntersectionObserver** para animaciones y lazy loading
- **Mobile-first** responsive design

## ♿ Accesibilidad

- Skip links para navegación por teclado
- ARIA labels y roles semánticos
- Contraste WCAG AA/AAA
- Focus visible en todos los elementos interactivos
- `prefers-reduced-motion` respetado
- Formularios con validación accesible

## 📱 Secciones de la Web

1. **Hero** — Presentación principal con estadísticas y visual técnico
2. **Productos** — Compactadoras, Bandas Transportadoras, Ingeniería a Medida
3. **Servicios** — 6 servicios técnicos (Diseño, Mantenimiento, Retrofit, Fabricación, Normativa, Formación)
4. **Proyectos** — 3 casos de éxito con métricas reales
5. **Nosotros** — Valores, talleres, certificaciones, equipo
6. **CTA** — Llamada a la acción principal
7. **Contacto** — Formulario validado + información de contacto
8. **Footer** — Navegación, certificaciones, redes sociales

## 🔧 Personalización

### Cambiar Colores
Edita `assets/design-tokens.css` y actualiza las variables `--color-*` en `:root`.

### Añadir Fuentes
1. Añade `<link>` en `<head>` de `index.html`
2. Actualiza `--font-heading`, `--font-body`, `--font-mono` en `design-tokens.css`

### Modificar Breakpoints
Actualiza `--breakpoint-*` en `design-tokens.css` y los media queries en `styles/main.css`.

## 📋 Guías de Marca

Ver `docs/brand-guidelines.md` para:
- Paleta de colores completa con accesibilidad
- Escala tipográfica detallada
- Reglas de uso de logo
- Voz y tono de marca
- Directrices de fotografía e ilustración
- Especificaciones de componentes (botones, cards, formularios, tablas)
- Sistema de movimiento y animaciones
- Tokens extraíbles para automatización

## 🚢 Despliegue

Al ser un sitio estático, se puede desplegar en:
- Netlify / Vercel / Cloudflare Pages (arrastrar carpeta)
- GitHub Pages
- AWS S3 + CloudFront
- Cualquier servidor web (Nginx, Apache)

## 📄 Licencia

Proyecto privado - ASTECME 2026. Todos los derechos reservados.