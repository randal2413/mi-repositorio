/*class Producto {
    constructor(nombre, precio){
        this.nombre = nombre
        this.precio = precio
    }
    mostrarProducto(){
        this.nombre = prompt("Bienvenido a Tienda de Ropa, escoja una opcion: 1.Buzo  2. Jean")
        this.precio = prompt("Ingrese el modelo:  Modelo A.  Modelo B.")
        if (this.precio == "Modelo A") {
           alert("su prenda es" + this.nombre + "su precio es 4600") 
        }else{
            alert("su prenda es" + this.nombre + "su precio es 5500") 
        }

    }

    }

//const valorDelPrompt1 = prompt("Bienvenido a Tienda de Ropa, escoja una opcion: 1.Buzo  2. Jean")
//et valorDelPrompt2 = prompt("Ingrese el modelo:  Modelo A.  Modelo B.  Modelo C.")
//if (valorDelPrompt2 == "Modelo A") {
  //  this.precio = 5500    
//}else{
    //this.precio = 5890
//}

const producto1 = new Producto("Buzo", 4600)
const producto2 = new Producto("Jean", 5500)

class DetallePedido{
    constructor(producto, cantidad){
        this.producto = producto
        this.cantidad = cantidad
    }
    calcularSubTotal(){
    let subTotal = this.producto.precio * this.cantidad
    return subTotal
    }
    mostrarDetalle(){
      return this.cantidad + "x" + this.producto.mostrarProducto() 
    }
}

const detalle1 = new DetallePedido(producto1, 6)
const detalle2 = new DetallePedido(producto2, 3)

class Pedido{
    constructor(detalles){
        this.detalles = detalles
    }
    calcularTotal(){
        let total = 0
        for (const d of this.detalles) {
            total += d.calcularSubTotal() 
        }
        return total
    }
    mostrarPedido(){
        let texto = "Su pedido es" + '\n';
        for (const d of this.detalles) {
            texto += d.mostrarDetalle() + "= $" + d.calcularSubTotal() + '\n'
        }
        texto += 'TOTAL: $' + this.calcularTotal()
        return texto;
    }
    }
    
const carrito = []

carrito.push(detalle1)
carrito.push(detalle2)

const pedido1 = new Pedido(carrito)

console.log(pedido1.mostrarPedido())*/


//PRIMERA ENTREGA FINAL

//const carrito = []

class Producto{
    constructor(nombre, talle, stock, precio){
        this.nombre = nombre
        this.talle = talle
        this.stock = stock
        this.precio = precio
}
}

let numerador = 0
let listadoProductos = "Nuestros Productos son: "
const producto1 = new Producto("Buzo", "S, M, L", 15, 4600)
const producto2 = new Producto("Jean", "40, 42, 44", 30, 5500)

const productos = [producto1, producto2]
for (const p of productos) {
    numerador++
    listadoProductos += "\n" + numerador + "- " + p.nombre
}
let numeradorCompras = 0 
let compras = "Escoja el producto que desee:"
for (const p of productos) {
    numeradorCompras++
    compras += "\n" + numeradorCompras + "- " + p.nombre + " $" + p.precio
}



alert(saludar())    

function menu(){
    
    let menu = prompt("Menú: \n1 - Ver productos \n2 - ESC - Salir")
        switch(menu){
            case "1": 
            listarProductos()
            comprarProducto()
            break
            case "2":
            alert("Muchas gracias por visitarnos") 
            break
            default:
            alert("Opcion incorrecta")
            menu()
            break
            
            
    }}

function saludar(){
    alert("Bienvenidos a Tienda de Ropa")
}

function listarProductos(){
    alert(listadoProductos)
}

function comprarProducto(){
     let compra = prompt(compras)        
     let talle = prompt("Ingrese el talle").toUpperCase() 
     let cantidad = parseInt(prompt("Ingrese la cantidad que desea"))
     
     alert("Su prenda es " + compra + " de talle " + talle + " y agregamos al carrito " + cantidad + " unidades")
     
     
     let agregarCarrito = prompt("¿Desea continuar agregando productos o avanzamos al pago? \n1 - Continuar agregando \n2 - Avanzar al pago")
     switch(agregarCarrito){
         case "1": 
         listarProductos()
         comprarProducto()
         break
         case "2":
         alert("Muchas gracias por elegirnos") 
         break
         default:
         alert("Opcion incorrecta")
         listadoProductos()
         comprarProducto()
         break}



     }
     menu()
    
/*function total(){
    const suma = (a,b) => { return a + b }
        const resta = (a,b) => { return a - b}
        const multiplicacion = (a,b) => a*b 

        let subTotal = multiplicacion(p.precio, cantidad)
        const iva = subTotal*0.21
        const descuento = multiplicacion()
}*/

 