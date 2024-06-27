/*eslint-disable*/
/*Sumar todos los números de una lista*/

let numeros = [10,10,10,10]
let suma = 0;


function Sumar() {
    for ( i = 0; i < numeros.length; i++) {
        suma = suma + numeros[i];
    }
    console.log(suma);
}
Sumar();