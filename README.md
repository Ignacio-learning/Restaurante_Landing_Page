# Restaurante JS - Landing Page Gastronómica

[![Licencia: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3-purple.svg)](https://getbootstrap.com/)
[![JavaScript](https://img.shields.io/badge/JavaScript-Vanilla-orange.svg)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

**Restaurante JS** es una página de aterrizaje (Landing Page) de alto impacto visual diseñada para establecimientos gastronómicos que buscan una presencia digital elegante y funcional. El proyecto se centra en una experiencia de usuario fluida, implementando un diseño rústico moderno con efectos de scroll dinámicos y una interfaz responsiva.

---

## 🚀 Tecnologías y Herramientas

### **Frontend & Estructura**
* **HTML5:** Estructura semántica completa para mejorar el SEO y la accesibilidad.
* **CSS3 Personalizado:** Implementación de un sistema de diseño "Rústico-Moderno" utilizando variables visuales, sombras profundas y transiciones suaves.
* **Bootstrap 5.3:** Framework utilizado para la arquitectura de rejilla (Grid System), componentes de navegación (Navbar), el carrusel de platos y el manejo de la responsividad.
* **Bootstrap Icons:** Set de iconos vectoriales para la sección de contacto y redes sociales.

### **Interactividad (Vanilla JavaScript)**
* **Manejo del DOM:** Manipulación directa de elementos para efectos visuales.
* **Scroll-Driven Effects:** Algoritmo personalizado para variar la opacidad del *Hero Background* y cambiar el color del *Header* según la posición del scroll.
* **Validación de Formularios:** Lógica para el control de entrada de datos, incluyendo un prefijo telefónico estático (+56 9) para asegurar el formato regional en Chile.

---

## 🛠️ Características Técnicas Destacadas

1. **Efecto Parallax de Opacidad:** El fondo de la sección principal disminuye su opacidad gradualmente mediante un cálculo matemático basado en la posición vertical del scroll (`window.scrollY`), mejorando la inmersión del usuario.

2. **Arquitectura de Componentes de Bootstrap:**
   * **Navbar Dinámico:** Cambia de transparente a sólido tras superar los 100px de scroll para mantener la legibilidad.
   * **Carrusel Multicapa:** Organización de platos estelares en grupos mediante el componente *Carousel*, optimizado para visualización en escritorio y móviles.

3. **Diseño Visual (UI):**
   * Uso de una paleta de colores cálidos y oscuros para evocar una atmósfera acogedora.
   * Efectos de *hover* en las tarjetas de platos con elevación en el eje Y y feedback visual inmediato.
   * Formulario con estética minimalista utilizando *inputs* de línea única.

4. **Optimización de Experiencia (UX):**
   * **Navegación Suave:** Implementación de `scroll-behavior: smooth` para desplazamientos fluidos entre secciones.
   * **Botón de Inicio Condicional:** El enlace de "Inicio" en el menú se activa mediante JS solo cuando el usuario ha descendido más de 500px.

---

## 📂 Estructura del Proyecto

```text
Restaurant_LandingPage/
├── assets/
│   ├── css/
│   │   └── styles.css      # Estilos personalizados y overrides de Bootstrap
│   └── media/
│       └── img1.jpg        # Recursos visuales (Background y Platos)
├── scripts/
│   └── syntax.js           # Lógica de interactividad y validaciones
└── index.html              # Estructura principal del sitio

```
🔧 Instalación y Uso
Clona este repositorio:

Bash
git clone [https://github.com/tu-usuario/nombre-del-repo.git](https://github.com/tu-usuario/nombre-del-repo.git)
Abre el archivo index.html en tu navegador preferido.

No requiere dependencias externas instaladas localmente, ya que utiliza CDNs para Bootstrap y sus iconos.

🖋️ Autor
Ignacio Desarrollador en formación | Full Stack JavaScript
