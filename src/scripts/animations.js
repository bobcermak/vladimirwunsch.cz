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

//page__header-hero - animation
const hero = gsap.timeline({
  scrollTrigger: {
    trigger: ".page__header-hero",
    start: "top 80%",
  }
});
hero.from(".page__header-hero-header-title", {
    y: 60,
    opacity: 0,
    duration: 0.6,
    ease: "power2.inOut"
  })
  .from(".page__header-hero-header-text", {
    y: 40,
    opacity: 0,
    duration: 0.5,
    ease: "power2.inOut"
  }, "-=.4.5")
  .from(".page__header-hero-content-buttons li", {
    y: 30,
    opacity: 0,
    duration: 0.4,
    ease: "power2.inOut",
    stagger: 0.15
  }, "-=.3.5")
  .from(".page__header-image", {
    x: 80,
    opacity: 0,
    duration: 0.7,
    ease: "power2.inOut"
  }, "-=.2");

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
    ease: "power2.inOut",
    stagger: 0.15,
    scrollTrigger: {
      trigger: ".page__about-me-stats",
      start: "top 80%"
    }
  }
);

//page__business-sparing-partner - animation
const bsp = gsap.timeline({
  scrollTrigger: {
    trigger: ".page__business-sparing-partner-wrapper",
    start: "top 80%"
  }
});
bsp.from(".page__business-sparing-partner-header h2", {
    x: -60,
    opacity: 0,
    duration: 0.5,
    ease: "power2.inOut"
  })
  .from(".page__business-sparing-partner-header p", {
    x: -40,
    opacity: 0,
    duration: 0.4,
    ease: "power2.inOut"
  }, "-=.3")
  .from(".page__business-sparing-partner-content-text", {
    y: 30,
    opacity: 0,
    duration: 0.35,
    ease: "power2.inOut"
  }, "-=.2")
  .from(".page__business-sparing-partner-content-button", {
    y: 30,
    opacity: 0,
    duration: 0.35,
    ease: "power2.inOut"
  }, "-=.25")
  .from(".page__business-sparing-partner-card", {
    x: 60,
    opacity: 0,
    duration: 0.5,
    ease: "power2.inOut"
  }, "-=.3")
  .from(".page__business-sparing-partner-card-item", {
    y: 30,
    opacity: 0,
    duration: 0.35,
    ease: "power2.inOut",
    stagger: 0.12
  }, "-=.3");