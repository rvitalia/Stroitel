export function hoverVideoadventages() {
    let flag = false;
    let imgplay = document.querySelectorAll('[data-play]');
    imgplay.forEach(element => {
        let playercurrent;
        let imgcurrent;
        element.addEventListener('mouseover', (event) => {
            playercurrent = event.target;
            let playParent = playercurrent.closest('.adventages__video__container');
            imgcurrent = playParent.querySelector('.adventages__inner__row__item__video__bg');
            imgcurrent.style.display = 'none';
            playercurrent.play();


        })
        element.addEventListener('mouseout', (event) => {
            (playercurrent).pause();
            imgcurrent.style.display = 'block';
        })
        if (window.innerWidth < 768) {
            element.addEventListener('click', (event) => {
                if (flag == false) {
                    playercurrent = event.target;
                    let playParent = playercurrent.closest('.adventages__video__container');
                    imgcurrent = playParent.querySelector('.adventages__inner__row__item__video__bg');
                    imgcurrent.style.display = 'none';
                    playercurrent.play();
                    flag = true;
                }
                else {
                    (playercurrent).pause();
                    imgcurrent.style.display = 'block';
                    flag = false;
                }
            })
        }
    });
}

export function hoverVideotesting() {
    //делаем флаг чтоб понять при клике играет видео или нет.
    let flag = false;
    let imgplay = document.querySelectorAll('[data-playtest]');
    imgplay.forEach(element => {
        let playercurrent;
        let imgcurrent;

        element.addEventListener('click', (event) => {
            playercurrent = event.target;
            let parrentPlayer = playercurrent.closest('.mejs-inner');

            setTimeout(function () {
                let currentstatusplay = parrentPlayer.querySelector('.mejs-controls > .mejs-pause');
                let currentstatuspause = parrentPlayer.querySelector('.mejs-controls > .mejs-play');
                // console.log(currentstatusplay);
                // console.log(currentstatuspause);
                let playParent = playercurrent.closest('.testing__inner__tests__item__container');
                imgcurrent = playParent.querySelector('.testing__inner__tests__item__container__present');

                if (currentstatusplay !== null) {
                    //console.log(currentstatusplay);
                   // imgcurrent.style.transform = 'translateY(40%)';
                    imgcurrent.style.opacity = '0';
                }

                else if (currentstatuspause !== null) {
                    //console.log(currentstatuspause);
                   // imgcurrent.style.transform = 'translateX(0)';
                    imgcurrent.style.opacity = '1';
                }
            }, 100)

        })


    });
}