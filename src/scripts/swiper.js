import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
//CSS
import '/src/styles/swiper.css';

//page__about-me - swiper
const swiperAboutMe = new Swiper('.page__about-me-stats-content', {
    modules: [Navigation, Pagination, Autoplay],
    slidesPerView: 1,
    spaceBetween: 24,
    loop: true,
    pagination: {
        clickable: true,
        el: '.page__about-me-stats-content-swiper-pagination',
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

//page__my-companies - swiper
const swiperMyCompanies = new Swiper('.page__my-companies-content', {
    modules: [Navigation, Pagination, Autoplay],
    slidesPerView: 1,
    spaceBetween: 24,
    loop: true,
    pagination: {
        clickable: true,
        el: '.page__my-companies-content-swiper-pagination',
    },
    autoplay: {
        delay: 5000,
        disableOnInteraction: true,
    },
    breakpoints: {
        641: {
            slidesPerView: 2
        },
        1281: {
            slidesPerView: 3
        }
    }
})