export function searchInput() {

    let search = document.querySelector('#header__search');
    let widgets = document.querySelector('#widgets');

    search.addEventListener('click', () => {
        widgets.classList.toggle('active__input');
    });
}