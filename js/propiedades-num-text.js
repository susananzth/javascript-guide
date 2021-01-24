"use strict"

//********************************
//*** Propiedades númericas
console.log("MAX_VALUE: ", Number.MAX_VALUE);
console.log("MIN_VALUE: ", Number.MIN_VALUE);
console.log("NEGATIVE_INFINITY: ", Number.NEGATIVE_INFINITY);
console.log("NEGATIVE_INFINITY: ", Number.POSITIVE_INFINITY);
console.log("NaN: ", Number.NaN);

//********************************
//*** Métodos númericos
var numero5 = "10";

console.log('Number: ', typeof numero5, typeof Number(numero5));
console.log('parseInt: ',  parseInt(numero5));
console.log('parseFloat: ', Number.parseFloat(numero5));
console.log('isNaN Es número?: ', isNaN(numero5));
console.log('isInteger. Es entero?: ', Number.isInteger(numero5));

//********************************
//*** Propiedades númericas de instancias
var numero6 = 2.5;

console.log("toExponential: ", numero6.toExponential(4));
console.log("toFixed: ", numero6.toFixed(2));
console.log("toPrecision: ", numero6.toPrecision(6));
console.log("toString. De número a texto: ", typeof numero6.toString());

//********************************
//*** Creando cadena de texto
var pais = 'México';
var comida = new String("Ceviche");

//********************************
//*** Medir una cadena de texto
var mensaje = "Estoy aprendiendo JavaScript";
console.log("La cadena de texto tiene: " + mensaje.length + " letras");


//********************************
//*** Métodos búsqueda | Parte 1
var mensaje = "Estoy aprendiendo JavaScript y estoy aprendiendo mucho";
var resultado;

// indexOf, busca la primera incidencia y devuelve la posición del caracter
// resultado = mensaje.indexOf("aprendiendo");

// lastIndexOf, busca la ultima aparición de la palabra y devuelve la posición de esta
//resultado = mensaje.lastIndexOf("aprendiendo");

// search: regresa la posicion del texto de la variable, similar a indexOf
//resultado = mensaje.search("aprendiendo");

// search | Expresión regular. Busca un fragmento del texto y devuelve la posición.
resultado = mensaje.search(/ja/i);

console.log(resultado);

//********************************
//*** Métodos búsqueda | Parte 2

// match: Busca todas las coincidencias.
// resultado = mensaje.match(/aprendiendo/gi);

// substr: Devuelve la cadena encontrada entre las posiciones enviadas por parámetro.
// resultado = mensaje.substr(6,11);

// substring: Similar que substr,pero ambos parámetros comienzan desde cero.
//resultado = mensaje.substring(6,17);


// charAt: Devuelve la letra que consiga en la posición enviada por parámetro.
 resultado = mensaje.charAt(0);

console.log(resultado);

//********************************
//*** Métodos búsqueda | Parte 3

// startsWith, Devuelve booleano si comienza con esa cadena de texto. Casesensitive
// resultado = mensaje.startsWith("Es");

// var textoEn =  mensaje.indexOf("JavaScript")
// resultado = mensaje.startsWith("Ja", textoEn);

// endsWith, Si termina con ese texto
// resultado = mensaje.endsWith("JavaScript");

// includes
resultado = mensaje.includes("Estoy", 6);

console.log(resultado);