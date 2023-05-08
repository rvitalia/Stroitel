export function hideAttr(){
    let simillar = document.querySelector('.similar__inner');
    let arrayAttr = simillar.querySelectorAll('.shop_attributes');
    arrayAttr.forEach(element => {
        element.style.display = "none";
    });
    let arrayBtn = simillar.querySelectorAll('.swiper__slide__inner__addbasket');
    arrayBtn.forEach(element => {
        element.style.display = "none";
    });
    let arrTitle = simillar.querySelectorAll('.swiper__slide__inner__title');
    arrTitle.forEach(element => {
        element.style.paddingLeft = '0';
        element.style.textAlign = "center";
    });
    let arrPrice = simillar.querySelectorAll('.swiper__slide__inner__price');
    arrPrice.forEach(element => {
        element.style.paddingLeft = '0';
        element.style.textAlign = "center";
        element.style.paddingBottom = '2rem';
    });
}