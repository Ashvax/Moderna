<<<<<<< HEAD
const carousel = document.querySelector('.carousel');
const slides = document.querySelectorAll('.carousel-slide');

let currentIndex = 0;

function showSlide(index) {
    if (index < 0) {
        currentIndex = slides.length - 1;
    } else if (index >= slides.length) {
        currentIndex = 0;
    }

    const translateX = -currentIndex * 100 + '%';
    carousel.style.transform = `translateX(${translateX})`;
}

function nextSlide() {
    currentIndex++;
    showSlide(currentIndex);
}

function prevSlide() {
    currentIndex--;
    showSlide(currentIndex);
}

setInterval(nextSlide, 5000); // Cambia automáticamente cada 5 segundos

// Agrega eventos de clic para la navegación
carousel.addEventListener('click', nextSlide);
=======
const carousel = document.querySelector('.carousel');
const slides = document.querySelectorAll('.carousel-slide');

let currentIndex = 0;

function showSlide(index) {
    if (index < 0) {
        currentIndex = slides.length - 1;
    } else if (index >= slides.length) {
        currentIndex = 0;
    }

    const translateX = -currentIndex * 100 + '%';
    carousel.style.transform = `translateX(${translateX})`;
}

function nextSlide() {
    currentIndex++;
    showSlide(currentIndex);
}

function prevSlide() {
    currentIndex--;
    showSlide(currentIndex);
}

setInterval(nextSlide, 5000); // Cambia automáticamente cada 5 segundos

// Agrega eventos de clic para la navegación
carousel.addEventListener('click', nextSlide);
>>>>>>> 7a94d3db895346f9b9d6ee5b75f8cf0ae9a94cb2
