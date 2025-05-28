const carousel = document.querySelector('.carousel-container');
const track = document.querySelector('.carousel-track');
const slides = Array.from(document.querySelectorAll('.carousel-item'));//We make a array whith our items (images)
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let currentSlide = 0;

function updateCarousel() {
  const slideWidth = carousel.clientWidth;//we get the width of our carousel
  track.style.transform = `translateX(-${currentSlide * slideWidth}px)`;//we translateX to change the current image
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

window.addEventListener('resize', updateCarousel);//we update the carousel if there is a resize