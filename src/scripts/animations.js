import { gsap } from "gsap";
import { Observer } from "gsap/Observer";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
gsap.registerPlugin(Observer,ScrollTrigger,ScrollSmoother,ScrollToPlugin);

//page__advertisement - click
document.addEventListener('DOMContentLoaded', () => {
  const closeBtn = document.getElementById('close-advertisement');
  const adv = document.querySelector('.page__advertisement');
  if (closeBtn && adv) {
    closeBtn.addEventListener('click', () => {
      const advHeight = adv.offsetHeight;
      adv.style.height = advHeight + 'px';
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