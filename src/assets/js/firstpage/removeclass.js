export function removeClass(item, itemdel) {
    const attrValue = document.querySelectorAll(item);
    attrValue.forEach(element => {
      element.classList.remove(itemdel);
    });
  }