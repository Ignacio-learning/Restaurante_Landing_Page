window.addEventListener('scroll', function() {
    const scrollPos = window.scrollY;
    const heroBg = document.querySelector('.hero-background');
    const header = document.getElementById('miHeader');
    const btnInicio = document.getElementById('btn-inicio');

    let opacity = 1 - (scrollPos / 600);
    heroBg.style.opacity = opacity >= 0 ? opacity : 0;

    if (scrollPos > 100) {
        header.style.backgroundColor = "rgba(0, 0, 0, 0.9)";
    } else {
        header.style.backgroundColor = "transparent";
    }

    if (scrollPos > 500) {
        btnInicio.classList.add('mostrar-btn');
    } else {
        btnInicio.classList.remove('mostrar-btn');
    }
});


document.addEventListener('DOMContentLoaded', function() {


    const formReserva = document.getElementById('form-reserva');
    const telefonoInput = document.getElementById('telefono');
    const prefijo = '+56 9 ';


    telefonoInput.addEventListener('input', function(e) {
        if (!this.value.startsWith(prefijo)) {

            this.value = prefijo;
        }
    });


    formReserva.addEventListener('submit', function(e) {
        e.preventDefault();


        alert('¡Se agendó exitosamente!');


        formReserva.reset();


        telefonoInput.value = prefijo;
    });
});