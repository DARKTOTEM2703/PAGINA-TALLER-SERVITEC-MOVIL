# YUCATECNO - Página Web del Taller de Telefonía y Reparación

## Descripción

Sitio web oficial para YUCATECNO, taller especializado en reparación de dispositivos móviles ubicado en Mérida, Yucatán. La plataforma permite a los clientes conocer los servicios ofrecidos, visualizar trabajos realizados, obtener información sobre el servicio de paquetería de Mercado Libre, y facilita el contacto directo a través de WhatsApp.

## Tecnologías Utilizadas

- HTML5
- CSS3
- JavaScript
- Bootstrap 5.3.0-alpha3
- Font Awesome 5.15.4
- GSAP (GreenSock Animation Platform)
- ScrollTrigger (complemento de GSAP)
- AOS (Animate On Scroll)
- Facebook SDK (para integración de videos)
- Google Maps (mapa embebido)

## Estructura Visual del Sitio

| Sección        | Componentes Visuales               | Tecnologías Específicas             | Descripción                                                 |
| -------------- | ---------------------------------- | ----------------------------------- | ----------------------------------------------------------- |
| **Navbar**     | Logo, Menú de navegación           | Bootstrap, GSAP                     | Barra de navegación fija con animación de desplazamiento    |
| **Hero**       | Imagen de fondo, Texto, Botón CTA  | GSAP Timeline, Bootstrap            | Sección de bienvenida con llamado a la acción para WhatsApp |
| **Servicios**  | 6 tarjetas de servicios con iconos | Bootstrap Cards, Font Awesome, GSAP | Servicios de reparación con imágenes y efectos hover        |
| **Galería**    | Carrusel de imágenes               | Bootstrap Carousel                  | Muestra de trabajos realizados en formato carrusel          |
| **Paquetería** | Lista de servicios, Imagen ML      | Font Awesome, Bootstrap             | Información sobre punto de recogida Mercado Libre           |
| **Acerca de**  | Información corporativa, Video     | Facebook SDK, Bootstrap             | Historia, misión, visión y video corporativo                |
| **Valores**    | Iconos y texto                     | Font Awesome, Bootstrap Grid        | Presentación visual de los valores de la empresa            |
| **Footer**     | Contacto, Mapa, Redes sociales     | Google Maps API, Font Awesome       | Pie de página con información de contacto y ubicación       |

## Estructura del Proyecto

```
└── 📁TALLER-YUCATECNO/
    ├── 📁CSS/
    │   ├── index.css
    ├── 📁IMG/
    │   ├── baner_1.jpg
    │   ├── logo.png
    ├── 📁JS/
    │   └── animations.js
    ├── index.php
    └── readme.md
```

## Características Principales

### Diseño y Usabilidad

- **Diseño responsivo:** Adaptado para todo tipo de dispositivos (móviles, tablets y escritorio)
- **Accesibilidad:** Contraste optimizado entre textos y fondos para mejor legibilidad
- **Interfaz intuitiva:** Navegación sencilla y clara para mejorar la experiencia de usuario
- **Estética corporativa:** Esquema de colores amarillo-negro consistente en toda la web
- **Tiempo de carga optimizado:** Imágenes comprimidas y código optimizado
- **Identidad visual coherente:** Uso consistente de tipografía y elementos gráficos

### Navegación

- **Navbar fijo:** Se mantiene visible durante toda la navegación del sitio
- **Menú hamburguesa responsivo:** Se adapta automáticamente en dispositivos móviles
- **Indicador de sección activa:** Resalta la sección actual en el menú
- **Enlaces internos suaves:** Desplazamiento animado entre secciones
- **Logo interactivo:** Redirecciona a la página principal
- **Menú colapsable:** Se expande/contrae en dispositivos pequeños

### Secciones Principales

1. **Hero Section**

   - Banner principal a pantalla completa con overlay semi-transparente
   - Texto principal con animación de entrada
   - Botón CTA prominente con efecto de pulsación
   - Mensaje claro sobre el propósito del negocio

2. **Servicios Ofrecidos**

   - 6 tarjetas interactivas con imágenes reales de trabajos
   - Iconos Font Awesome personalizados para cada servicio
   - Efectos hover avanzados con GSAP
   - Descripciones detalladas de cada servicio
   - Animación escalonada al hacer scroll

3. **Galería de Trabajos**

   - Carrusel automático de imágenes con controles manuales
   - Fotografías de alta calidad de dispositivos reparados
   - Transiciones suaves entre imágenes
   - Optimizado para carga rápida de imágenes

4. **Punto de Paquetería**

   - Información detallada del servicio de punto Pick-Up
   - Lista de beneficios con iconografía relacionada
   - Imagen oficial de Mercado Libre
   - Enlace directo a WhatsApp para consultas específicas

5. **Acerca de la Empresa**

   - Historia, misión y visión corporativa
   - Video promocional integrado desde Facebook
   - Sección de valores corporativos con iconos representativos
   - Listado de servicios específicos

6. **Pie de Página**
   - 4 secciones informativas (Acerca de, Contacto, Redes Sociales, Mapa)
   - Formulario de contacto rápido
   - Mapa interactivo con la ubicación exacta del local
   - Enlaces a redes sociales con iconos animados

### Sistema de Animaciones

- **Animaciones de entrada:** Elementos que aparecen con efectos al cargar la página
- **Parallax scroll:** Efecto de profundidad al desplazarse por la página
- **Animaciones disparadas por scroll:** Utilizando AOS para revelar elementos
- **Animaciones GSAP avanzadas:**
  - Timeline coordinada para la sección Hero
  - Efectos hover personalizados en tarjetas de servicios
  - Botón "Volver arriba" con aparición/desaparición suave
  - Resaltado de elementos del menú
- **Transiciones entre secciones:** Movimiento fluido al navegar entre apartados

### Interactividad y Contacto

- **Botones de WhatsApp estratégicos:** Ubicados en puntos clave del sitio
- **Enlaces de contacto rápido:** Teléfono y email con función "click-to-action"
- **Integración de redes sociales:** Facebook, Twitter, Instagram y LinkedIn
- **Mapa interactivo:** Ubicación exacta con Google Maps embebido
- **Botón "Volver arriba":** Aparece automáticamente al descender en la página
- **Galería interactiva:** Control manual y automático del carrusel de imágenes

### Optimización y Rendimiento

- **Imágenes optimizadas:** Balance entre calidad y velocidad de carga
- **Carga condicional de scripts:** Los scripts se cargan solo cuando son necesarios
- **Compatibilidad cross-browser:** Funciona en todos los navegadores modernos
- **Mobile-first:** Diseñado priorizando la experiencia en dispositivos móviles
- **Refuerzo de animaciones:** Sistema redundante para garantizar efectos visuales

## Contacto y Ubicación

- Teléfono: +52 999-384-8314
- Email: yucatecnoyucatan@gmail.com
- Ubicación: Mérida, Yucatán (integrado con Google Maps)

## Despliegue y Acceso Público

- **Plataforma de hosting:** Netlify
- **URL del sitio web:** [https://yucatecno.netlify.app/](https://yucatecno.netlify.app/)
- **Estado actual:** Sitio activo y funcional
- **Última actualización:** 2025

### Ventajas del despliegue en Netlify

- Certificado SSL gratuito (HTTPS)
- Despliegue continuo desde repositorio
- Alta disponibilidad y rápido tiempo de carga
- CDN global para mejor rendimiento

### Acceso por Secciones

El sitio permite acceso directo a secciones específicas mediante fragmentos de URL:

- Inicio: [https://yucatecno.netlify.app/](https://yucatecno.netlify.app/)
- Servicios: [https://yucatecno.netlify.app/#servicios](https://yucatecno.netlify.app/#servicios)
- Galería: [https://yucatecno.netlify.app/#galeria-reparaciones](https://yucatecno.netlify.app/#galeria-reparaciones)
- Paquetería: [https://yucatecno.netlify.app/#paqueteria](https://yucatecno.netlify.app/#paqueteria)
- Acerca de: [https://yucatecno.netlify.app/#acerca-de](https://yucatecno.netlify.app/#acerca-de)

## Autor

Desarrollado por el Ing. Jafet Daniel Gamboa Baas

---

© 2025 YUCATECNO. Todos los derechos reservados.
