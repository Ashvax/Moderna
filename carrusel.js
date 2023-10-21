let botonAnt = document.getElementById('left')
let botonSig = document.getElementById('right')
let contenedorPuntos = document.getElementById('puntitosContainer')
let imagen = document.getElementById('imagenView')

let coleccion = ["./sources/b1.jpg", "./sources/b2.jpg", "./sources/b3.jpg", "./sources/b4.jpg", "./sources/b5.jpg", "./sources/b6.jpg", "./sources/b7.jpg", "./sources/b8.jpg", "./sources/b9.png"]

let puntero = 0;
let intervalo;

window.addEventListener('load', () => {
    imagen.src = coleccion[puntero]
    cargarPuntitos()
    actualizarPuntos()

    
    intervalo = setInterval(cambiarImagenAutomaticamente, 3000);
})

function cargarPuntitos() {
    coleccion.forEach((item, index) => {
        let p = document.createElement('div')
        p.classList.add('punto')
        p.setAttribute('data-index', index)
        contenedorPuntos.appendChild(p)

        
        p.addEventListener('click', () => {
            puntero = parseInt(p.getAttribute('data-index'), 10)
            imagen.src = coleccion[puntero]
            actualizarPuntos()
        })

       
        p.style.cursor = 'pointer';
    })
}

botonSig.addEventListener('click', () => {
    cambiarImagen(1); 
})

botonAnt.addEventListener('click', () => {
    cambiarImagen(-1); 
})

function cambiarImagenAutomaticamente() {
    cambiarImagen(1); 
}

function cambiarImagen(direccion) {
    puntero += direccion;

    if (puntero >= coleccion.length) {
        puntero = 0;
    } else if (puntero < 0) {
        puntero = coleccion.length - 1;
    }

    imagen.src = coleccion[puntero];
    actualizarPuntos();
}

function actualizarPuntos() {
    let pts = document.querySelectorAll('.punto')
    pts.forEach(p => {
        p.classList.remove('puntoActual')
    })
    pts[puntero].classList.add('puntoActual')
}
