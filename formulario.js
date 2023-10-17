<script>
// Función para manejar el envío del formulario
document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault(); 

   
    const nombre = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const mensaje = document.getElementById('message').value;

    
    console.log(`Nombre: ${nombre}`);
    console.log(`Correo Electrónico: ${email}`);
    console.log(`Mensaje: ${mensaje}`);

  
    alert('Mensaje enviado con éxito. Gracias por contactarnos.');
});
</script>