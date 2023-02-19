//Calculadora de descuentos

/*
1)_Pedir el precio por prompt
2)_Pedir el porcentaje de descuento que se desea restar al precio
3)_Mostrar el precio final luego de restarle el descuento ingresado al precio.
*/

let precio = Number (prompt("Bienvenido(a), \n\n Ingrese el precio del producto:"));
let descuento = Number (prompt("Ingrese el porcentaje de descuento que quiere calcular:"));

let descuentoFinal = descuento / 100;

let resultado = precio - (precio * descuentoFinal);
resultado = resultado.toFixed(2);

alert("El precio de $" + precio +", con el descuento del " + descuento + "%, queda con un precio final de: $" + resultado + ".")
