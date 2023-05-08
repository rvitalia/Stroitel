export function spliting() {
    let select = document.querySelector('#pa_size');
    let height = document.querySelector('#height');
    let width = document.querySelector('#width');
    let depth = document.querySelector('#depth');

    function addParametrs() {
        let dataselect = select.options[select.selectedIndex].text;
        // console.log(dataselect);
        let arrsize = [];
        if (dataselect !== 'Выбрать опцию') {

            arrsize = dataselect.split('x');
            // console.log(arrsize);

            height.textContent = arrsize[0];
            // console.log(arrsize[0]);
            // console.log(height);


            width.textContent = arrsize[1];
            depth.textContent = arrsize[2];
        }

    }
    addParametrs();

    select.addEventListener('change', function () {
        // console.log('изменено');

        addParametrs();
    });
}