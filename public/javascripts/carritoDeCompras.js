const Clickbutton = document.querySelectorAll('.button')
const carritoMainContainer = document.querySelector('.listaCarrito')
let carritoMain = []

Clickbutton.forEach(botonParaAñadirAlCarrito => {
  botonParaAñadirAlCarrito.addEventListener('click', clickAñadirAlCarrito)
})

const vaciarBtn = document.querySelector('.vaciarBtn').addEventListener('click', vaciarCarrito)


function clickAñadirAlCarrito(e) {
  const btn = e.target
  const planta = btn.closest('.Orquidea')
  const plantaNombre = planta.querySelector('.h3-product').textContent.trim()
  const plantaPrecio = planta.querySelector('.precio-p').textContent.trim()
  const plantaImagen = planta.querySelector('.img-orquidea').src
  const nuevaPlantaEnCarrito = {
    nombre: plantaNombre,
    precio: plantaPrecio,
    img: plantaImagen,
    cantidad: 1
  }

  añadirAlCarritoDeCompras(nuevaPlantaEnCarrito)
}

function añadirAlCarritoDeCompras(nuevaPlantaEnCarrito) {

  const InputElemnto = carritoMainContainer.getElementsByClassName('cantidadInput')
  for (let i = 0; i < carritoMain.length; i++) {
    if (carritoMain[i].nombre === nuevaPlantaEnCarrito.nombre) {
      carritoMain[i].cantidad++;
      const inputValue = InputElemnto[i]
      inputValue.value++;
      actualizarPrecioDeCompraTotal()
      return null;
    }
  }

  carritoMain.push(nuevaPlantaEnCarrito)

  mostrarCarrito()
}

function mostrarCarrito() {
  carritoMainContainer.innerHTML = `
  
  <div class="nav2-link icono-shop">
    <i class="fas fa-shopping-cart " id="icono-shop"></i>
</div>

<div class="cont-shop active-hidden-2" id="shop">
    <div class="carritoMain">
        <h3 class="h3-carrito">Carrito de compras</h3>
        <h3>Total:</h3>
        <p class="totalDeCompra">$0</p>
        <div class="btns-carrito"> <button class="totalDeCompraBtn">Comprar</button>
            <button class="vaciarBtn">Vaciar carrito de compras</button>
        </div>
    </div>
</div>
  
  `
  carritoMain.map(item => {
    const elementoDivEnCarrito = document.createElement('section')
    elementoDivEnCarrito.classList.add('Orquidea-carrito')
    const elementoEnCarrito = `
  
    <div class="card-img">
        <a href="#">
            <img c lass="img-orquidea" src=${item.img} alt="">
        </a>
    </div>
    <article class="card-article">

        <h3 class="h3-product">
            ${item.nombre}
        </h3>

        <p class="precio-p"><span>
               ${item.precio}
            </span></p>
            <div class="cantidadContainer">
            <p class="p-cantidad">Cantidad:</p>
            <input class="cantidadInput" type="number" name="number" id="" value="${item.cantidad}">
        </div>
        <button class="btnParaEliminar">X</button>
    </article>
`

    elementoDivEnCarrito.innerHTML = elementoEnCarrito
    carritoMainContainer.append(elementoDivEnCarrito)

    elementoDivEnCarrito.querySelector('.cantidadInput').addEventListener('change', cambioDeCantidad)

    elementoDivEnCarrito.querySelector('.btnParaEliminar').addEventListener('click', eliminarDelCarrito)
  })
  actualizarPrecioDeCompraTotal()
}

function actualizarPrecioDeCompraTotal() {
  let total = 0;
  const totalDeCompra = document.querySelector('.totalDeCompra')
  carritoMain.forEach((item) => {
    const precio = Number(item.precio.replace("$", ''))
    total = total + precio * item.cantidad
  })

  totalDeCompra.innerHTML = `$${Intl.NumberFormat('es-CO').format(total)}.000`
  addLocalStorage()
}

function eliminarDelCarrito(e) {
  const btnClicked = e.target
  const elementoCercano = btnClicked.closest('.Orquidea-carrito')
  const nombre = elementoCercano.querySelector('.h3-product').textContent;
  for (let i = 0; i < carritoMain.length; i++) {
    console.log(carritoMain[i]);
    if (carritoMain[i].nombre.trim() === nombre.trim()) {
      carritoMain.splice(i, 1)
    }
  }
  elementoCercano.remove()
  actualizarPrecioDeCompraTotal()
}

function cambioDeCantidad(e) {
  const input = e.target
  if (input.value <= 0) {
    input.value = 1
  }
  actualizarPrecioDeCompraTotal()
}

function vaciarCarrito() {
  carritoMain.innerHTML = `
  
  <h3 class="h3-carrito">Carrito de compras</h3>
  <h3>Total:</h3>
  <p class="totalDeCompra">$${total}</p>
  <p class="alert">No vas a poder vaciar de nuevo el carrito, para hacerlo recarga la pagina</p>
  <div class="btns-carrito"> <button class="totalDeCompraBtn">Comprar</button>
  <button class="vaciarBtn">Vaciar carrito de compras</button></div>
  `
  actualizarPrecioDeCompraTotal()
}

function addLocalStorage() {
  localStorage.setItem('carrito', JSON.stringify(carritoMain))
}

window.onload = function () {
  const storage = JSON.parse(localStorage.getItem('carrito'));
  console.log(storage);
  if (storage) {
    carritoMain = storage;
    mostrarCarrito()
  }
}