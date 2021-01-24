"use strict"

//********************************
//*** Eventos del mouse
const botonClic = document.querySelector('.boton-clic');

botonClic.addEventListener('click', function () {
    console.log("El boton se ha pulsado");
})

const botonOver = document.querySelector('.boton-over');
botonOver.addEventListener('mouseover', function () {
    console.log("El mouse esta sobre el botón");
})

const botonOut = document.querySelector('.boton-out');
botonOut.addEventListener('mouseout', function () {
    console.log("El mouse esta fuera del botón");
})

//********************************
//*** Eventos del teclado


// keydown
// keypress
// keyup

window.addEventListener("keydown", function (event) {
	console.log('Pulsando tecla');
	console.log(String.fromCharCode(event.keyCode))
})


window.addEventListener("keypress", function (event) {
	console.log('Tecla pulsada')
})


window.addEventListener("keyup", function (event) {
	console.log('Tecla liberada')
})

//*** Carga de la página

window.addEventListener('load', function() {
    console.log('El contenido de la ventana se ha cargado');
  
    
  });

  //********************************
//*** Eventos multimedia

const video = document.querySelector('.bostonVideo');

video.addEventListener("play", function () {
    console.log('El video ha iniciado');
});

video.addEventListener("seeking", function () {
    console.log('Se esta buscando en el video', this.currentTime);
});

video.addEventListener("ended", function () {
    console.log('El video ha terminado');
});
//*** Temporizadores o timers
//********************************

// setInterval
// setTimeout

var temporizador = setInterval(function () {
    setColor();
}, 2000);


// setTimeout(function () {
//     setColor();
// }, 3000);

function setColor() {
  var pagina = document.body;
  pagina.style.backgroundColor = pagina.style.backgroundColor == "blue" ? "green" : "blue";
}

function stopChangeColor() {
  clearInterval(temporizador)
}