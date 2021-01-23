// Esto es un comentario de una línea

/* Esto es 
un comentario 
de multiples líneas o bloque */

/* Mensaje simple del navegador */
alert("Holis!");

/* Mensaje a la consola del navegador */
console.log("Hola consola");

/* strict Mode para asegurar
las buenas practicas a la hora de escribir código.*/
"use strict" 
/* Con esta línea de comando al príncipio del archivo JS, 
se asegura el strict Mode del código */


/* ==== Variables ==== */

// Variables Globales, estan declaradas fueda de las funciones
var nombre = "Susana";
// Imprimo el contenido de la variable en la consola
console.log(nombre);

/* Funcion saludo, las funciones son blques de código
que puedp reutilizar más adelante en este archivo o en otros archivos */
function saludo(){
    // Variable local
    let edad = 28;
    
    // Imprimo el contenido de la variable en la consola
    console.log(edad);
}
// Llamo la función
saludo();

/* ==== Constantes ==== */

const pi = 3.1416;
