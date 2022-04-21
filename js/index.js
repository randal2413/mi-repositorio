   
   class Prenda {
       constructor(id, prenda, categoria, stock, precio, talle) {
           this.id = id;
           this.prenda = prenda;
           this.categoria = categoria;
           this.stock = stock;
           this.precio = precio;
           this.talle = talle;
       }
   }
   const productos = [
    { id: 1, prenda: "buzo", categoria: "camperas", stock: 300, precio: 4600, talle: "s, m, l"},
    { id: 2, prenda: "jean", categoria: "pantalones", stock: 250, precio: 5500, talle: "38, 40, 42"},
   
   ]
   
for (const prenda of productos) {
console.log("PRENDAS")
console.log(prenda.id[1]);
console.log(prenda.prenda);
console.log(prenda.categoria);
console.log(prenda.stock);
console.log(prenda.precio);
console.log(prenda.talle);

}


function compras(){
    let prenda = prompt("Ingrese la prenda que desea comprar").toLowerCase()
     if(prenda == "buzo"){
      
        let talle = parseInt (prompt("ingrese el talle"));  //no lo toma, no se porque..//
    
        let talles =  prompt("ingrese el talle");
        let unidad = parseInt (prompt("Ingrese las unidades"));
        let precioBuzo = 4600
    
        const suma = (a,b) => { return a + b }
        const resta = (a,b) => { return a - b}
        const multiplicacion = (a,b) => a*b 
         
        let subTotal = multiplicacion(precioBuzo, unidad)
        const iva = subTotal*0.21
        const descuento = subTotal*0.35
        
       let precioFinal = resta(suma(subTotal, iva), descuento)
    
    
       
       
        let compraFinal = alert(`Tu prenda es ${prenda} con la cantidad de ${unidad} unidades y talle ${talles} con un precio final de ${precioFinal} `)
    
        if(precioFinal > 18000){
            alert("ENVIO GRATIS")
        }else{
            alert("ENVIO $500")
        }
        
    
     } else if (prenda == "jean") {
        let talle = parseInt (prompt("ingrese el talle"));  //no lo toma, no se porque..//
    
        let talles =  prompt("ingrese el talle");
        let unidad = parseInt (prompt("Ingrese las unidades"));
        let precioJean = 5500
    
        const suma = (a,b) => { return a + b }
        const resta = (a,b) => { return a - b}
        const multiplicacion = (a,b) => a*b 
         
        let subTotal = multiplicacion(precioJean, unidad)
        const iva = subTotal*0.21
        const descuento = subTotal*0.35
        
       let precioFinal = resta(suma(subTotal, iva), descuento)
       
       
        let compraFinal = alert(`Tu prenda es ${prenda} con la cantidad de ${unidad} unidades y talle ${talles} con un precio final de ${precioFinal} `)
    
        if(precioFinal > 20000){
            alert("ENVIO GRATIS")
        }else{
            alert("ENVIO $500")
        }
    
    
     }
    
    }
    compras()