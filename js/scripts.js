document.addEventListener('DOMContentLoaded', function() {
    const iconoDesplegable = document.getElementById('iconoDesplegable');
    const menuDesplegable = document.getElementById('menuDesplegable');
    const encabezado2 = document.querySelector('.encabezado2'); // Utiliza querySelector para seleccionar el primer elemento con la clase
    
    iconoDesplegable.addEventListener('click', function() {
      console.log("holaaaaaaaa");
      menuDesplegable.classList.toggle('mostrar');
      encabezado2.classList.toggle('mostrar');

      // Cambiar las clases del ícono al hacer clic
      iconoDesplegable.classList.toggle('fa-bars');
      iconoDesplegable.classList.toggle('fa-x');
    });
  });

  // Carousell

  document.addEventListener('DOMContentLoaded', function() {
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
let currentSlide = 0;

function showSlide(index) {
  slides.forEach((slide) => {
    slide.style.transform = `translateX(-${index * 100}%)`;
  });

  dots.forEach((dot, i) => {
    dot.classList.toggle('active', i === index);
  });
}

dots.forEach((dot, i) => {
  dot.addEventListener('click', () => {
    currentSlide = i;
    showSlide(currentSlide);
  });
});

setInterval(() => {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}, 3000); // Cambiar cada 3 segundos (3000 milisegundos)
});