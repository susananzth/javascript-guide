// Sintaxis de espresión regular, con el objeto RegExp()
var expresion1 = new RegExp('abc');
// Otra sintaxis para trabajar con expresiones cortas.
var expresion2 = /Hola Mundo/;
// Para incluir salto de líneas \/n. para trabajar con expresiones cortas.
var parrafo = /text1 \/n texto2 /;

// Se invoca al método para probarlas. test() Case sensitive
// Pruebo si en el contenido del test se encuentra mi expresión.
console.log(expresion1.test('abcdef'));
console.log(expresion2.test('El primer programa es Hola Mundo'));

// Para evaluar almenos uno de ellos
var expresion3 = /[0123456789]/;
console.log(expresion3.test('Sucedió en 1996'));
//Otra forma de hacerlo, con rangos.
var expresion4 = /[0-9a-zA-Z]/;
console.log(expresion4.test('Sucedió en 1996'));

// Negación con ^ en este ejemplo, cuando la expresión no es binaria.
var expresion5 = /[^01]/;
console.log(expresion5.test('10101002100110001'));

// + para un patron que se repita una o mas veces
var expresion6 = /\d+/;
console.log(expresion6.test('1997'));

// * para que un patron se repita muchas veces o no aparezca
var expresion7 = /\d*/;
console.log(expresion7.test('2008'));

// Si un patron aparece o no en este caso es la N = n?
var expresion8 = /Hola mun?do/;
console.log(expresion8.test('Hola mudo'));

// para defininir que el dia, mes, hora y minutos tiene 1 ó 2 caracteres, el año 4 caracteres
// tambien incluye los espacios entre la fecha y la hora.
var expresion9 = /\d{1,2}-\d{1,2}-\d{4} \d{1,2}:\d{2,}/;
console.log(expresion9.test('27-06-2007 11:45'));

// Agrupación de patrones. Con la i deja de ser case sensitive.
var expresion10 = /Hola Mundo/i;
console.log(expresion10.test('Hola mundo'));

// patrones que se repiten mucho y se anidan a una expresión
// subexpresiones o agrupado
var expresion11 = /Woo+(hoo+)+/i;
//Woohooooooo!
console.log(expresion11.test('Wooohooohooohooohoooooooohooohooohooohooohooo'));

// Evaluaciones mas complejas, que indique el indice donde lo evaluó
// con exec() en vez de test()
var expresion12 = /\d+/.exec('Del año 1984')
console.log(expresion12);
console.log("Hasta 1994".match(/\d+/))

// Limitar patrones para que este se cumpla
var expresion13 = /\bcat\b/;
console.log(expresion13.test("cat"));

// Patrones que pueden elegirse, que esten ahí disponibles para su uso
var expresion14 = /pollo|res|pescado/;
console.log(expresion14);
console.log(expresion14.test('El cliente pidió tacos'));
console.log(expresion14.test('El cliente pidió pollo'));

// Patron para definir el inicio de la cadena de texto
var expresionInicio = /^Any/;
// Para definir el final
var expresionFin = /JavaScript$/
// Combinados
var expIniciFin = /^Any|JavaScript$/
console.log(expIniciFin.test('Any app that can be imagined can be made in JavaScript'));

// Reemplazar palabras o letras en el texto
var mensaje = 'El cliente pidió sushi y comió su sushi, sushi, sushi, sushi';
// La g es para que haga la búsqueda global
console.log(mensaje.replace(/i/g, 'o'));

// Método search() para buscar un patron
var mensaje2 = 'Estahistoriacontinuara';
//  \W  Cualquier carácter que no sea alfanumérico
//  \S Cualquier carácter que no sea un espacio en blanco
console.log(mensaje2.search(/\W/));

// exec() para buscar mas datos en relacion con la búsqueda
// Buscando de manera global (g) la letra 'y'
var expresion15 = /y/g;
var coincidencia = expresion15.exec('sibr yfx sibr yfx');
console.log(coincidencia);
// Con lastIndex nos indicará la ultima coincidencia, debe ir antes de definir la cadena de texto.
var coincidencia = expresion15.exec('sibr yfx sibr yfx');
console.log(expresion15.lastIndex);
// Forzar el lastindex
expresion15.lastIndex = 6;
console.log(expresion15.lastIndex);

// Buscar números '\d' de forma global(g)
var expresion16 = /\d/g;
// Lo buscamos la primera vez e indica que está en el índice 5
console.log(expresion16.exec('Pedí 4 tacos y 1 agua'));
// Lo buscamos la segunda vez e indica que está en el índice 15
console.log(expresion16.exec('Pedí 4 tacos y 1 agua'));
expresion16.lastIndex = 0; // Reestablezco el contador para hacer una última búsqueda.
console.log(expresion16.exec('Pedí 4 tacos y 1 agua'));

// Looping para que el patron sea buscado en toda la cadena
var mensaje3 = "Llegaban por montones, primero 10, después 20, después 35 y se duplicaban hasta llegar a 1000";
// Para que encuentre el patron '\d+' lo agrupamos con '()' y '\b' de forma global 'g'
var patron = /\b(\d+)\b/g;
// variable para guardar la evaluación.
var match;
// mientras que en macth siempre exista algo, se ejecuta el ciclo
while (match = patron.exec(mensaje3)) {
    console.log(match)
    console.log("Se encontró ", match[1], " en la posición: ", match.index);
}

//Casos comunes de validacion con expresiones regulares
// Validando un correo electrónico
$(function () {
    var contactForm = document.getElementById('emailForm');
    contactForm.onsubmit = function (e) {
        e.preventDefault();

        console.log('¿El correo es válido?', isValidEmail());
    }
    // Definir el patron de un email para validarlo
    var isValidEmail = function () {
        var email = document.getElementById('email');
        return /^\w+([\.\+\-]?\w+)*@([\.-]?\w+)*(\.\w{2,4})+$/.test(email.value)
    }

});

// Validando una cuenta de twitter
$(function () {
    var contactForm = document.getElementById('twitterForm');
    contactForm.onsubmit = function (e) {
        e.preventDefault();

        console.log('¿El Twitter es válido?', isValidTwitter());
    }
    // Definir el patron de un usuario de twitter para validarlo
    var isValidTwitter = function () {
        var twitter = document.getElementById('twitter');
        return /^@(\w+)$/.test(twitter.value)
    }

});

// Otras expresiones regulares de uso habitual
$(function () {
    var contactForm = document.getElementById('contactForm');

    contactForm.onsubmit = function (e) {
        e.preventDefault();

        console.log('¿La URL es válida?', isValidUrl());
    }

    /**
     * URL/Dirección web válida
     */
    var isValidUrl = function () {
        var url = document.getElementById('url');
        return /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \?=.-]*)*\/?$/.test(url.value)
    }

    /**
     * Contraseña segura
     * Contraseñas con al menos una letra mayúscula.
     * Contraseñas con al menos una letra minúscula.
     * Contraseñas con al menos un número o caracter especial.
     * Contraseñas con mínimo 8 caracteres.
     **/
    var isValidPass = function () {
        var pass = document.getElementById('pass');
        return /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/.test(pass.value)
    }

    /**
     * Teléfonos en el mundo
     * https://en.wikipedia.org/wiki/List_of_country_calling_codes
     */
    var isValidPhone = function () {
        var phone = document.getElementById('phone');
        return /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/.test(phone.value)
    }

    /**
     * Tarjetas de credito
     */
    var isValidCreditCard = function () {
        var phone = document.getElementById('phone');
        return /^((67\d{2})|(4\d{3})|(5[1-5]\d{2})|(6011))(-?\s?\d{4}){3}|(3[4,7])\ d{2}-?\s?\d{6}-?\s?\d{5}$/.test(phone.value)
    }

    /**
     * Código postal
     */
    var isValidPostalCode = function () {
        var phone = document.getElementById('phone');
        return /^([1-9]{2}|[0-9][1-9]|[1-9][0-9])[0-9]{3}$/.test(phone.value)
    }

    /**
     * Nombres de usuario
     * Mínimo 6 caracteres
     * Máximo 30 caracteres
     */
    var isValidUserName = function () {
        var phone = document.getElementById('phone');
        return /^[a-z\d_]{6,30}$/i.test(phone.value)
    }

});