export function favourite(){
    let hearts = document.querySelectorAll('[data-heart]');

    hearts.forEach(element => {
        element.addEventListener('click',()=>{
            element.classList.toggle('heartaccent');
        })
    });
}