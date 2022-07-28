const agregarCarrito = document.querySelectorAll(".boton")

agregarCarrito.forEach((agregar) => {
    agregar.addEventListener("click", agregarClick)
})

const carro = document.querySelector(".producto1")

function agregarClick(event){
    const boton=  event.target

    const producto = boton.closest(".orden")
    const productoTitulo = producto.querySelector(".alineado").textContent
    const productoImagen = producto.querySelector("img").src
    const productoPrecio = producto.querySelector(".p").textContent

agregarCarritoClick(productoTitulo, productoImagen, productoPrecio)
}

function agregarCarritoClick(productoTitulo, productoImagen, productoPrecio){

const tituloElemento = carro.getElementsByClassName("nombreProducto")
for(let i = 0; i < tituloElemento.length; i++)  {
    if (tituloElemento[i].innerText === productoTitulo){
        let elementoCantidad = tituloElemento[i].parentElement.parentElement.parentElement.querySelector(".cantidad1")
        elementoCantidad.value++
        precioTotal()
        return;
    }
}

const cartaProducto = document.createElement("div")
const agregarCarta = `  <div class= "producto">    
<div class="detalleProducto">
<img src=${productoImagen} class="productoImagen"  alt="">
</div>

<div class="nombre">
<h6 class="nombreProducto">${productoTitulo}</h6>
</div>
<div class="precioProducto">
<h6 class="precio">
${productoPrecio}
</h6>   
</div>
<div class="cantidad">
<input class="cantidad1" type="number" value="1">
<button class="boton1" type="button">ELIMINAR</button>
</div>
</div>
`
cartaProducto.innerHTML = agregarCarta
carro.append(cartaProducto)

cartaProducto.querySelector(".boton1").addEventListener("click", eliminarElementos) 
cartaProducto.querySelector(".cantidad1").addEventListener("change", cambioCantidad) 

precioTotal()
}

function precioTotal(){
    let total = 0
    const carritoTotal = document.querySelector(".precioTotal")
    const carritoProductos = document.querySelectorAll(".producto")
    
    carritoProductos.forEach((producto) => {
        const precioProductoTotal = producto.querySelector(".precio")
const precioNumero = Number(precioProductoTotal.textContent.replace("$", ""))

const carritoCantidad = producto.querySelector(".cantidad1")
const valorCantidad = Number(carritoCantidad.value)

total = total + precioNumero * valorCantidad

    })


    carritoTotal.innerHTML = `        <h3 class="total">PRECIO TOTAL</h3> 
    <p class="total">$${total.toFixed(3)}</p>
   <button class="boton2" type="button">COMPRAR</button>


   `
   const botonComprar = carritoTotal.querySelector(".boton2")
botonComprar.addEventListener("click", botonComprarClick)

}
    

function eliminarElementos(event){
    const botonBorrar = event.target
    botonBorrar.closest(".producto").remove()
    precioTotal()
}

function cambioCantidad(event){
    const cambio = event.target
    if (cambio.value <= 0){
        cambio.value = 1
    }
    precioTotal()
}


function botonComprarClick(){
    carro.innerHTML = ""
precioTotal()
swal("Muchas gracias por su compra", "Te esperamos pronto en Tienda de Ropa", "success");
}