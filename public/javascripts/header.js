const iconoMenu = document.querySelector('#icono-menu'),
    menu = document.querySelector('#menu')


iconoMenu.addEventListener('click', (e) => {
    menu.classList.toggle('active-hidden');
})

iconoMenu.addEventListener("click", () => {
    iconoMenu.classList.toggle("icon");

});

const iconoShop = document.querySelector('#icono-shop')
const shop = document.querySelector('#shop')
const ocultar = document.querySelector('#ocultar')


iconoShop.addEventListener('click', (e) => {
   shop.classList.remove('active-hidden-2');
   ocultar.classList.add('ocultar')
})

ocultar.addEventListener('click', (e) => {
    shop.classList.add('active-hidden-2');
    ocultar.classList.remove('ocultar') 
    iconoShop.classList.toggle("icon-2");
 } )

iconoShop.addEventListener("click", () => {
    iconoShop.classList.toggle("icon-2");
});