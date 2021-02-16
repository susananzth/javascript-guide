var fs = require('fs');
 // Se indica donde está el archivo y el charset
 var contenido = fs.readFileSync('./archivos/texto.txt', 'utf8');

console.log(contenido);
