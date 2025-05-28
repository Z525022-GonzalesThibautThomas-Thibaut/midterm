const carousel = document.querySelector('.carousel-container');
const track = document.querySelector('.carousel-track');
const slides = Array.from(document.querySelectorAll('.carousel-item'));
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let currentSlide = 0;

function updateCarousel() {
  const slideWidth = carousel.clientWidth;
  track.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
}

prevButton.addEventListener('click', () => {
    if(currentSlide == 0){
        currentSlide = slides.length - 1;
    }
    else{
        currentSlide -= 1;
    }
    updateCarousel();
});

nextButton.addEventListener('click', () => {
    if(currentSlide == slides.length -1){
        currentSlide = 0;
    }
    else{
        currentSlide += 1;
    }
    updateCarousel();
});

window.addEventListener('resize', updateCarousel); // Pour que ça reste centré au redimensionnement