"use strict"

//********************************
//*** Creando tu primer arreglo
// Guardar varios elementos en una variable.
var platillos = [ "ceviche", "tacos", "pasta", "tostadas"];

var bebidas = new Array( "Jamaica", "Chicha Morada", "Pozol" );

console.log(platillos, bebidas);

// Validad si es un arreglo Array.isArray()
console.log(Array.isArray(platillos));

//********************************
//*** Medir y acceder a un arreglo

// Con .length
console.log("Hay "+ platillos.length + " platillos en el menú");

// Otra forma de usar .length para buscar uno de los elementos del arreglo.
var platillo = platillos[platillos.length -1];

console.log("El platillo seleccionado es: ", platillo);

//********************************
//*** Arreglos multidimensionales | Arreglo de arreglos

var menu = [ platillos, bebidas ];
console.log(menu);
console.log(menu[1][0]);

//********************************
//*** Operaciones básicas de un arreglo
console.log('Arreglo antes de ingresar:', platillos);

// Agregar nuevos elementos al arreglo con push()
platillos.push("Arepas");
platillos.push("Queso");
console.log('Después:', platillos);

// Saca el último el elemento. con pop()
platillos.pop();
platillos.pop();
console.log('Después de sacar dos elementos:', platillos);

// Con join() devuelve el arreglo pero como cadena de texto.
var mensaje800 = platillos.join();
console.log( mensaje800);

//********************************
//*** Generación de arreglos con split() from() y of()

//--- split() Con este transformo la cadena de texto en un arreglo, como parámetro 
// le indico como estan separadas los elementos del arreglo
var mensaje900 = "Pabellón, Caraotas, Tajada";
var platillosSplit = mensaje900.split(', ');
console.log(platillosSplit);

//--- Array.from(); Para traernos los elementos de una lista de HTML
var platillosHTML = Array.from(document.querySelectorAll('.platillos p'));
var arrPlatillos = platillosHTML.map( arrPlatillos => arrPlatillos.textContent );
console.log(arrPlatillos)

//--- Array.of(); todo lo que se le envíe lo convierte en arreglo
var platillosNew = Array.of("ceviche", "tacos", "pasta");
console.log(platillosNew);

//********************************
//*** Ordenando un arreglo
console.log('Antes de ordenar: ', platillos);

platillos.sort(); 
console.log('Después de ordenar: ', platillos);

platillos.reverse(); 
console.log('Ordenar en revarsa de como estaba en el comentario anterior: ', platillos);

platillos.reverse(); 
console.log('Reversa de nuevo: ', platillos);

//********************************
//*** Desestructuración de arreglos

// var platillo1 = platillos[0];
// var platillo2 = platillos[1];
// var platillo3 = platillos[2];

// var platillo1 = null;
// var platillo2 = null;
// var platillo3 = null;
// var platillo4 = null;

var [platillo1, platillo2, platillo3, platillo4] = platillos;
console.log(platillo1, platillo2, platillo3, platillo4)

/*  join  */
// para unificar elementos de un arreglo, Mucho más eficas
var animales = ["perro", "gato", "pez"];

var listaAnimales = animales.join(", ");
// Ver otro método
var nuevaLista = animales.concat(",");

console.log(listaAnimales);
console.log(typeof listaAnimales);

console.log(nuevaLista);
console.log(typeof nuevaLista);