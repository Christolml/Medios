
/*-----------FUNCIONES-----------
Las funciones son bloques de codigo reutilizables, ocupan ser llamadas para ejecutarse, cuando la 
funcion se encuentra con un return (sin importar donde este) hasta ahi se ejecuta nuestra funcion
tambien se puede devolver un objeto con las funciones

sintaxis
function nombreFuncion(parametro1,parametro2,parametro3) {
    codigo
}
*/

function sumar(a,b){
    return {
        a: a + 1,
        b: b + 1
    }
    return a + b;
}
let resultado = sumar(6,5);
console.log(resultado);

// cuando una funcion esta den
let obj = {
    nombre: 'objeto',
    sumar(a,b) {
        return a + b;
    }
};













