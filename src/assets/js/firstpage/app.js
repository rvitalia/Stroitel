import Swiper, { Pagination, Navigation } from 'swiper';

Swiper.use([Pagination]);

const swiperhero = new Swiper('.swiper__hero', {
    pagination: {
        el: '.swiper-pagination',
        clickable: 'true',
        type: 'bullets',
    },
});

const swiperadv = new Swiper('.swiper__adventages', {
    modules: [Navigation],
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});



// export function search() {
//     let search = document.querySelector('#header__search');
//     console.log(search);
//     let widgets = document.querySelector('#widgets');
//     console.log(widgets);

//     search.addEventListener('click', () => {
//         widgets.classList.toggle('active__input');
//         console.log(widgets);
//     })
// }
// search();