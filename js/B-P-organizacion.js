/*
Generales
- Separar los archivos en carpetas segun su tipo para evitar el desorden de los archivos.
- 

*/


// El window.onload no será necesario si el llamado del archivo JS se hace al final del body.
//window.onload = function() {
    var btnSaludar = document.getElementById("btnSaludar");

    btnSaludar.addEventListener('click', function() {
        console.log("¡Hola Mundo!");
    });
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