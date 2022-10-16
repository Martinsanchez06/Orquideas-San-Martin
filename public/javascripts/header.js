const iconoMenu = document.querySelector('#icono-menu'),
    menu = document.querySelector('#menu')


iconoMenu.addEventListener('click', (e) => {
    menu.classList.toggle('active-hidden');
})

iconoMenu.addEventListener("click" , () => {
    iconoMenu.classList.toggle("icon");

});