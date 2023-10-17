    function validateForm() {
        var nombre = document.getElementById("nombre").value;
        var email = document.getElementById("email").value;
        var telefono = document.getElementById("telefono").value;
        var mensaje = document.getElementById("mensaje").value;
        var telefonoPattern = /^\d{3}-\d{3}-\d{4}$/;

        var error = '';

        if (!nombre || !email || !telefono || !mensaje) {
            error += 'Todos los campos son obligatorios.<br>';
        }

        if (nombre.length > 50) {
            error += 'El nombre no puede tener más de 50 caracteres.<br>';
        }

        if (email.length > 100 || !isValidEmail(email)) {
            error += 'Por favor, ingresa un email válido.<br>';
        }

        if (telefono.length > 12 || !telefono.match(telefonoPattern)) {
            error += 'Por favor, ingresa un número de teléfono válido en formato 123-456-7890.<br>';
        }

        if (mensaje.length > 500) {
            error += 'El mensaje no puede tener más de 500 caracteres.<br>';
        }

        if (error) {
            document.getElementById('result').innerHTML = '<div style="color:red">' + error + '</div>';
            return false;
        }

        var resultHTML = '<div style="color:green">Datos enviados:<br>';
        resultHTML += 'Nombre: ' + nombre + '<br>';
        resultHTML += 'Email: ' + email + '<br>';
        resultHTML += 'Teléfono: ' + telefono + '<br>';
        resultHTML += 'Mensaje: ' + mensaje + '</div>';

        document.getElementById('result').innerHTML = resultHTML;
        return false;
    }

    function isValidEmail(email) {
        var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailPattern.test(email);
    }
