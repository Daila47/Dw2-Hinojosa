/*
//___________DESAFIO 3___________
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

//___________DESAFIO 4___________
const sumarProd=(precioUn, cantDes)=> precioUn*cantDes
let canti=prompt("Ingrese precio unitario")
let precioUnitario=prompt("Ingrese la cant deseada")
console.log(`El total es de: ${sumarProd(precioUnitario,canti)}`)
*/
//__________________DESAFIO 5____________________________
let produc=["Heladera", "Lavarropas", "Laptop"]
console.log(produc)
for(let pro of produc){
    console.log(produc[pro])
}
produc.push("Pava electrica")
console.log(produc)
produc.pop()
console.log(produc)

