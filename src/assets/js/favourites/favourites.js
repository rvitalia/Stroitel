import { burger } from "../firstpage/burger";


let search = document.querySelector('#header__search');
let widgets = document.querySelector('#widgets');

search.addEventListener('click', () => {
  widgets.classList.toggle('active__input');
});

let favourites = document.querySelectorAll('#favourite');
// console.log(favourites);


favourites.forEach(element => {
  element.addEventListener('click', ()=>{
     console.log(element);
    element.classList.toggle('heart'); 
  })
});

burger();