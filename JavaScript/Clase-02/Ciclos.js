
let saludo="Bienvenidos a esta página WEB";

let longitud=saludo.length;
console.log(longitud);
console.log(saludo);

//-------METODO TRIM---------, para quitar espacios en blanco en un string al inicio y al final
console.log(saludo.trim());

//-------------TOUPPERCASE-----------------, para convertirlo todo a mayusculas       
//-------------TOLOWERCASE-----------------,  para hacer miniscula la letra
console.log(saludo.toUpperCase().trim());
console.log(saludo.toLowerCase().trim());

let substring, substr, slice;
//un núm, la cantidad de caracteres a ignorar, dos numeros rango de donde se van
// a tomar la extración de texto de entre los números
substring=saludo.substring(4,7);
console.log(substring);
//el primer numero es el indice de donde se va a tomar los caracteres y el segundo num
// es la cantidad de letras que se requiere
// cuando el primero es un numero negativo se empieza a contar del final al comienzo
substr=saludo.substr(4,7);
substr=saludo.substr(-5,6);
console.log(substr);

//es igual qu substring solo que la diferencia viene cuando se usan numeros negativos en este nuevo
//el primero es el indice de donde se empieza a tomar las letras y el seg num con negativo es la 
// cantidad de letras que no se van a tomar del final
//el primero negativo indica que se va a empezar a contar del final al comienzo
slice=saludo.slice(4,7); //entre esos indices es un rango del cual se van a tomar las letras
slice=saludo.slice(4,-7);
     slice=saludo.slice(-4,-7); //esto genera un espacio en blanco
console.log(slice);


//------------CONDICIONALES-----------
/*
let edad = prompt("Dime tu edad prro lml ");
if(edad <= 12 && edad > 0) {
    console.log("Estas chavo chavo, gg no entras");
} else if(edad > 12 && edad < 18) {
    console.log("Eres adolescente, ya casi maduras man");
} else if(edad >= 18 && edad < 60) {
    console.log("Eres un adulto mis respetos");
} else {
    console.log("Eres anciano");
}  
*/

//------------TRUTHY AND FALSY VALUES----------- , son valores que no son boolean pero equivalen a tal
//Truthy: Strings no vacios, [], {}, numeros diferente de 0
//falsy: 0, string vacio, undefined, null, NaN
/*
if(edad) {
    console.log("Ingressaste un valor Truthy");
} else {
    console.log("Ingresaste un valor falsy");
}
*/

//-------------SWITCH CON PROMPT--------------
/*
let color = prompt(`Escribe el número de un color: 
1.Rojo
2.Azul
3.Verde`);

switch (color) {
    case '1':
    console.log("Escogiste el color rojo");
        break;
    case '2':
    console.log("Escogiste el color azul");
        break;
    case '3':
    console.log("Escogiste el color verde");
        break;
    default:
    console.log("Ingresa un valor valido pls");
        break;
}
*/


//--------OPERADOR TERNARIO----------------, manera abreviada de escribir un if
//  condicion ? valorTrue : valorFalse     , este ocupa llevar el valorFalse de afuerzas

//let nombre = prompt("Escribe tu nombre: ");
//nombre.length > 5 ? console.log("Tu nombre es largo") : console.log("Tu nombre es corto");
//forma simplificada del puro if
//if(nombre.length > 5) console.log("Tu nombre es largo")

//------------EJERCICIO PRACTICO DE DO WHILE-------------, me sigue apareciendo la ventana
//hasta que escriba bien la contrasena
/*
let password = 'ED';
let pass;

do {
    pass = prompt("Ingresa la contrasena");
} while(pass != password);
*/


//---------------FOR OF (ES6)------------
//funciona con cualquier objeto, recorre el objeto y devuelve el valor para cada una de las iteracciones
let amigos = ["Christopher", "Dana", "Luis", "Miguel", "Daniela"];
let nombre = "Christopher";
let numeros2 = new Set([1,1,2,2,3,3]);

for (let amigo of amigos) {
    console.log(amigo);
}

for (let value of nombre) {
    console.log(value);
}

for (let value of numeros2) {
    console.log(value);
}



