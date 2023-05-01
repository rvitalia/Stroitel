import Swiper, { Navigation } from 'swiper';
import { hideAttr } from './attributes';
import { burger } from './burger';
import { favourite } from './favourite';
import { hoverVideoadventages, hoverVideotesting } from './hovervideo';
import { modalopen } from './modal';
import { removeClass } from './removeclass';

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
//включен поля поиска
searchInput();
//открытие модального окна по клику
modalopen();
//однократный запуск модального окна по пролистыванию
modalopenOnce();
//запуск вмдео двух категорий по наведению и по клику для мобильных
//hoverVideoadventages();
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
//слайдер для мобильного раздел документы и испытания
sliderTest();
//вызов бургера
burger();
//покраска середечек в акцентный цыет
favourite();

//скрытие атрибутов в каталоге товаров
hideAttr();

//убираем класс отображения для страницы single-product.



removeClass('.single-product-data', 'single-product-data');
removeClass('.single-product-data', 'single-product-data');


