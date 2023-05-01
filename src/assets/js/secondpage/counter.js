export function counter() {
    // let containerCount = document.querySelector('.productinfo__inner__right__dataprice');
    // let counter = document.querySelector('#digit__count');
    let operationMinus = document.querySelector('[data-operation="minus"]');
    let operationPlus = document.querySelector('[data-operation="plus"]');

    //запускаем обработчик кликов по разделу счетчика.

    window.addEventListener('click', (event) => {
        let currentClick = event.target;

        if (currentClick.dataset.operation === "plus") {
            let containerCount = currentClick.closest('.productinfo__inner__right__dataprice');
            let counter = containerCount.querySelector('[data-count="digit__count"]');
            counter.value++;
        }

        else if (currentClick.dataset.operation === "minus") {
            let containerCount = currentClick.closest('.productinfo__inner__right__dataprice');
            let counter = containerCount.querySelector('[data-count="digit__count"]');

            if (counter.value > 1) {
                counter.value--;
            }
        }
        else{
            
        }
    })

}