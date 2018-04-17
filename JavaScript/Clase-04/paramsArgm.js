
//------------------PARAMETROS Y ARGUMENTOS

let sumar = (a, b) => a + b;
let miSuma = sumar(3, 9);
console.log(miSuma);

/* -arguments es un objeto que contiene todos los argumentos que pasamos a la funcion, si ocupamos hacer algo
con los parametros podemos usar arguments
-si hay mas parametros que argumentos, los argumentos faltantes son undefined
-si hay mas argumentos que parametros, nos devuelve error 
*/
function suma(a, b) {
     console.log([...arguments]);
}
suma(2, 3, 4, 5);

// esta funcion esta recibiendo n cantidad de argumentos sin importar cuantos sean 
function sumarTodos() {
    return [...arguments].reduce((a, b) => a + b);
    // spread operator son los tres puntitos lo que hace es expandir los datos que hay en un objeto 
    // console.log([...arguments]);
    /* let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
    */
}


console.log(sumarTodos(2, 3, 4, 5, 14, 2));
// console.log(sumarTodos('holi','como','andamos','raza','se va hacer','la carnita','asada'));



//--------------------PARAMETROS POR DEFECTO 
// con ES6 JS ya nos permite poner un parametro con un valor determinado en la firma de la funcion
function sumar2(a, b = 2) {
    return a + b;
}

console.log(`sumar normal: ${sumar(1, 2)}`);
console.log(`Parametro por defecto: ${sumar2(2)}`);

//--------------------PARAMETROS POR REST
/*
el elements se convierte en un array 
el elements esta a partir de la tercera posicion y por eso en el console log cuando le enviamos las letras 
no aparece nada en el return porque estamos aplicando el reduce desde elements que comienza en la tercera pos
*/
function sumarTodos2(m, n, ...elements) {
    return elements.reduce((a, b) => a + b);
}

console.log(`Parametros por rest: ${sumarTodos2('a', 'f', 20, 12)}`);


//-----------------SCOPE
// de funciones de menor prioridad pueden acceder a variables de niveles mayor a el gracias al scope que se automatizo con ES6
let hola = 10;
function holaMundo(a) {
    return function holi(b) {
        return a + b + hola;
    }

}
let res = holaMundo(4)(3);
console.log(res);


//-------------------CLOSURES---------------
/*
Un closure es la combinación de una función y el ámbito léxico en el que se declaro dicha función.
Es decir los closures son funciones que manejan variables independientes. En otras palabras, la función 
definida en el closure "recuerda" el ambito en el que se ha creado.
Un closure es un tipo especial de objeto que combina dos cosas: una función y el entorno en que se creó esa función.

desde afuera se puede referenciar a una funcion retornada dentro de una funcion y acceder a sus variables
la segunda funcion puede acceder a la clave de afuera gracias al scope y que cuando se 
llama la funcion saludar se puso doble parentesis para indicar que ejecute la segunda funcion
*/
function saludar() {
    let saludo = 'Holi';

    return function saludarInterno(amigo) {
        console.log(`${saludo} ${amigo}`);
    }
}

saludar()('Christopher');

let miSaludo = saludar();
miSaludo("Christo");
miSaludo("Luis");

function afuera() {
    let numero = 1;
    return function () {
        numero++;
        console.log(numero);
    }
}

afuera()();

// aumentar tiene toda la funcion de afuera
let aumentar = afuera();
aumentar();
aumentar();
aumentar();
aumentar();
aumentar();
aumentar();