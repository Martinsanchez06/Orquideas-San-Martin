const Clickbutton = document.querySelectorAll('.button')
Clickbutton.forEach(botonParaAñadirAlCarrito => {
  botonParaAñadirAlCarrito.addEventListener('click', clickAñadirAlCarrito)
})

const vaciarBtn = document.querySelector('.vaciarBtn').addEventListener('click', vaciarCarrito)

const carritoMain = document.querySelector('.carritoMain')

function clickAñadirAlCarrito(e) {
  const btn = e.target
  const planta = btn.closest('.Orquidea')
  const plantaNombre = planta.querySelector('.h3-product').textContent.trim()
  const plantaPrecio = planta.querySelector('.precio-p').textContent.trim()
  const plantaImagen = planta.querySelector('.img-orquidea').src


  añadirAlCarritoDeCompras(plantaNombre, plantaPrecio, plantaImagen)
}

function añadirAlCarritoDeCompras(plantaNombre, plantaPrecio, plantaImagen) {

  const titulosGenerales = carritoMain.getElementsByClassName('h3-product')

  for(let i = 0; i < titulosGenerales.length ; i++ ){
     if(titulosGenerales[i].innerText === plantaNombre){
      const cantidadDeElemento = titulosGenerales[i].parentElement.parentElement.querySelector('.cantidadInput')
      cantidadDeElemento.value++
      actualizarPrecioDeCompraTotal()
      return;
    }
     
  }

  const elementoDivEnCarrito = document.createElement('div')
  elementoDivEnCarrito.classList.add('listaCarrito')
  const elementoEnCarrito = `
  
  <section class="Orquidea-carrito">

    <div class="card-img">
        <a href="#">
            <img c lass="img-orquidea" src=${plantaImagen} alt="">
        </a>
    </div>
    <article class="card-article">

        <h3 class="h3-product">
            ${plantaNombre}
        </h3>

        <p class="precio-p"><span>
               ${plantaPrecio}
            </span></p>
            <div class="cantidadContainer">
            <p class="p-cantidad">Cantidad:</p>
            <input class="cantidadInput" type="number" name="number" id="" value="1">
        </div>
        <button class="btnParaEliminar">X</button>
    </article>

</section>`

  elementoDivEnCarrito.innerHTML = elementoEnCarrito
  carritoMain.append(elementoDivEnCarrito)

  elementoDivEnCarrito.querySelector('.cantidadInput').addEventListener('change', cambioDeCantidad)

  elementoDivEnCarrito.querySelector('.btnParaEliminar').addEventListener('click', eliminarDelCarrito) 

  actualizarPrecioDeCompraTotal()
}

function actualizarPrecioDeCompraTotal() {
  total = 0;
  const totalDeCompra = document.querySelector('.totalDeCompra')
  const elementosTotalDeCompra = document.querySelectorAll('.Orquidea-carrito')
  elementosTotalDeCompra.forEach(elementoTotalDeCompra => {
    const precioDeElemento = elementoTotalDeCompra.querySelector('.precio-p')
    console.log(precioDeElemento);
    const precioDeElementoNumero = Number(precioDeElemento.textContent.replace('$', '')).toFixed(3)
    console.log(precioDeElementoNumero);
    const cantidadDeElemento = elementoTotalDeCompra.querySelector('.cantidadInput')
    const cantidadDeElementoNumero = Number(cantidadDeElemento.value)
    total = total + precioDeElementoNumero  * cantidadDeElementoNumero
    const p = Intl.NumberFormat('es-CO').format(total);

  })

  totalDeCompra.innerHTML = `$${Intl.NumberFormat('es-CO').format(total)}.000`

}

function eliminarDelCarrito(e) {
  const btnClicked = e.target
  btnClicked.closest('.Orquidea-carrito').remove()
  actualizarPrecioDeCompraTotal()
}

function cambioDeCantidad(e) {
  const input = e.target
  if(input.value <= 0){
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