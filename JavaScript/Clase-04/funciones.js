
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

// cuando una funcion esta dentro de un objeto ya no se llama funcion si no que ahora es un metodo
// sumar es un metodo del objeto 
let obj = {
    nombre: 'objeto',
    sumar(a,b) {
        return a + b;
    }
};

let miOtraSuma = obj.sumar(7,8);
console.log(`El resultado es: ${miOtraSuma}`);

//-----------------FUNCIONES DENTRO DE OTRAS FUNCIONES-----------

function restar(a){
    return function(b){
        return a - b
    }
}
//con el segundo parentesis ando indicando que también voy a ejecutar la segunda función ya que en la primera
// cuando encuentra el return hasta ahí se acaba junto con el primer parantesis 
let miResta = restar(10)(3);
console.log(miResta);












