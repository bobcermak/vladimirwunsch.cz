import './fontawesome.js';
import './animations.js';
import './swiper.js';

//page__advertisement - close button
document.addEventListener('DOMContentLoaded', () => {
  const closeBtn = document.getElementById('close-advertisement');
  const adv = document.querySelector('.page__advertisement');
  if (closeBtn && adv) {
    closeBtn.addEventListener('click', () => {
      gsap.to(adv, {
        height: 0,
        opacity: 0,
        marginBottom: 0,
        paddingTop: 0,
        paddingBottom: 0,
        duration: 0.5,
        ease: "power2.inOut",
        onComplete: () => {
          adv.style.display = 'none';
        }
      });
    });
  }
});

//footer
document.getElementById("year").textContent = new Date().getFullYear();