document.addEventListener("DOMContentLoaded", () => {
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
    const imagenes = document.querySelectorAll(".carousel img");

    let currentIndex = 0;

    function actualizarCarrousel() {
        imagenes.forEach((img, index) => {
            if (index === currentIndex) {
                img.style.display = "block";
            } else {
                img.style.display = "none";
            }
        });
    }

    prevBtn.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + imagenes.length) % imagenes.length;
        actualizarCarrousel();
    });

    nextBtn.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % imagenes.length;
        actualizarCarrousel();
    });

    actualizarCarrousel();
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
