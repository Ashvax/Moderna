
function mostrarMensaje(mensaje) {
    console.log(mensaje);
  }
  

  const form = document.createElement('form');
  
  const nameInput = document.createElement('input');
  nameInput.type = 'text';
  nameInput.placeholder = 'Nombre';
  
  const emailInput = document.createElement('input');
  emailInput.type = 'email';
  emailInput.placeholder = 'Correo Electrónico';
  
 
  const messageInput = document.createElement('textarea');
  messageInput.placeholder = 'Mensaje';
  
  
  const submitButton = document.createElement('button');
  submitButton.textContent = 'Enviar';
  
  
  form.appendChild(nameInput);
  form.appendChild(emailInput);
  form.appendChild(messageInput);
  form.appendChild(submitButton);
  
  
  document.body.appendChild(form);
  
  // Función para manejar el envío del formulario
  form.addEventListener('submit', function (event) {
    event.preventDefault(); // Evitar que el formulario se envíe
  
  
    const nombre = nameInput.value;
    const email = emailInput.value;
    const mensaje = messageInput.value;
  
    
    mostrarMensaje(`Nombre: ${nombre}`);
    mostrarMensaje(`Correo Electrónico: ${email}`);
    mostrarMensaje(`Mensaje: ${mensaje}`);
  
 
    mostrarMensaje("Mensaje enviado con éxito. Gracias por contactarnos.");
  

    nameInput.value = '';
    emailInput.value = '';
    messageInput.value = '';
  });
  