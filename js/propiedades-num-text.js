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