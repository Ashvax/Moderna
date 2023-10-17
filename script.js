let botonAnt= document.getElementById('left')
let botonSig= document.getElementById('right')
let contenedorPuntos= document.getElementById('puntitosContainer')
let imagen = document.getElementById('imagenView')

let coleccion = ["./Dental.png","./Implantes.png","./Limipeza.jpg"]

let puntero=0;

window.addEventListener('load', ()=>{
    imagen.src= coleccion[puntero]
    cargarPuntitos()
    actualizarPuntos()
})

function cargarPuntitos(){
    coleccion.forEach(()=>{
        let p = document.createElement('div')
        p.classList.add('punto')
        contenedorPuntos.appendChild(p)
    })
}


botonSig.addEventListener('click',()=>{
    puntero++

    if(puntero>=coleccion.length){
        puntero=0
    }
    imagen.src= coleccion[puntero]
    actualizarPuntos()

})

botonAnt.addEventListener('click',()=>{
    puntero--
    if(puntero<0){
        puntero=coleccion.length-1
    }

    imagen.src= coleccion[puntero]
    actualizarPuntos()
})

function actualizarPuntos(){
    let pts= document.querySelectorAll('.punto')
    
    pts.forEach(p=>{
        p.classList.remove('puntoActual')
    })

    pts[puntero].classList.add('puntoActual')

}
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
