# Le'Onyx Da'Vida Portfolio

Un portafolio multilingüe construido con Hugo para showcasing de trabajo artístico multidisciplinar, performances y proyectos comunitarios.

## 🎨 Sobre el Proyecto

Este es el portafolio personal de **Le'Onyx Da'Vida**, artista multidisciplinar, profesorx e investigadorx de Bogotá, Colombia. El sitio presenta trabajo en danza contemporánea, performance, creación comunitaria y activismo a través del cruce entre arte, pedagogía y resistencia política.

### 🌐 Sitio Web
- **URL:** https://portafolio-leonyx.netlify.app
- **Idiomas:** Español (principal), Inglés, Francés
- **Tema:** Nomad Tech (adaptado para portafolio artístico)

## 🛠️ Stack Tecnológico

- **Generador de sitios estáticos:** Hugo (v0.120.0+)
- **Tema:** Nomad Tech (customizado)
- **Despliegue:** Netlify
- **Analíticas:** Google Analytics
- **Contenido:** Markdown con front matter

## 📁 Estructura del Proyecto

```
leonyx-portfolio/
├── hugo.toml              # Configuración principal del sitio
├── content/               # Contenido en español (idioma principal)
│   ├── _index.md         # Página de inicio
│   ├── about/            # Biografía y statement artístico
│   ├── portfolio/        # Proyectos artísticos y performances
│   ├── posts/            # Blog y artículos
│   ├── social/           # Integración de redes sociales
│   └── travel/           # Línea de tiempo de viajes
├── content/en/            # Contenido en inglés
├── content/fr/            # Contenido en francés
├── static/               # Archivos estáticos (imágenes, etc.)
├── themes/nomad-tech/     # Tema Hugo personalizado
└── public/               # Sitio construido (generado automáticamente)
```

## 🚀 Comenzando

### Prerrequisitos

- [Hugo Extended](https://gohugo.io/getting-started/installing/) v0.120.0 o superior
- [Git](https://git-scm.com/)

### Instalación y Desarrollo

1. **Clonar el repositorio:**

   ```bash
   git clone <repository-url>
   cd leonyx-portfolio
   ```

2. **Iniciar servidor de desarrollo:**

   ```bash
   hugo server -D
   ```

   El sitio estará disponible en `http://localhost:1313`

3. **Construir para producción:**

   ```bash
   hugo
   ```

   Los archivos generados estarán en `public/`

## 📝 Gestión de Contenido

### Añadir Nueva Entrada de Blog

1. Crear archivo en `content/posts/` con formato `nombre-del-post.md`
2. Incluir front matter con título, fecha, categorías
3. Escribir contenido en Markdown

**Ejemplo:**

```markdown
---
title: "Título del Post"
date: 2024-01-01
categories: ["Arte", "Performance"]
---

Contenido del artículo...
```

### Añadir Nuevo Proyecto al Portafolio

1. Crear archivo en `content/portfolio/` con formato `nombre-del-proyecto.md`
2. Incluir front matter con título, tipo, descripción
3. Añadir imágenes y documentación del proyecto

### Actualizar Información Personal

- **Biografía:** Editar `content/about/_index.md`
- **Contacto:** Editar sección `[params.contact]` en `hugo.toml`
- **Redes sociales:** Editar sección `[params.social]` en `hugo.toml`

## 🌍 Contenido Multilingüe

### Estructura de Idiomas

- **Español:** `content/` (idioma principal)
- **Inglés:** `content/en/`
- **Francés:** `content/fr/`

### Añadir Contenido en Otros Idiomas

Para añadir traducciones, crea archivos correspondientes en las carpetas de idioma:

```
content/en/about/_index.md    # Versión en inglés
content/fr/about/_index.md    # Versión en francés
```

## 🎨 Personalización del Tema

### Configuración Principal

Editar `hugo.toml` para personalizar:

- **Información del sitio:** título, descripción, autor
- **Parámetros:** logo, subtítulo, redes sociales
- **Analytics:** Google Analytics
- **Portfolio:** proyectos destacados

### Personalización Visual

- **Estilos:** `themes/nomad-tech/assets/`
- **Layouts:** `themes/nomad-tech/layouts/`
- **Imágenes:** `static/`

## 🚀 Despliegue

### Netlify (Configuración Actual)

El despliegue es automático mediante push al repositorio. Configuración:

- **Build command:** `hugo`
- **Publish directory:** `public`
- **URL:** https://portafolio-leonyx.netlify.app

### Otros Proveedores

Para desplegar en otros servicios:

```bash
# Construir sitio
hugo

# Subir carpeta 'public' al servidor deseado
```

## 📊 Analytics y SEO

- **Google Analytics:** `G-2310RJEC91`
- **SEO optimizado:** Meta etiquetas, sitemaps
- **Rendimiento:** Optimizado para velocidad

## 🤝 Contribuciones

Este es un portafolio personal. Para sugerencias o mejoras:

1. Crear issue describiendo la propuesta
2. Esperar revisión y aprobación
3. Implementar cambios solicitados

## 📞 Contacto

- **Email:** leonyxdavida@gmail.com
- **WhatsApp:** +573213668876
- **Instagram:** [@leonyx.a.r.t](https://www.instagram.com/leonyx.a.r.t)

## 📄 Licencia

Contenido del portafolio © Le'Onyx Da'Vida.  
Tema Nomad Tech bajo licencia MIT.

---

**Construido con ❤️ para showcasing artístico y activismo cultural**
