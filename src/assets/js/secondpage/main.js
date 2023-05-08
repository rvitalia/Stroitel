import { Splide } from "@splidejs/splide";
import { burger } from "../firstpage/burger";
import { searchInput } from "../firstpage/search";
import Swiper, { Navigation } from 'swiper';
import { removeClass } from "../firstpage/removeclass";
import { hideAttrleft, hideAttrright } from "../firstpage/attributes";
import { counter } from "./counter";
import { spliting } from "./split";
import { hideAttr } from "./related";


var splide = new Splide('#main-carousel', {
  // width: 694,
  // height: 565,
  pagination: false,
  cover: true
});



// Collects LI elements:
var thumbnails = document.getElementsByClassName('thumbnail');
var current;



for (var i = 0; i < thumbnails.length; i++) {
  initThumbnail(thumbnails[i], i);
}

// The function to initialize each thumbnail.
function initThumbnail(thumbnail, index) {
  thumbnail.addEventListener('click', function () {
    splide.go(index);
  });
}

splide.on("mounted move", function () {
  var thumbnail = thumbnails[splide.index];

  if (thumbnail) {
    if (current) {
      current.classList.remove("is-active");
    }

    thumbnail.classList.add("is-active");
    current = thumbnail;
  }
});

splide.mount();



// searchInput();

let favourites = document.querySelectorAll('#favourite');
// console.log(favourites);

favourites.forEach(element => {
  element.addEventListener('click', ()=>{
    element.classList.toggle('red'); 
  })
});

burger();


//делаем перемещение блока через js при разрешении меньше 992px

function contentMove (){
  let content = document.querySelector('[data-content]');
  let  blokToInsert = document.querySelector('[data-insert]');
  if (window.innerWidth <= 992) {
    blokToInsert.appendChild(content);
  }
}


// удаляем классы отображения товаров каталога
removeClass('.catalog__value', 'catalog__value');
removeClass('.catalog__label', 'catalog__label');
removeClass('.catalog_attributes', 'catalog_attributes');

//скрываем ненужные атрибуты в таблице слева
hideAttrleft();
//скрываем ненужные атрибуты в таблице справа
hideAttrright();

//счетчик
counter();

//подставка значений в контейнеры и корректировки
spliting();
//скрываем атрибуты
hideAttr();


contentMove ();

//запуск слайдера 
const swiperrelated = new Swiper('.swiper__catalog', {
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