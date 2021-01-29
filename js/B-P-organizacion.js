/*
Generales
- Separar los archivos en carpetas segun su tipo para evitar el desorden de los archivos.
- 

*/


// El window.onload no será necesario si el llamado del archivo JS se hace al final del body.
//window.onload = function() {
    /*var btnSaludar = document.getElementById("btnSaludar");

    btnSaludar.addEventListener('click', function() {
        console.log("¡Hola Mundo!");
    });*/
//}

// Evitar duplicidad

//ANTES...
var cuenta = 2 + 3;
var cuentaNueva = 20 + 45;
var totalFinal = cuenta + cuentaNueva;
console.log(totalFinal);

// DESPUES ...
function suma(datoA, datoB){
	var resultado = datoA + datoB;
	return resultado;
}
suma(2,3);
var cuentaFinal = suma(suma(2, 3), suma(20, 45));
//suma(5, 65)
console.log(cuentaFinal)

// Buenas practicas de JSON
// getJSAON actua y guarda todos los datos en la variable
//$.getJSON("productos.json", function(productos){
    var url = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22Santo%20Domingo%2C%20DO%22)&format=json&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=";
    $.getJSON(url, function(productos){
        console.log(productos);
    /*
        var totalProductos = productos.length;
    
        for (var i = 0; i < totalProductos; i++) {
            console.log(productos[i].nombre);
        };*/
    });

// Revisión de rendimiento en duración del código
console.time('revisión')

var animales = ["perro", "gato", "pez"];
var l = animales.length;

for (var i = 0; i < 10000; i++) {
    animales[i] = i;
}

console.timeEnd('revisión')

// para minificar el código, usar: https://jscompress.com/

// Para revisar el código por si tiene errores, https://jshint.com/