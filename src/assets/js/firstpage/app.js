import Swiper, { Pagination, Navigation } from 'swiper';
import { modalopen } from './modal';

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



function modalopenOnce (){
    let flagOpen = false;
    let trigger = document.querySelector('[data-trigger]');
    let triggerPos = trigger.getBoundingClientRect().top;
    let buttonModal = document.querySelector('[data-modal]');

    window.addEventListener('scroll',()=>{
        let posTop = window.pageYOffset;

        console.log(triggerPos);
        console.log(posTop);
        console.log(posTop > triggerPos && flagOpen != true);
        if (posTop > triggerPos && flagOpen != true){
            flagOpen = true;
            buttonModal.click();
        }
        
    });
}

searchInput();
modalopen();
modalopenOnce ();



