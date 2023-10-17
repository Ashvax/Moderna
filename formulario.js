// Función para mostrar un mensaje en la consola
function mostrarMensaje(mensaje) {
    console.log(mensaje);
  }
  
  // Crear un elemento de formulario
  const form = document.createElement('form');
  
  // Crear un elemento de entrada de texto para el nombre
  const nameInput = document.createElement('input');
  nameInput.type = 'text';
  nameInput.placeholder = 'Nombre';
  
  // Crear un elemento de entrada de texto para el correo electrónico
  const emailInput = document.createElement('input');
  emailInput.type = 'email';
  emailInput.placeholder = 'Correo Electrónico';
  
  // Crear un área de texto para el mensaje
  const messageInput = document.createElement('textarea');
  messageInput.placeholder = 'Mensaje';
  
  // Crear un botón de envío
  const submitButton = document.createElement('button');
  submitButton.textContent = 'Enviar';
  
  // Agregar elementos al formulario
  form.appendChild(nameInput);
  form.appendChild(emailInput);
  form.appendChild(messageInput);
  form.appendChild(submitButton);
  
  // Agregar el formulario al documento
  document.body.appendChild(form);
  
  // Función para manejar el envío del formulario
  form.addEventListener('submit', function (event) {
    event.preventDefault(); // Evitar que el formulario se envíe
  
    // Obtener los valores de los campos
    const nombre = nameInput.value;
    const email = emailInput.value;
    const mensaje = messageInput.value;
  
    // Mostrar los mensajes en la consola
    mostrarMensaje(`Nombre: ${nombre}`);
    mostrarMensaje(`Correo Electrónico: ${email}`);
    mostrarMensaje(`Mensaje: ${mensaje}`);
  
    // Mensaje de confirmación de envío
    mostrarMensaje("Mensaje enviado con éxito. Gracias por contactarnos.");
  
    // Limpiar los campos después del envío
    nameInput.value = '';
    emailInput.value = '';
    messageInput.value = '';
  });
  