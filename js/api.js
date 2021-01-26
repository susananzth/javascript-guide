"use strict";

//********************************
//*** Obteniendo datos con fetch

var posts = null;

// Obtengo los elementos del botón del api
var boton_api = document.getElementById('boton-api');
boton_api.addEventListener('click', function () {
    // Método fetch() recibe como parámetro la url del API
    fetch('http://jsonplaceholder.typicode.com/posts')
    .then(data => data.json())// preformatear la data en un data.json
    .then(data => { // Acceder a la información
        posts = data; // Guardo la data en posts
        mostrarDatos(posts);
    });

});

// La función mostrarDatos es la que crea los elementos con el título y los párrafos.
var contenedor = document.getElementById('contenedor');
function mostrarDatos(posts) {
    // Recorre todos los posts
    posts.map((post, i) => {
        // Agrega las etiquetas h1 y p
        let titulo = document.createElement('h1');
        let contenido = document.createElement('p');
        // Enumera los posts e ingresa el título del post en la etiqueta h1
        titulo.innerHTML = (i + 1) + " - " + post.title;
        // Ingresa el contenido del post en la etiqueta p
        contenido.innerHTML = post.body;

        contenedor.appendChild(titulo);
        contenedor.appendChild(contenido);
    })
}

//********************************
//*** Trabajando con promesas


var botonapi2 = document.getElementById('boton-api2');
var contenedor2 = document.getElementById('contenedor2');
var contBanderas = document.getElementById('banderas');

botonapi2.addEventListener('click', function () {
    // Me traigo todos los posts
    getPosts()
        .then(data => data.json())
        .then(posts => {
            // Primero mostrar los post
            mostrarDatos(posts);
            // Se invoca el getContries
            return getCountries();
        })
        .then(data => data.json())
        .then(countries => {
            // Se muestran los contries
            mostrarBanderas(countries);
        })
        .catch(error => {
            // Mostrar el mensaje con toggle()
            mensajes.classList.toggle('d-none');
            mensajes.innerHTML = error;
            // Ocurlo el mensaje despues de 6000 milisegundos
            setTimeout(() => mensajes.classList.toggle('d-none'), 6000);
       });

});

function getPosts() {
    // Encapsulando el contenido es esta función
    return fetch('http://jsonplaceholder.typicode.com/posts');
}

function getCountries() {
    // Encapsulando el contenido es esta función
    return fetch('https://restcountries.eu/rest/v2/all');
}

function mostrarBanderas(countries) {
    contBanderas.innerHTML = '';
    countries.map((country, i) => {
        let bandera = document.createElement('img');
        bandera.src = country.flag;
        bandera.width = '20';
        bandera.height = '20';
        contBanderas.appendChild(bandera);
    });
}

function mostrarDatos(posts) {
    contBanderas.innerHTML = '';
    posts.map((post, i) => {
        let titulo = document.createElement('h1');
        let contenido = document.createElement('p');

        titulo.innerHTML = (i + 1) + " - " + post.title;
        contenido.innerHTML = post.body;

        contenedor2.appendChild(titulo);
        contenedor2.appendChild(contenido);
    });
}