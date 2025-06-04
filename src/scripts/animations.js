import { gsap } from "gsap";
import { Observer } from "gsap/Observer";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
gsap.registerPlugin(Observer,ScrollTrigger,ScrollSmoother,ScrollToPlugin);

//ScrollSmoother
ScrollSmoother.create({
  smooth: 1.25,
  effects: true
});

//ScrollToPlugin
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const targetId = this.getAttribute('href');
    if (targetId.length > 1 && document.querySelector(targetId)) {
      e.preventDefault();
      gsap.to(window, {
        duration: 0.15,
        scrollTo: targetId,
        ease: "power2.inOut"
      });
    }
  });
});

//page__specialization - animation
gsap.fromTo(
  ".page__specialization-item",
  { y: 60, opacity: 0, scale: 0.96 },
  {
    y: 0,
    opacity: 1,
    scale: 1,
    duration: 0.7,
    ease: "power2.inOut",
    stagger: 0.12,
    scrollTrigger: {
      trigger: ".page__specialization-content",
      start: "top 90%"
    }
  }
);

//page__about-me-content - ScrollTrigger
gsap.fromTo(
    ".page__about-me-content-highlight",
    { x: -80, opacity: 0 },
    {
        x: 0,
        opacity: 1,
        ease: "power2.inOut",
        scrollTrigger: {
            trigger: ".page__about-me-content-highlight",
            start: "top 120%",
            end: "top 0",
            scrub: true,
            toggleActions: "play reverse play reverse"
        }
    }
);
gsap.fromTo(
    ".page__about-me-content-figure",
    { x: 80, opacity: 0 },
    {
        x: 0,
        opacity: 1,
        ease: "power2.inOut",
        scrollTrigger: {
            trigger: ".page__about-me-content-figure",
            start: "top 120%",
            end: "top 0",
            scrub: true,
            toggleActions: "play reverse play reverse"
        }
    }
);

//page__about-me-stats - animation
gsap.fromTo(
  ".page__about-me-stats-item",
  { y: 40, opacity: 0, scale: 0.96 },
  {
    y: 0,
    opacity: 1,
    scale: 1,
    duration: 0.7,
    ease: "power2.out",
    stagger: 0.15,
    scrollTrigger: {
      trigger: ".page__about-me-stats",
      start: "top 90%"
    }
  }
);

//page__cta - ScrollTrigger
gsap.to(".page__cta-title", {
  "--cta-after-x": "0",
  scrollTrigger: {
    trigger: ".page__cta",
    start: "top 90%",
    end: "top 30%",
    scrub: true,
    toggleActions: "play reverse play reverse"
  }
});