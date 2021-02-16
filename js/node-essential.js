// Funcion y variables con Node.
// Abrir la consola y ejecutar: node node-essential.js

function mostrarSaludo (){

    let valor1  ="Hola";
    let valor2 = " mundo";

    console.log( valor1 + valor2);
}

mostrarSaludo();

// -- Datos primitivos
var nombre = "Teodoro";
    nombre = true;
    console.log(nombre);

// Datos compuestos
let lista = [ "uno", "dos", "tres"];

let curso = {
    tema:"NodeJS",
    leccion:"datos compuestos"
};

console.log( curso.tema);

// Funciones y métodos
function saludo(){

    return "Hola";

 }

 let calculo = {

    duplicar: function(valor1){
        return valor1 * 2;
    }  ,
    dividir: function(valor1){
        return valor1 / 2;
    }
 }
 console.log( calculo.duplicar(10) , calculo.dividir(10)  ) ;

// Buffer y process
console.log( Buffer(10) );
// console.log( process );

process.env.colorFavorito = "rojo"
console.log( process.env.colorFavorito);

// Importar módulos

/*
 - Para importar un módulo desde un repositorio externo:
     * Se instala con npm NOMBRE_Depencdencia
     * Esta se guarda en la carpeta de node_modules y en el archivo de package.json
     * Lo importamos en el archivo como: var moment = require('moment');
     * Se llama: console.log(  moment('1999-12-31').format('DD/MM/YY').toString() );

 - Para importar un módulo o fragmento de código de un archivo dentro del mismo proyecto:
     * Lo importamos en el archivo como: var miModulo = require('./miModulo');
     Se llama: miModulo.multiplicar(10);

 - Para importar módulos predefinidos de node:
     * Lo importamos en el archivo como: var util = require('util');
     * Se llama: var prueba = "10"; console.log ( util.isString(prueba) );

*/


// Utilizar nodemon para desplegar los cambios cada vez que se guarde

/**
 * Instalarlo: npm install nodemon -g
 * Ejecutarlo: nodemon NOMBRE_ARCHIVO
 */

// Método HTTP
// Ya viene por defecto en node y lo llamamos con require. Este módulo se encarga de almacenar
// todos los métodos relacionados con la conexión de nuestra aplicación con Internet. 

var http = require('http');

// Creando el servidor

var servidor = http.createServer( function(peticion, respuesta){ 
    // Aquí está lo que se ejecutacuando se hace una petición

    // Se escribe un contenido tipo texto en la cabecera de la página cuando
    // es estado de la petición es exitoso (200)
    respuesta.writeHead( 200 , {'Content-type': 'text/html'});
    respuesta.write("Respuesta para la direccion: " + peticion.url );

    // Mensaje en la consola cuando se ejecuta la petición.
    console.log( "petición web");
});
// La petición 
servidor.listen(3000);
