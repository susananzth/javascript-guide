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