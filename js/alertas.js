"use strict"

//********************************
//*** Ventana de alerta

const video1 = document.querySelector('.bostonVideo');

video1.addEventListener("ended", function () {
   alert("Alenta!! \n\n El vídeo se terminó");
});

//********************************
//*** Ventana de confirmación

video1.addEventListener("ended", function () {
    let resultado = confirm("¿Deseas ver el video nuevamente?");
    console.log(resultado);
    if (resultado) {
        video1.play();
    }else {
        window.location = "https://www.susananzth.com";
    }

});

//********************************
//*** Ventana para ingreso de datos
video1.addEventListener("ended", function () {
    let email = prompt("Escribe tu correo para ver mas vídeos",  "me@susananzth.com");
   
    if (email == null || email == "") {
         console.log("Sin datos");
     } else {
         console.log(email);
     }
 });