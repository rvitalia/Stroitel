export function burger() {
    let burger = document.querySelector('#burger');
    let burgermenu = document.querySelector('#menu__burger');
    let closeButton = document.querySelector('[data-close]');
    let buttonsMenu = document.querySelectorAll('[data-select]');
    let iconSearch = document.querySelector('[data-search="icon"]');
    let searchInput = document.querySelector('[data-search="input"]');
   // console.log(burger);
    burger.addEventListener('click', () => {

        burgermenu.classList.add('burger-active');
        setTimeout(function () {
            burgermenu.style.opacity = '1';
            burgermenu.style.transform = 'translateX(0)';

        }, 200)
    })
    closeButton.addEventListener('click', () => {
        burgermenu.style.opacity = '0';
        burgermenu.style.transform = 'translateX(-200%)';
        setTimeout(function () {
            burgermenu.classList.remove('burger-active');
        }, 200)
    })

    buttonsMenu.forEach(element => {
        element.addEventListener('click', () => {
            burgermenu.style.opacity = '0';
            burgermenu.style.transform = 'translateX(-200%)';
            setTimeout(function () {
                burgermenu.classList.remove('burger-active');
            }, 200)
        })
    });

    iconSearch.addEventListener('click', (event) => {
        event.preventDefault();
        searchInput.classList.toggle('search-active');
    })


}