// ===========================
// HERO SLIDER
// ===========================
(function(){
  var slides = document.querySelectorAll('.slide');
  if(!slides.length) return;
  var current = 0;
  setInterval(function(){
    slides[current].classList.remove('active');
    current = (current + 1) % slides.length;
    slides[current].classList.add('active');
  }, 3000);
})();

// ===========================
// HEADER SCROLL EFFECT
// ===========================
window.addEventListener('scroll', function(){
  var header = document.getElementById('header');
  if(!header) return;
  if(window.scrollY > 50){
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// ===========================
// HAMBURGER MENU
// ===========================
function toggleMenu(){
  var nav = document.getElementById('mainNav');
  if(nav) nav.classList.toggle('open');
}

document.addEventListener('DOMContentLoaded', function(){
  var navLinks = document.querySelectorAll('nav a');
  navLinks.forEach(function(link){
    link.addEventListener('click', function(){
      var nav = document.getElementById('mainNav');
      if(nav) nav.classList.remove('open');
    });
  });
});
