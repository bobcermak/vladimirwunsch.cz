import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
//CSS
import '/src/styles/swiper.css';

//page__about-me - swiper
const swiper = new Swiper('.page__about-me-stats-swiper', {
    modules: [Navigation, Pagination, Autoplay],
    slidesPerView: 1,
    spaceBetween: 24,
    loop: true,
    pagination: {
        clickable: true,
        el: '.page__about-me-stats-swiper-pagination',
    },
    autoplay: {
        delay: 5000,
        disableOnInteraction: true,
    },
    breakpoints: {
        641: {
            slidesPerView: 2
        },
        961: {
            slidesPerView: 3
        }
    }
})