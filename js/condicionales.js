"use strict" 

var dato1 = 10;
var dato2 = 20;
var resultado = "Sin datos";
var resultado1 = "Sin datos";
var resultado2 = "Sin datos";
var resultado3 = "Sin datos";

// Condición simple
if(dato1 > dato2){
    resultado = "La condición de cumplió";
} else{
    resultado = "La condición no se cumplió";
}
console.log(resultado);

// Condición if else if
if(dato1 > dato2){
    resultado1 = "La condición de cumplió";
} else if(dato1 == dato2){
    resultado1 = "Se cumplió el igual igual";
}
else{
    resultado1 = "La condición no se cumplió";
}
console.log(resultado1);

// Condiciones anidadas
if(dato1 > dato2){
    if(dato1 == dato2){
        resultado2 = "La condición se cumplió la evaluación anidada";
    } else{
        resultado2 = "La condición NO cumplió la evaluación anidada";
    }
} else{
    resultado2 = "La condición no se cumplió";
}
console.log(resultado2);

// Estructura SWITCH
switch (dato1) {
    case 5:
        resultado3 = "Se cumple el switch del caso 1";
        break;
    case 10:
        resultado3 = "Se cumple el switch del caso 2";
        break;
    case 15:
        resultado3 = "Se cumple el switch del caso 3";
        break;

    default:
        resultado3 = "No se cumple nada";
        break;
}
console.log(resultado3);