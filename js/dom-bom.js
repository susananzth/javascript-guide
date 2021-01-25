//********************************
//*** Propiedades y métodos del DOM

// Al precionar el botón, mostrará en la consola todas las plases de las etiquetas p que encuentre en el documento
var boton = document.getElementById("boton");
var todosLosParrafos = document.getElementsByTagName('p');
boton.addEventListener('click', function(){
    console.log(todosLosParrafos);
});

// Al dar clic en el botón, obtendrá el texto del contenedor con clase principal.
var boton2 = document.getElementById("boton2");
var parrafoPorClase = document.getElementsByClassName('principal')[0].textContent;
boton2.addEventListener('click', function(){
    console.log(parrafoPorClase);
});

// El botón cambia de diseño.
var boton3 = document.getElementById("boton3");
boton3.addEventListener('click', function () {
    boton3.style.backgroundColor = "pink";
});

// Creo el elemento foto y le asigno propiedades y lo muestro en el documento.
var foto = document.createElement('img');
foto.src = "img/foto1.jpg";
foto.name = "foto1";
foto.width = 400;
document.body.appendChild(foto);
// Al hacer clic en la foto, esta cambia de imagen.
foto.addEventListener('click', function () {

    if (this.name === 'foto1') {
        this.src = 'img/foto2.jpg';
        this.name = 'foto2';
    } else {
        this.src = 'img/foto1.jpg';
        this.name = 'foto1';
    }

});

//********************************
//*** Propiedades y métodos del BOM

// Indica el alto y ancho de la pantalla.
console.log('innerHeight: ', window.innerHeight);
console.log('innerWidth: ', window.innerWidth);

// Almacenar datos directamente en el navegador.
// setItem() para guardar el contenido en la variable 'contenido'.
localStorage.setItem('contenido', 'Código y café es una gran combinación');
// getItem() para obtener esa información de la variable 'contenido'
var contenido = localStorage.getItem('contenido');

// Se obtienen los elementos del botón.
var boton4 = document.getElementById('boton4');
// Se obtiene el html del elemento con clase 'principal'
var principal = document.getElementsByClassName('principal')[0];
// Al dar clic envío el contenido de 'contenido' al parrafo con clase 'principal'
boton4.addEventListener('click', function () {
    var contenido = localStorage.getItem('contenido');
    principal.innerHTML = contenido;

    // Navegaciones
    window.history.forward();
        window.history.back();
    window.history.go(3);
});