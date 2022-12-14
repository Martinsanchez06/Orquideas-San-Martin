const imgs = document.querySelectorAll(".imagenes-buttom a");
const imgBtns = [ ...imgs ];
let imgId = 1;


imgBtns.forEach((imgItem) => {
    imgItem.addEventListener("click", (event) => {
        event.preventDefault();
        imgId = imgItem.dataset.id;
        slideImge();
    });
});

function slideImge() {
    const displayWidth = document.querySelector(".img-showcase img:first-child").clientWidth;

    document.querySelector(".img-showcase").style.transform = `translateX(${- (imgId - 1) * displayWidth}px)`;

}

window.addEventListener("resize", slideImge);
