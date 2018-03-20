
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

//---------------------FUNCIONES AUTOINVOCADAS-------------------
//se puede omitir el nombre, se agregan parentesis al inicio y final de la funcion y despues se ponen los valores
// que queremos mandar como parametros a mi funcion
let miMultiplicacion = (function multiplica(a,b) {
    return a * b
})(5,8);

console.log(miMultiplicacion);


//---------------------FUNCION CONSTRUCTORA-------------------
// estas funciones son usadas para crear objetos a partir de estas funciones, la de abajo es una func constructora
let Pais = function(nombre,moneda) {
    this.nombre = nombre;
    this.moneda = moneda;
};

let mex = new Pais('México', 'Peso');

console.log(mex);


//------------------ EJECUTAR FUNCIONES CON APPLY Y CALL--------------------
// maneras de mandar a llamar una funcion indirectamente

function add(a,b,c) {
    return a + b + c
}

let numeros = [2,3,4];

// let myAdd = add(numeros);  con esto no se puede ya que mi array numeros lo toma como el primer parametro y da error

//los parametros de apply es un scope (undefined en este caso) y un array
let myAdd = add.apply(undefined,numeros);

// con call no admite un array sino que admite los parametros separados por coma
let myOtherAdd = add.call(undefined,2,3,5);

console.log(myAdd);
console.log(myOtherAdd);






