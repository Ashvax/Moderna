$(document).ready(function(){
    // Inicializa el carrusel con Slick Carousel
    $('.carousel').slick({
      dots: false, // Puedes habilitar o deshabilitar los puntos indicadores
      arrows: true, // Flechas de navegación
      prevArrow: '.slick-prev',
      nextArrow: '.slick-next',
      infinite: true, // Carrusel infinito
      speed: 500, // Velocidad de transición
      slidesToShow: 1, // Cantidad de imágenes mostradas a la vez
      slidesToScroll: 1 // Cantidad de imágenes que se desplazan en cada cambio
    });
  });