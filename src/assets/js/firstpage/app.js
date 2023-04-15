import Swiper, { Pagination, Navigation } from 'swiper';

import { searchInput } from "./search";

const swiperadv = new Swiper('.swiper__catalog', {
    slidesPerView: 4,
    spaceBetween: 27,
    modules: [Navigation],
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});


searchInput();
