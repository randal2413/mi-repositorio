function compras(){
    let prenda = prompt("Ingrese la prenda que desea comprar(BUZO O JEAN)").toLowerCase()
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
