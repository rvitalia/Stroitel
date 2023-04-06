import { Splide } from "@splidejs/splide";

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



let search = document.querySelector('#header__search');
let widgets = document.querySelector('#widgets');

search.addEventListener('click', () => {
  widgets.classList.toggle('active__input');
});

let favourites = document.querySelectorAll('#favourite');
// console.log(favourites);

favourites.forEach(element => {
  element.addEventListener('click', ()=>{
    element.classList.toggle('red'); 
  })
});