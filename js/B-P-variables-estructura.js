// Siempre declarar las variables al comienzo del código.
// Siempre iniciarlizar las variables.
var mensaje = "¡Hola Mundo!", 
    estado = "activo",
    resultado = 45;

// Variables globales
var datos={};
datos.mensaje = "mensaje local del objeto";
datos.resultado = 120;

function saludar(){
	console.log(mensaje);
	console.log(resultado);
	
	console.log(datos.mensaje );
    console.log(datos.resultado);
}

saludar()

// Palabras reservadas
// Cambiar los nombres para evitar errores.
function myCatch(ball){
	console.log(ball)
}
myCatch("beisball");

// Evitar el uso de recalcular
var animales = ["perro", "gato", "pez"];
// Guardo el calculo de contar los caracteres dentro de una variable
var totalAnimales = animales.length;
// Así evito que la calcule n veces en el cuclo for
for (var i = 0; i < totalAnimales; i++) {
	console.log(animales[i]);
};

// Funciones anónimas, no realizar tantas, cambiar por objetos.

// Optimización de for
var persona = {
	nombre: "Sergio",
	email: "sergiobritor@gmail.com",
	twitter: "yacafx",
	saludar: function(){
		return "Hola mundo"
	}
}

var dato = "";
// Recorrer cada registro
for (dato in persona){
	console.log(dato, persona[dato]);
}

// Validar 
var persona = {};

console.log(persona);

if(persona){
	console.log("La persona existe");
} else {
	console.log("La persona NO existe");
}

// Expresiones booleanas
var estado = true,
	resultado = ""; // Falso

if(estado){
	console.log("continuar")
} else {
	console.log("detenerse");
}

// Operador ternario

var estado = true;

//Antes...
// if(estado){
//  console.log("continuar")
// } else {
//  console.log("detenerse");
// }

// Ahora...
var accion = estado ? 'continuar' : 'detenerse';

console.log(accion);

// Igualdad
console.log(1 === '1'); // Validación de tipo de dato y el valor <- Siempre usar este al comparar.
console.log(1 == '1'); // Validación solo del valor.

// Constructores
function Persona(nombre, apellidos){
	this.nombre = nombre;
    this.apellidos = apellidos;
    // Siempre inicializar.
}

var persona = new Persona("Sergio", "Brito");

console.log(persona);
console.log(persona.nombre);
console.log(persona.apellidos);

// Try and catch
// Manejarlos fuera del for. Para evitar hacer instancias dentro de cada for.
var animales = ["perro", "gato", "pez"];

var totalAnimales = animales.length;

try {
     //Acciones a realizar por la excepción
    for (var i = 0; i < totalAnimales; i++) {

    }
} catch (e) {
    //Manejo de errores 
}

// Literales
var persona = {}; //  Crear el objeto sin new. User este cuando el objeto no tenga tantas propiedades
persona.nombre = "Sergio";

var otraPersona = new Object(); // Creando objeto con new.


var lista = new Array(); // Arreglo con new. 
lista[0] = "manzana";
lista[1] = "pera";

var listaNueva = ["manzana", "pera"]; // Arreglo sin new. Usar cuando el array no tenga tantos datos.