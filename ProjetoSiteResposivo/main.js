
window.sr =ScrollReveal({reset: true});

sr.reveal("#showcase-container", {
    origin: "top",
    distance: "20px",
    duration: 760,
    delay: 300
})

sr.reveal("#features", {
    origin: "top",
    distance: "20px",
    duration: 760,
    delay: 300
})


sr.reveal("#places", {
    origin: "top",
    distance: "20px",
    duration: 1200,
    delay: 400
})

sr.reveal("#testimonials", {
    origin: "top",
    distance: "20px",
    duration: 1200,
    delay: 400
})

sr.reveal("#product", {
    origin: "top",
    distance: "20px",
    duration: 1200,
    delay: 400
})

sr.reveal("#features", {
    origin: "top",
    distance: "20px",
    duration: 1200,
    delay: 400
})
sr.reveal("#gallery", {
    origin: "top",
    distance: "60px",
    duration: 1200,
    delay: 400
})

var slides = document.querySelectorAll('.slide');
var btns = document.querySelectorAll('.btn');
let currentSlide = 1;

// Javascript for image slider manual navigation
var manualNav = function(manual){
  slides.forEach((slide) => {
    slide.classList.remove('active');

    btns.forEach((btn) => {
      btn.classList.remove('active');
    });
  });

  slides[manual].classList.add('active');
  btns[manual].classList.add('active');
}

btns.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    manualNav(i);
    currentSlide = i;
  });
});

// Javascript for image slider autoplay navigation
var repeat = function(activeClass){
  let active = document.getElementsByClassName('active');
  let i = 1;

  var repeater = () => {
    setTimeout(function(){
      [...active].forEach((activeSlide) => {
        activeSlide.classList.remove('active');
      });

    slides[i].classList.add('active');
    btns[i].classList.add('active');
    i++;

    if(slides.length == i){
      i = 0;
    }
    if(i >= slides.length){
      return;
    }
    repeater();
  }, 10000);
  }
  repeater();
}
repeat();
