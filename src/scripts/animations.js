import { gsap } from "gsap";
import { Observer } from "gsap/Observer";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
gsap.registerPlugin(Observer,ScrollTrigger,ScrollSmoother,ScrollToPlugin);