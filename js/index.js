let precioBuzo = 4600

const suma = (a,b) => { return a + b }
const resta = (a,b) => a - b

const iva = precioBuzo*0.21
const descuento = precioBuzo*0.35

let precioFinale = resta(suma(precioBuzo, iva), descuento)
    
console.log(precioFinale)


if(precioFinale > 3500){
    console.log("ENVIO GRATIS")
}else{
    console.log("ENVIO $500")
}
