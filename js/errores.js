"use strict";


//********************************
//*** Manejo de errores


try { // Dentro de try es todo lo que puedo probar
    var array = new Array(10000000000);
} catch (error) { // Si lo que probó fallo, como mostrar el error.
    console.log(error.message)
    console.log(error.name)
}
try { // Dentro de try es todo lo que puedo probar
    var x = y;
} catch (error) { // Si lo que probó fallo, como mostrar el error.
    console.log(error.message)
    console.log(error.name)
}
try { // Dentro de try es todo lo que puedo probar
    decodeURIComponent("http://%ominio.com");
} catch (error) { // Si lo que probó fallo, como mostrar el error.
    console.log(error.message)
    console.log(error.name)
}

//********************************
//*** Errores personalizados

var valor1 = 10;
var valor2 = 20;

try {
    if (valor1 > valor2) {
        console.log(`Mensaje de validación: ${valor1} si es mayor que ${valor2}`);
    } else {
        // 'throw' para detonar mensajes de error con 'Error'
        throw new Error(`${valor1} no es mayor que ${valor2} :(`)
    }

} catch (error) {
    console.log(error);
}

// Tambien puedo usar la palabra reservada debugger para pausar el proceso en el navegador.