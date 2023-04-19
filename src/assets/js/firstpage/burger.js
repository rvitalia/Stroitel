export function burger(){
    let burger = document.querySelector('#burger');
    let burgermenu = document.querySelector('#menu__burger');
    burger.addEventListener('click', ()=>{
        burgermenu.classList.add('burger-active');
        setTimeout(function(){
            burgermenu.style.opacity = '1';
           // burgermenu.style.transform = 'translateX(0)';
            
        },300)
    })
}