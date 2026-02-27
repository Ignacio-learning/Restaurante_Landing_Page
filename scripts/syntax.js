window.addEventListener('scroll', function() {
    const scrollPos = window.scrollY;
    const heroBg = document.querySelector('.hero-background');
    const header = document.getElementById('miHeader');
    const btnInicio = document.getElementById('btn-inicio');

    let opacity = 1 - (scrollPos / 600);
    heroBg.style.opacity = opacity >= 0 ? opacity : 0;

    // Efecto del Navbar oscuro
    if (scrollPos > 100) {
        header.style.backgroundColor = "rgba(0, 0, 0, 0.9)";
    } else {
        header.style.backgroundColor = "transparent";
    }

    // El Botón "Inicio" hace pop up usando clases CSS
    if (scrollPos > 500) {
        // Agrega la clase que lo hace visible
        btnInicio.classList.add('mostrar-btn');
    } else {
        // Quita la clase y vuelve a su estado inicial oculto
        btnInicio.classList.remove('mostrar-btn');
    }
});