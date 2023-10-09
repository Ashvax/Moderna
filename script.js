$(document).ready(function () {
    $('.carousel').slick({
        infinite: true, // Hace que el carrusel sea infinito
        slidesToShow: 1, // Muestra una imagen a la vez, puedes ajustar esto según tus necesidades
        slidesToScroll: 1,
        prevArrow: $('.slick-prev'), // Selecciona el botón "Anterior"
        nextArrow: $('.slick-next'), // Selecciona el botón "Siguiente"
        autoplay: true, // Activa el modo de reproducción automática
        autoplaySpeed: 3000 // Establece la velocidad de cambio en milisegundos (3 segundos en este ejemplo)
    });
});

        form.addEventListener('submit', function (e) {
            e.preventDefault();

            // Aquí puedes realizar la validación de los campos según tus requisitos
            const name = form.querySelector('#name').value;
            const email = form.querySelector('#email').value;
            const message = form.querySelector('#message').value;

            // Ejemplo de validación simple para campos no vacíos
            if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
                alert('Por favor, completa todos los campos.');
                return;
            }

            // Aquí puedes agregar código para enviar el formulario, por ejemplo, mediante una solicitud AJAX

            // Una vez enviado con éxito, puedes mostrar un mensaje de confirmación
            alert('¡Formulario enviado con éxito!');

            // O redirigir a una página de confirmación
            // window.location.href = 'pagina-de-confirmacion.html';
        });
    });
</script>
