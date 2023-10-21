function validateForm() {
    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();
    const resultDiv = document.getElementById("result");

    if (!nombre || !email || !mensaje) {
        resultDiv.innerHTML = "Por favor, complete todos los campos.";
        return false;
    }

    const mensajeEnviado = `Mensaje enviado por ${nombre} (${email}): ${mensaje}`;
    const mensajeElement = document.createElement("p");
    mensajeElement.textContent = mensajeEnviado;
    resultDiv.appendChild(mensajeElement);

    // Limpia los campos del formulario después de enviar
    document.getElementById("nombre").value = "";
    document.getElementById("email").value = "";
    document.getElementById("mensaje").value = "";

    return false;
}
