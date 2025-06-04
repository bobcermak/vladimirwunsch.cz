import './fontawesome.js';
import './animations.js';
import './swiper.js';

//page__advertisement - none content
document.addEventListener('DOMContentLoaded', () => {
  const adv = document.querySelector('.page__advertisement');
  const advText = adv?.querySelector('.page__advertisement-text');
  if (adv && advText && advText.textContent.trim() === "") {
    adv.style.display = 'none';
  }
});

//footer
document.getElementById("year").textContent = new Date().getFullYear();