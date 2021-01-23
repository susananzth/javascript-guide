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

/* ==== Datos específicos ==== */

/* Número */
var edad = 28;
var cantidad = "100";

// Convertir de texto a número Number()
var converCantidad = Number(cantidad);
// Convertir de datos a entero: parseInt()
// Convertir de datos a decimal: parseFloat()

/* Cadenas de textos */
var bebida = "Milkshake";
var comida = 'Pasticho'; 
var instruccion = "El platillo de llama: Pasticho";

// Convertir texto a número String()
var monto = "8";
var montoNumber = String(monto);

/* Booleanos */
var activo = false;
var estado = Boolean(10 < 9);

/* Fechas */
var fecha = new Date();
// Algunos métodos

/* Métodos'set' para crear operaciones de fechas guardadas.

fecha.getDate();
fecha.getHours(); */

/* Metodo get para obtener una parte o todo o darle un formato en específico de una fecha precargada

fecha.setDate(5); */

/* Símbolos */
var simbolo1 = Symbol();

/* JSON */
var persona = {firstname: 'Susana', twitter: 'susananzth'};

var personas = [
    {firstname: 'Ana', twitter: 'anastasia'},
    {firstname: 'pedro', twitter: 'pedroso'},
    {firstname: 'Julia', twitter: 'DeJulia'},
    persona
];

// Para guardar esos datos y enviarlos a algun lugar...
// Se utiliza el objeto stringify() que combierte todo el contenido en una cadena de texto.
var personaJSON = JSON.stringify(persona);

// Recuperar esa info en algo convirtiendola de texto a JSON
var nuevaPersona = JSON.parse(personaJSON);