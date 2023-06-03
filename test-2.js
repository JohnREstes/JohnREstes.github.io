const carousel = document.querySelector('.carousel');
const carouselImages = document.querySelector('.carousel-images');
const images = Array.from(document.querySelectorAll('.carousel-images img'));

let currentIndex = 0;
const imageWidth = carousel.clientWidth;
let forwardDirection = true;

function slideTo(index) {
  currentIndex = index;
  const translateXValue = -currentIndex * imageWidth;
  carouselImages.style.transform = `translateX(${translateXValue}px)`;
}

function slideNext() {
  if (currentIndex === images.length - 1) {
    forwardDirection = false;
    return;
  } else {
    slideTo(currentIndex + 1);
  }
}

function slidePrev() {
  if (currentIndex === 0) {
    forwardDirection = true;
    return;
  } else {
    slideTo(currentIndex - 1);
  }
}

setInterval(()=>{
  if(!forwardDirection)slidePrev();
  else  slideNext();
}, 2000); // Automatically slide to the next image every 5 seconds

// Optional: Add event listeners for next and previous buttons
const nextButton = document.getElementById('next-button');
const prevButton = document.getElementById('prev-button');
nextButton.addEventListener('click', slideNext);
prevButton.addEventListener('click', slidePrev);
