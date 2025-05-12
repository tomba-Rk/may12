const hamburger = document.querySelector('.hamburger');
const navMenu   = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('active');
  // Optional: animate hamburger into “X”
  hamburger.classList.toggle('open');
});

// Smooth-scroll for “Get Started” button
document.getElementById('get-started').addEventListener('click', e => {
    e.preventDefault();
    document.querySelector('.details').scrollIntoView({ behavior: 'smooth' });
  });
  