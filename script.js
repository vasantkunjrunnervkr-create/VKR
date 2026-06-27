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
  header.classList.toggle('scrolled', window.scrollY > 50);
});

// ===========================
// HAMBURGER MENU
// ===========================
function toggleMenu(){
  var nav = document.getElementById('mainNav');
  if(nav) nav.classList.toggle('open');
}
document.addEventListener('DOMContentLoaded', function(){
  document.querySelectorAll('nav a').forEach(function(link){
    link.addEventListener('click', function(){
      var nav = document.getElementById('mainNav');
      if(nav) nav.classList.remove('open');
    });
  });
});

// ===========================
// WHAT WE STAND FOR TOGGLE
// ===========================
function toggleStandFor(){
  var box = document.getElementById('standForBox');
  var btn = document.querySelector('.stand-for-btn');
  if(!box) return;
  box.classList.toggle('open');
  btn.innerHTML = box.classList.contains('open')
    ? '<i class="fa-solid fa-chevron-up"></i> What We Stand For'
    : '<i class="fa-solid fa-shield-halved"></i> What We Stand For';
}

// ===========================
// T-SHIRT IMAGE SLIDER
// ===========================
var tCurrent = 0;
function tGoTo(n){
  var slides = document.querySelectorAll('.tslide');
  var dots   = document.querySelectorAll('.tdot');
  if(!slides.length) return;
  // hide slides that don't exist (onerror hidden)
  slides[tCurrent].classList.remove('active');
  if(dots[tCurrent]) dots[tCurrent].classList.remove('active');
  tCurrent = (n + slides.length) % slides.length;
  slides[tCurrent].classList.add('active');
  if(dots[tCurrent]) dots[tCurrent].classList.add('active');
}
function tSlide(dir){ tGoTo(tCurrent + dir); }
// Auto-play tshirt slider
setInterval(function(){ tSlide(1); }, 2500);
