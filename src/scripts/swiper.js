import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
//CSS
import '/src/styles/swiper.css';

//page__about-me - swiper
const swiperAboutMe = new Swiper('.page__about-me-stats-content', {
    modules: [Navigation, Autoplay],
    slidesPerView: 1,
    spaceBetween: 24,
    loop: true,
    navigation: {
        nextEl: '.page__about-me-stats-content-button-next',
        prevEl: '.page__about-me-stats-content-button-prev',
    },
    autoplay: {
        delay: 10000,
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
    modules: [Navigation, Autoplay],
    slidesPerView: 1,
    spaceBetween: 24,
    loop: true,
    navigation: {
        nextEl: '.page__my-companies-content-button-next',
        prevEl: '.page__my-companies-content-button-prev',
    },
    autoplay: {
        delay: 14000,
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

//page__reviews - swiper
const swiperReviews = new Swiper('.page__reviews', {
    modules: [Navigation, Autoplay],
    slidesPerView: 1,
    spaceBetween: 24,
    loop: true,
    navigation: {
        nextEl: '.page__reviews-button-next',
        prevEl: '.page__reviews-button-prev',
    },
    autoplay: {
        delay: 14000,
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