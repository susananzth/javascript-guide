"use strict"

//********************************
//*** Iterando arreglos con for...in

var menus = ["Arroz con pato", "Pabellon", "Reina pepiada"];
/* Como el foreach de laravel
for ( let plato in menus) {
    console.log(menus[plato]);
} */
for ( let i in menus) {
    console.log(menus[i]);
}

//********************************
//*** Iterando arreglos con forEach
var carta = ["ceviche", "tacos", "pasta"];

// menus.forEach( plato => console.log(plato) );

menus.forEach( (plato, index) => console.log(index, plato) );

//********************************
//*** Buscando en un arreglo

var platos = ["ceviche", "tacos", "pasta"];
var pElegido = platos.find( plato => plato == "pasta");
console.log(pElegido)

var menu = [
	{nombre: 'Ceviche', precio: 20, pais: 'Perú'},
	{nombre: 'Tacos', precio: 10 , pais: 'México'},
	{nombre: 'Pasta', precio: 50, pais: 'Italia'}
];

var pElegido2 = menu.find( plato => plato.nombre == 'Tacos');
console.log(pElegido2);

//********************************
//*** Busqueda de índice de elementos
// Para arreglo simple
var numPlatillo = menus.findIndex( menus => menus == 'Reina pepiada' );
console.log("Platillo número 1: ", numPlatillo);

// Para arreglo multidimensional
var numPlatillo2 = menu.findIndex( menu => menu.nombre == 'Tacos' );
console.log("Platillo número 2: ", numPlatillo2);

//********************************
//*** Filtrar arreglos

var resultado850 = null;
var resultado950 = null;

resultado850 =  menu.find(platillo => platillo.pais == 'México');
console.log(resultado850);

resultado950 =  menu.filter(platillo => platillo.pais == 'Italia');
console.log(resultado950);

//********************************
//*** Validación de elementos de un arreglo

var resultado750 = null;
var resultado650 = null;
// some() devuelve true si alguno de los precios son menores que 10
resultado750 = menu.some( platillo => platillo.precio <= 10);
console.log('¿Hay platillos abajo de 20? ', resultado750);

// every() devuelve true si todos los precios son menor a 60
resultado650 = menu.every( platillo => platillo.precio <= 60);
console.log('¿Todos los platillos cuestan menos de 10? ', resultado650);