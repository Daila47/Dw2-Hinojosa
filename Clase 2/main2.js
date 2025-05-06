
let prod= prompt("Ingrese el nombre del producto")
let precio=prompt("Ingrese el precio del producto")
let cant=prompt("Ingrese la cantidad del producto que va comprar")
let precioFinal= precio * cant
if (cant>=5){
    alert(`
        Se le aplica el descuento del 10% al producto: ${prod}
        Su precio original es de $ ${precioFinal}
        pero aplicado el descuento es de $ ${precioFinal - (precioFinal * 0.1)}
        `)
    precioFinal=precioFinal-(precioFinal*0.1)
}
alert(`el precio final es de $ ${precioFinal}`)