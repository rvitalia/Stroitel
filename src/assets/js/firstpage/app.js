import Swiper, { Pagination, Navigation } from 'swiper';
import { burger } from './burger';
import { hoverVideoadventages, hoverVideotesting } from './hovervideo';
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
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    576: {
      slidesPerView: 2,
    },

    850: {
      slidesPerView: 3,
    },
    1300: {
      slidesPerView: 4,
    }
  }
});



function modalopenOnce() {
  let flagOpen = false;
  let trigger = document.querySelector('[data-trigger]');
  let triggerPos = trigger.getBoundingClientRect().top;
  let buttonModal = document.querySelector('[data-modal]');

  window.addEventListener('scroll', () => {
    let posTop = window.pageYOffset;


    if (posTop > triggerPos && flagOpen != true) {
      flagOpen = true;
      buttonModal.click();
    }

  });
}

searchInput();
modalopen();
modalopenOnce();

  hoverVideoadventages();
  hoverVideotesting();



function sliderTest() {
  if (window.innerWidth <= 1440) {
    const swiperadv = new Swiper('.swiper__testing', {
      slidesPerView: 3,
      modules: [Navigation],
      spaceBetween: 30,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        630: {
          slidesPerView: 2,
        },

        1170: {
          slidesPerView: 3,
        }
      }
    });
  }
}

sliderTest();
burger();