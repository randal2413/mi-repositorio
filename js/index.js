class Producto {
    constructor(nombre, precio){
        this.nombre = nombre
        this.precio = precio
    }
    mostrarProducto(){
        return this.nombre
    }
}

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

console.log(pedido1.mostrarPedido())
