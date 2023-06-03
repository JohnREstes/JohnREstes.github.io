const root = document.querySelector(':root')
const first = document.querySelector('.first')
const navbar = document.getElementById("navbar");
const projects = document.querySelectorAll(".project");
const modal = document.getElementById("myModal");
const closeModal = document.getElementById("closeModal"); 
const projectIframe = document.getElementById("projectIframe"); 
const loader = document.getElementById("loaderDiv");
const carouselImage = document.querySelectorAll('[data-image]');
const stickyNav = navbar.offsetTop;
const linkObject = {
    todo: "https://github.com/JohnREstes/Working-Projects/blob/main/Practice_JS/12-Todo%20List/index.html",
    tip: "https://github.com/JohnREstes/Working-Projects/blob/main/Practice_JS/11-Tip%20Calculator/index.html",
    calc: "https://github.com/JohnREstes/Working-Projects/blob/main/Practice_JS/10-Calculator/index.html",
    shop: "https://github.com/JohnREstes/Working-Projects/blob/main/Practice_JS/13-Shopping_Cart/index.html",
    hangman: "https://github.com/JohnREstes/Working-Projects/blob/main/Practice_JS/21-Hangman/index.html",
    tictactoe: "https://github.com/JohnREstes/Working-Projects/blob/main/Practice_JS/22-Tic_Tac_Toe/index.html",
    war: "https://github.com/JohnREstes/Working-Projects/blob/main/Practice_JS/24-War/index.html",
    rpsls: "https://github.com/JohnREstes/Working-Projects/blob/main/Practice_JS/25-RPSLS/index.html",
    weather: "http://dondeestasyolanda.com/weather/",
    '456': "https://456word.com/"
};
const linkObjectNew = {
    Todo: "https://github.com/JohnREstes/Working-Projects/blob/main/Practice_JS/12-Todo%20List/index.html",
    Tip: "https://github.com/JohnREstes/Working-Projects/blob/main/Practice_JS/11-Tip%20Calculator/index.html",
    Calc: "https://github.com/JohnREstes/Working-Projects/blob/main/Practice_JS/10-Calculator/index.html",
    Shop: "https://github.com/JohnREstes/Working-Projects/blob/main/Practice_JS/13-Shopping_Cart/index.html",
    hangman: "https://github.com/JohnREstes/Working-Projects/blob/main/Practice_JS/21-Hangman/index.html",
    tictactoe: "https://github.com/JohnREstes/Working-Projects/blob/main/Practice_JS/22-Tic_Tac_Toe/index.html",
    War: "https://github.com/JohnREstes/Working-Projects/blob/main/Practice_JS/24-War/index.html",
    RPSLS: "https://github.com/JohnREstes/Working-Projects/blob/main/Practice_JS/25-RPSLS/index.html",
    weather: "http://dondeestasyolanda.com/weather/",
    '456': "https://456word.com/"
};

const observer = new IntersectionObserver(entries => {
    if(!(entries[0].isIntersecting)){
        navbar.classList.toggle("sticky");
        root.style.setProperty("--animation-duration", "0s")
    }
},{
    rootMargin: (stickyNav + "px")
});

observer.observe(first)

projects.forEach(project =>{
    project.onclick = (e) =>{
        console.log(e.target.id);
        loader.style.zIndex = 20;
        modal.classList.add('show');
        setTimeout(()=>{
            loader.style.zIndex = -20;
        },1250)
        if(e.target.id == '456'){
            projectIframe.src = linkObject[e.target.id]
        } else if(e.target.id == 'weather' ){
            projectIframe.src = linkObject[e.target.id]  
            projectIframe.scrolling = 'yes';          
        } else {
            projectIframe.src = `https://htmlpreview.github.io/?${linkObject[e.target.id]}`
        }
    }
})

// When the user clicks on <span> (x), close the modal
closeModal.onclick = function() {
    modal.classList.remove('show');
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.classList.remove('show');
  }
}

projectIframe.addEventListener("load", removeLoader);

function removeLoader() {
    setTimeout(()=>{
        loader.style.zIndex = -20;
    },500)
}

const carousel = document.querySelector('.frame');
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
}, 4000); // Automatically slide to the next image every 5 seconds

const leftArrow = document.getElementById('arrow-left');
const rightArrow = document.getElementById('arrow-right');
rightArrow.addEventListener('click', slideNext);
leftArrow.addEventListener('click', slidePrev);
