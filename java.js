

/*/let nombre = prompt ("pon tu nombre aqui");
alert ("hola " + nombre)/*/

let mesUno =parseFloat (prompt("igreso bruto del mes 1"))

let mesDos =parseFloat (prompt("igreso bruto del mes 2"))

let mesTres =parseFloat (prompt("igreso bruto del mes 3"))


function prestamo (){
    let resultadoTrimestral = (mesUno + mesDos + mesTres /3)

if (resultadoTrimestral  >= 2500 ){

    alert ("su ganancia bruta trimestral es $" + resultadoTrimestral + " usted puede sacar prestamos")
}

else{
    alert("su ganancia bruta trimestral es $" + resultadoTrimestral + " Usted no puede sacar prestamo")
}

}

prestamo ()










