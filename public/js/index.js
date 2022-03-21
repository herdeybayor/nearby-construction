let nav = document.getElementById('navigation');
function toggleMenu() {
  nav.classList.toggle('navigation--visible');
}


//NAV SCROLL
let abt = document.querySelector('.about-btn');
let footerAbt = document.querySelector('.about-footer-btn');
var el = document.querySelector('.about-section');


let projects = document.querySelector('.project-btn');
let footerProjects = document.querySelector('.footer-projects-btn');
let featuredProjects = document.querySelector('.featured-projects-btn');
var projectEl = document.querySelector('.project-section');

let contact = document.querySelector('.contact-btn');
let heroBtn = document.querySelector('.contact-hero-btn');
let todayBtn = document.querySelector('.today-btn');
let footerContactBtn = document.querySelector('.footer-contact-btn');
var contactEl = document.querySelector('.contact-section');


let exploreBtn = document.querySelector('.explore-btn');
let toServiceBtn = document.querySelector('.to-service-btn');
let toServiceBtn2 = document.querySelector('.to-service-btn2');
let toServiceBtn3 = document.querySelector('.to-service-btn3');
var exploreEl = document.querySelector('.explore-service');

abt.addEventListener('click', function () {
  el.scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"});
});
footerAbt.addEventListener('click', function () {
  el.scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"});
});
projects.addEventListener('click', function () {
  projectEl.scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"});
});
footerProjects.addEventListener('click', function () {
  projectEl.scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"});
});
//featuredProjects.addEventListener('click', function () {
//  projectEl.scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"});
//});
contact.addEventListener('click', function () {
  contactEl.scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"});
});
heroBtn.addEventListener('click', function () {
  contactEl.scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"});
});
//todayBtn.addEventListener('click', function () {
//  contactEl.scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"});
//});
footerContactBtn.addEventListener('click', function () {
  contactEl.scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"});
});
exploreBtn.addEventListener('click', function () {
  exploreEl.scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"});
});
toServiceBtn.addEventListener('click', function () {
  exploreEl.scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"});
});
toServiceBtn2.addEventListener('click', function () {
  exploreEl.scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"});
});
toServiceBtn3.addEventListener('click', function () {
  exploreEl.scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"});
});
// NAV SCROLL

// SLIDER

var slideIndex = 1;

var myTimer;

var slideshowContainer;

// window.addEventListener('load', function () {
//   showSlides(slideIndex);
//   myTimer = setInterval(function () {
//     plusSlides(1);
//   }, 4000);

  //COMMENT OUT THE LINE BELOW TO KEEP ARROWS PART OF MOUSEENTER PAUSE/RESUME
  slideshowContainer = document.getElementsByClassName('slideshow-inner')[0];

  //UNCOMMENT OUT THE LINE BELOW TO KEEP ARROWS PART OF MOUSEENTER PAUSE/RESUME
  // slideshowContainer = document.getElementsByClassName('slideshow-container')[0];

//   slideshowContainer.addEventListener('mouseenter', pause);
//   slideshowContainer.addEventListener('mouseleave', resume);

// NEXT AND PREVIOUS CONTROL
function plusSlides(n) {
  clearInterval(myTimer);
  if (n < 0) {
    showSlides((slideIndex -= 1));
  } else {
    showSlides((slideIndex += 1));
  }

  //COMMENT OUT THE LINES BELOW TO KEEP ARROWS PART OF MOUSEENTER PAUSE/RESUME

  if (n === -1) {
    myTimer = setInterval(function () {
      plusSlides(n + 2);
    }, 4000);
  } else {
    myTimer = setInterval(function () {
      plusSlides(n + 1);
    }, 4000);
  }
}

//Controls the current slide and resets interval if needed
function currentSlide(n) {
  clearInterval(myTimer);
  myTimer = setInterval(function () {
    plusSlides(n + 1);
  }, 4000);
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName('mySlides');
  var dots = document.getElementsByClassName('dot');
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' active', '');
  }
  slides[slideIndex - 1].style.display = 'block';
  dots[slideIndex - 1].className += ' active';
}

pause = () => {
  clearInterval(myTimer);
};

resume = () => {
  clearInterval(myTimer);
  myTimer = setInterval(function () {
    plusSlides(slideIndex);
  }, 4000);
};
