export function hideAttr(){
    let attributesCatalog = document.querySelectorAll('.woocommerce-product-attributes-item');
    attributesCatalog.forEach(element => {
        if( (element.classList.contains('woocommerce-product-attributes-item--attribute_pa_gost')) || (element.classList.contains('woocommerce-product-attributes-item--attribute_pa_aim')) || (element.classList.contains('woocommerce-product-attributes-item--attribute_pa_density')) && (element.classList.contains('woocommerce-product-attributes-item'))){         
        }
        else{
            element.style.display = "none";
        }
    });
}

export function hideAttrleft(){
    let parentcontainer = document.querySelector('.productinfo__inner__left');
    let attributesCatalog = parentcontainer.querySelectorAll('.woocommerce-product-attributes-item');
    attributesCatalog.forEach(element => {
        if((element.classList.contains('woocommerce-product-attributes-item--attribute_pa_first-left')) || (element.classList.contains('woocommerce-product-attributes-item--attribute_pa_fourth-left')) || (element.classList.contains('woocommerce-product-attributes-item--attribute_pa_second-left')) || (element.classList.contains('woocommerce-product-attributes-item--attribute_pa_third-left')) && (element.classList.contains('woocommerce-product-attributes-item'))){         
        }
        else{
            element.style.display = "none";
        }
    });
}

export function hideAttrright(){
    let parentcontainer = document.querySelector('.productinfo__inner__right');
    let attributesCatalog = parentcontainer.querySelectorAll('.woocommerce-product-attributes-item');
    attributesCatalog.forEach(element => {
        if((element.classList.contains('woocommerce-product-attributes-item--attribute_pa_eighth-right')) || (element.classList.contains('woocommerce-product-attributes-item--attribute_pa_fifth-right')) || (element.classList.contains('woocommerce-product-attributes-item--attribute_pa_first-right')) || (element.classList.contains('woocommerce-product-attributes-item--attribute_pa_fourth-right')) || (element.classList.contains('woocommerce-product-attributes-item--attribute_pa_ningth-right')) || (element.classList.contains('woocommerce-product-attributes-item--attribute_pa_second-right')) || (element.classList.contains('woocommerce-product-attributes-item--attribute_pa_seventh-right')) || (element.classList.contains('woocommerce-product-attributes-item--attribute_pa_sixth-right')) || (element.classList.contains('woocommerce-product-attributes-item--attribute_pa_third-right')) || (element.classList.contains('woocommerce-product-attributes-item--attribute_pa_tenth-right')) && (element.classList.contains('woocommerce-product-attributes-item'))){         
        }
        else{
            element.style.display = "none";
        }
    });
}