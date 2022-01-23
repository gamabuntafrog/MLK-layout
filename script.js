console.log('asf');
const burgerButton = document.querySelector('.burger');
const menu = document.querySelector('.nav');


    burgerButton.addEventListener('click', () => {
    if (menu.style.display == '') {
       return menu.style.display = 'block'
    } else if (menu.style.display == 'block') {
       return menu.style.display = 'none'
    } else if (menu.style.display == 'none') {
       return menu.style.display = 'block'
    }})




