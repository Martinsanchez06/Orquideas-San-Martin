const iconoMenu = document.querySelector('#icono-menu'),
    menu = document.querySelector('#menu')


iconoMenu.addEventListener('click', (e) => {
    menu.classList.toggle('active-hidden');
})

iconoMenu.addEventListener("click" , () => {
    iconoMenu.classList.toggle("icon");

});

const iconoShop = document.querySelector('#icono-shop'),
    shop = document.querySelector('#shop')


iconoShop.addEventListener('click', (e) => {
    shop.classList.toggle('active-hidden-2');
})

iconoShop.addEventListener("click" , () => {
    iconoShop.classList.toggle("icon-2");

});