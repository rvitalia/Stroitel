export function modalopen() {
    let buttonModal = document.querySelector('[data-modal]');
    let modal = document.querySelector('#modal');
    let body = document.querySelector('body');
    let buttonOrder = document.querySelector('#makeorder');
    let modalCallback = document.querySelector('#modalCallback');
    let paddingOffset = window.innerWidth - document.body.offsetWidth + 'px';
    let buttonClose = document.querySelector('#modalClose');
    let buttoncallbackClose = document.querySelector('#modalcallbackClose');
    let fixwindow = document.querySelectorAll('.fix__block');


    buttonModal.addEventListener('click', (event) => {
        event.preventDefault();
        //добавляем оступ справа при появлении скролла
        document.body.style.paddingRight = paddingOffset;
        let fixwindow = document.querySelectorAll('.fix__block');

        fixwindow.forEach(element => {
            element.style.paddingRight = paddingOffset;
        });

        //открываем модальное окно
        modal.classList.add('modalshow');
        body.classList.add('lock');

        setTimeout(function () {
            modal.style.opacity = '1';
        }, 300)

        //открываем второе модальное окно

        buttonOrder.addEventListener('click', () => {
            modalCallback.classList.add('modalcallback');

            setTimeout(function () {
                modalCallback.style.opacity = '1';
            }, 300)
        })
        buttoncallbackClose.addEventListener('click', ()=>{
            modalCallback.style.opacity = '0';

            setTimeout(function () {
                modalCallback.classList.remove('modalcallback');
            }, 300)
        });

    });




    buttonClose.addEventListener("click", () => {
        modal.style.opacity = '0';

        setTimeout(function () {
            modal.classList.remove('modalshow');

            //убираем отступ справа
            document.body.style.paddingRight = 0;

            fixwindow.forEach(element => {
                element.style.paddingRight = 0;
            });

            body.classList.remove('lock');
        }, 300)
    });
}
