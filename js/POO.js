"use strict";

//********************************
//*** Trabajando con Clases


//********************************
//*** Herencia de  metódos y propiedades

//Clase padre.
class Producto {
    constructor(numSerie) {
        this.numSerie = numSerie;
        this.tiempoGarantia = 100;
    }
    // static hará que infoTienda() esté disponible aunque no se haga la instancia.
    static get infoTienda() {
        console.log(`Productos de la tienda Patito Inc`);
    }

    set garantia(value) {
        this.tiempoGarantia -= value;
    }

    get garantia() {
        return this.tiempoGarantia;
    }
}

// ANTES...
/* function Pantalla(marca, modelo, pulgadas) {
     this.marca = marca;
     this.modelo = modelo;
     this.pulgadas = pulgadas;
} */

// AHORA...
// Clase con la palabra reservada 'class'
// Com 'extends Producto' indico que esta es una clase hijo de 'Producto'
class Pantalla extends Producto {
    // Propiedades: describe el objeto. Tiene ojos, pies...
    // Métodos: describe las acciones. Puede correr, sentarse...

    // Toda clase necesita un contructor que da paso a que sinicialice las cosas.
    // El constructor define como llega al mundo
    constructor(numSerie, marca, modelo, pulgadas) {
        // Superconstructor para indicar complementar que la clase pantalla entiende de producto.
        super(numSerie)
        this.marca = marca;
        this.modelo = modelo;
        this.pulgadas = pulgadas;
    }

    // Declaro los métodos...
    // ANTES...
    /* Pantalla.prototype.encendido = function () {
        console.log(`La pantalla ${this.marca} se ha encendido`);
    };
    Pantalla.prototype.volumen = function () {
        console.log(`El volumen se ha modificado`);
    };
    Pantalla.prototype.info = function () {
        console.log(`La pantalla ${this.marca} de modelo ${this.modelo} es de ${this.pulgadas} pulgadas`);
    }  */
    // AHORA...
    encendido() {
        // Conjunto con la clase padre, estoy restando en 1 la garantía cada vez que se enciende el tv
        this.garantia = 1;
        console.log(`La pantalla ${this.marca} se ha encendido`);
    }

    volumen() {
        console.log(`El volumen se ha modificado`);
    }

    info() {
        console.log(`La pantalla ${this.marca} de modelo ${this.modelo} es de ${this.pulgadas} pulgadas`);
    }

    // Otra propiedades para ingresar datos y retornar
    set peso(value) {
        this.kgs = value.trim();
    }

    get peso() {
        return this.kgs;
    }
}

// Al utilizar 'new' de la clase 'Pantalla' estamos creando una instancia.
// Guardamos todos los métodos y propiedades de esa pantalla para crear una tv de la sala
// Se le envía por parámetros esos valores que lo definen.
const tvSala = new Pantalla('123456','Master', 'Oasis', 55);
// Creo la tv de la sala.
const tvHabitacion = new Pantalla('123457','Origin', 'Artemis', 80);