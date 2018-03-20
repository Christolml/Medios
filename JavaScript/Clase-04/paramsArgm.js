
//------------------PARAMETROS Y ARGUMENTOS

let sumar = (a,b) => a + b;
let miSuma = sumar(3,9);
console.log(miSuma);

/* el objetos arguments es un objeto que contiene todos los argumentos que pasamos
si hay mas parametros que argumentos, los argumentos faltantes son undefined
si hay mas argumentos que parametros, no devuelve error 
*/
function suma(a,b) {
    console.log(arguments);
}
suma(2,3,4,5);


function sumarTodos() {
    console.log(arguments);
}

console.log(sumarTodos(2,3,4,5));









