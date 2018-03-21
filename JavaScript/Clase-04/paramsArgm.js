
//------------------PARAMETROS Y ARGUMENTOS

let sumar = (a,b) => a + b;
let miSuma = sumar(3,9);
console.log(miSuma);

/* el objetos arguments es un objeto que contiene todos los argumentos que pasamos
si hay mas parametros que argumentos, los argumentos faltantes son undefined
si hay mas argumentos que parametros, no devuelve error 
*/
function suma(a,b) {
    // console.log(arguments);
}
suma(2,3,4,5);


function sumarTodos() {
    return [...arguments].reduce((a,b) => a + b);
    // spread operator son los tres puntitos lo que hace es expandir los datos que hay en un objeto 
    // console.log([...arguments]);
    /* let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
    */
}


console.log(sumarTodos(2,3,4,5,14,2));


//--------------------PARAMETROS POR DEFECTO 
// con ES6 JS ya nos permite poner un parametro con un valor determinado si es que ese parametro no es enviado
function sumar2(a, b = 2) {
    return a + b;
}

console.log(sumar(1,2));
console.log(sumar2(2));

//--------------------PARAMETROS POR REST
/*
el elements se convierte en un array 
el elements esta a partir de la tercera posicion y por eso en el console log cuando le enviamos las letras 
no aparece nada en el return porque estamos aplicando el reduce desde elements que comienza en la tercera pos
*/
function sumarTodos2(m,n,...elements) {
    return elements.reduce((a,b) => a + b);
}

console.log(sumarTodos2('a', 'f', 20,12));


//-----------------SCOPE
// de funciones de menor prioridad pueden acceder a variables de niveles mayor a el gracias al scope que se automatizo con ES6
let hola =10;
function holaMundo(a) {
    return function holi(b) {
        return a + b + hola;
    }

}
let res = holaMundo(4)(3);
console.log(res);


//-------------------CLOSURES---------------

function saludar() {
    let saludo = 'Holi';
}




