"use strict" 

/* === Funciones === */
/* Funcion saludo, las funciones son blques de código
que puedp reutilizar más adelante en este archivo o en otros archivos */

// Función simple
function saludar() {
    var saludo = "Hola Mundo"
    return saludo;
}
saludar();

// Función con parámetros
function datos(nombre, edad) {
    // Guardo el mensaje en la variable.
    var susDatos = "Hola "+nombre+", usted tiene "+edad+" años.";
    // Retorno el mensale para que pueda ser utilizado mas adelante
    return susDatos;
}
// Invoco el mensaje
console.log(datos("Susana", 28));

// Inicialización de parámetros
function contar(cantidad=0) {
    console.log("Total: ", cantidad);
    
}
contar(5);

// Parámetros REST
// Para enviar n cantidad de parámetros sin definirlos
function cocinar(...masIngredientes) {
    console.log("Más ingredientes:", masIngredientes);
}
cocinar("Pollo", "Arroz", "Ensalada");

// Parametros SPREAD
// Parámetros que se pueden esparcir, combinando con REST
function receta(ingrediente1, ingrediente2, ingrediente3, ...otros) {
    console.log("Ingrediente 1:", ingrediente1);
    console.log("Ingrediente 2:", ingrediente2);
    console.log("Ingrediente 3:", ingrediente3);
    console.log("Otros:", otros);
}
var ingredientes = ["Pescado", "Patacones"];
cocinar(...ingredientes, "Cremas", "Sal", "Pimienta");

// Funciones anónimas
// No colocarle nombre a la función para llamarla de manera aislada
(
    function () {
        var mensaje = "Hola función anónima";
        console.log(mensaje);
    }
)()
// Otro ejemplo más usado en JS
var saludito = function (nombre) {
    var mensajito = "Hola "+nombre+", este es otro saludito anónimo"
    return mensajito;
}

// CallBacks
function calcular(datoA, datoB, sumaCB, restaCB) {
    var suma = datoA + datoB;
    var restar = datoA - datoB;
    sumaCB(suma);
    restaCB(restar);
}
calcular(2, 3, function(resultado){
    console.log("Suma: ", resultado)
}, function(resultado){
    console.log("Resta: ", resultado)
});

// Funciones arrow | Lambda
var hi = nombre => "Hola " + nombre;
console.log(hi("Susana"));

// Otro ejemplo
var sumita = cant => cant+10;
console.log(sumita(20));

// Otro ejemplo
var calculando = (dato1, dato2) => dato1 + dato2;
console.log(calculando(20, 50));

// Otro ejemplo
var generar = (dato3, dato4) => {
    var dato5 = 5;
    return dato3 + dato4 + dato5;
}
console.log(generar(20, 50));

// Otro ejemplo sin parámetro
var validar = () => {
    return "dato3 + dato4 + dato5";
}
console.log(validar());
