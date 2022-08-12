// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("main-nav").style.padding = "15px 5px";
    document.getElementById("main-nav").style.fontSize = "15px";
  
  } else {
    document.getElementById("main-nav").style.padding = "25px 10px";
    document.getElementById("main-nav").style.fontSize = "20px";
  }
}

//sets navbar equal to main-nav
let navbar = document.getElementById("main-nav");
//tells position of user
let navPos = navbar.getBoundingClientRect().top;
//links for each nav bar section
let navbarLinks = document.querySelectorAll("nav a");

//detects scrolling
window.addEventListener("scroll", e => {
  
  let scrollPos = window.scrollY;
  //if the scrolling is greater than the navbar's postion, add sticky element and offset margin
  if (scrollPos > navPos) {
    navbar.classList.add('sticky');
    home.classList.add('navbarOffsetMargin');
  } else {
    navbar.classList.remove('sticky');
    home.classList.remove('navbarOffsetMargin');
  }
    //loops through each link
    navbarLinks.forEach(link => {
      //creates a section for each part of navbar
      let section = document.querySelector(link.hash);
      //checks if the section is on the screen
      if (scrollPos + 120 > section.offsetTop && scrollPos + 120 < section.offsetTop + section.offsetHeight ) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
});



const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-slide img');
//Buttons
const previousBtn = document.querySelector('#previousBtn');
const nextBtn = document.querySelector('#nextBtn');
//Counter
let counter = 1;
const size = carouselImages[0].clientWidth;


carouselSlide.style.transform = 'translateX(' + (-size*counter) + 'px)';

nextBtn.addEventListener('click',()=>{
    if(counter >= carouselImages.length - 1) return;
    carouselSlide.style.transition = 'transform 0.3s ease-in-out';
    counter++;
    carouselSlide.style.transform = 'translateX(' + (-size*counter) + 'px)';
});

previousBtn.addEventListener('click',()=>{
    if(counter <= 0) return;
    carouselSlide.style.transition = 'transform 0.3s ease-in-out';
    counter--;
    carouselSlide.style.transform = 'translateX(' + (-size*counter) + 'px)';
});


carouselSlide.addEventListener('transitionend',()=>{
    if(carouselImages[counter].id === 'lastClone'){
        carouselSlide.style.transition = 'none';
        counter = carouselImages.length -2;
        carouselSlide.style.transform = 'translateX(' + (-size*counter) + 'px)';
    }
    if(carouselImages[counter].id === 'firstClone'){
        carouselSlide.style.transition = 'none';
        counter = carouselImages.length - counter;
        carouselSlide.style.transform = 'translateX(' + (-size*counter) + 'px)';

    }
});

const open = document.getElementById('open');
const modal_container = document.getElementById('modal_container');
const close = document.getElementById('close');

open.addEventListener('click', () => {
  modal_container.classList.add('show');
});

close.addEventListener('click', () => {
  modal_container.classList.remove('show');
});




