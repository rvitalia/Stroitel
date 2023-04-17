export function hoverVideoadventages(){
    let imgplay = document.querySelectorAll('[data-play]');
    imgplay.forEach(element => {
        let playercurrent;
        let imgcurrent;
        element.addEventListener('mouseover',(event)=>{
            playercurrent = event.target;
            let playParent = playercurrent.closest('.adventages__video__container');
            imgcurrent = playParent.querySelector('.adventages__inner__row__item__video__bg');
            imgcurrent.style.display = 'none';
            playercurrent.play();


        })
        element.addEventListener('mouseout',(event)=>{
            (playercurrent).pause();
            imgcurrent.style.display = 'block';
        })
    });
}

export function hoverVideotesting(){
    let imgplay = document.querySelectorAll('[data-playtest]');
    imgplay.forEach(element => {
        let playercurrent;
        let imgcurrent;
        element.addEventListener('mouseover',(event)=>{
            playercurrent = event.target;
            let playParent = playercurrent.closest('.testing__inner__tests__item__container');
            imgcurrent = playParent.querySelector('.testing__inner__tests__item__container__present');
            imgcurrent.style.display = 'none';
            playercurrent.play();
        })
        element.addEventListener('mouseout',(event)=>{
            (playercurrent).pause();
            imgcurrent.style.display = 'flex';
        })
    });
}