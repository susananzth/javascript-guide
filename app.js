// Para tener acceso a los archivos del sistema
var fs = require('fs');
 // Se indica donde está el archivo y el charset
 var contenido = fs.readFileSync('./archivos/texto.txt', 'utf8');

console.log(contenido);

// Este método asincrónico es para que no se detenga al leer el archivo
var contenido2 = fs.readFile('./archivos/texto.txt' , 'utf8' , function(error, datos){
    console.log(datos);
} );

// Lectura asincrona con detección de errores
fs.readFile('./archivos/texto.txt', 'utf8' , (error, datos)=>{

    if(error){
        // Detiene la lextura y muestra nuestro mensaje de error
        console.log("error de lectura");
        throw error; // muestra todo el error
    }else{
        console.log(datos)
    }
});

// Lectura de carpetas
// Con withFileTypes:true me indica que tipo de archivo es
fs.readdir('./img', { withFileTypes:true } , (error, items )=>{
    console.log( items)
} );

// Escribir datos de archivos externos en node con writeFile
fs.writeFile( './js/texto-nuevo.txt' , 'datos enviados desde node' , (error)=>{
    if(error){
        console.log(" error al escribir archivo");
    }else{
        console.log("archivo modificado exitosamente");
    }
});

// Para agregar texto a un archivo ya existente con appendFile
fs.appendFile( './js/texto-nuevo.txt' , '    NUEVOS DATOS' , (error)=>{
    if(error){
        console.log(" error al escribir archivo");
    }else{
        console.log("archivo modificado exitosamente");
    }
});

// Copiar un archivo existente con copyFile
fs.copyFile('./js/texto-nuevo.txt' ,  './img/archivo_nuevo.txt' , (error)=>{
    if(error){
        console.log("error al copiar");
        throw error;
    }else{
        console.log("copia OK");
    }
});

// Eliminar archivos en el sistema con unlink
fs.unlink( './js/texto-nuevo.txt' , (error)=>{

    if(error){
        console.log("error");
        throw error;
    }else{
        console.log("ok");
    }
    
});

// Proceso asincrono desencadenado
// Mover un archivo y luego eliminar 
 function copiarArchivo(rutaOriginal, nuevaRuta, archivoParaCopiar){

    fs.copyFile( rutaOriginal + '/' + archivoParaCopiar ,  nuevaRuta + '/' + archivoParaCopiar , (error)=>{
        if (error) {
            console.log("error");
            throw error;
        }else{
            eliminarArchivo( rutaOriginal,  archivoParaCopiar  )
        }
    });
 }

 function eliminarArchivo( rutaOriginal, archivoParaCopiar ){
    fs.unlink( rutaOriginal  + '/' + archivoParaCopiar , (error)=>{

        if (error) {
            console.log("error al eliminar ");
            throw error;
        } else {
            console.log("borrar ok");
        }
    });
 }

 copiarArchivo('./js' , './img', 'texto-nuevo.txt');


// Importar un JSON esto método no se trabaja para archivos externos
// var variable = require('URL');

// Leer un JSON
fs.readFile('.package.json' , (error, datos)=>{
    console.log( JSON.parse(datos).name);
});