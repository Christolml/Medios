
/*-------------------------------TIPOS DE FUNCIONES------------
-POR DEFINICION
-POR EXPRESION, se guarda la funcion en una variabla y ya se manda a llamar la funcion por medio de la variable
-NOMBRADAS
-ANONIMAS

*/

//------------POR DEFINICION Y POR EXPRESION
function funcionPorDefinicion(){
    //cuerpo funcion por definicion
}

funcionPorDefinicion();

let funcionPorExpresion = function(){
    //cuerpo funcion por expresion
};

funcionPorExpresion();

//el de abajo es una funcion por expresion  y a c le estoy  guardando una funcion, le estoy dando como la receta
// de console.log y ya despues la puedo ejecutar esa funcion sin llamar a console.log
let c = console.log;
c('Holi mundo');

/*-------- NOMBRADAS Y ANONIMAS
CALLBACK: es una funcion que es ejecutada por otra luego de un proceso
*/
// funcion nombrada y puede ser invocada por el nombre y tambien de manera recursiva
function holi(){
    //algo
}
//al no tener nombre no es facil poderlas invocar a excepcion de asignarlas a una variable o en callback

// function () {

// }

// el es un elemento de nuestra pagina html, esta escuchando un evento en este caso es el click
// y cuando el usuario le da click se dispara la funcion y ese es un callback ya que se ejecuta ahi mismo 
// no se necesita poner nombre a la funcion
// el.addEventListener('click', function(){
//     //hacer algo este callback
// });



/*---------------------ARROW FUNCTIONS--------------------
funciones de flecha son del tipo anonima
sintaxis:
(parametro1,parametro2,etc) => valorDeRetorno

*/

let suma = (a,b) => a + b;
//es lo mismo el de arriba y el de abajo
let suma2 = function(a,b) {
    return a + b
}

let miSuma = suma(1,2);
c(miSuma);

// si se ocupa hacer mas cosas dentro de la funcion se ocupan las llaves
let cuadrado = (a) => {
    if(typeof a == 'number') {
        return a * a
    }
}

let miCuadrado = cuadrado(5);
c(miCuadrado);

// se ponen los parantesis para que sea una expresion (como en un if normal), si se escribe en un renglon no se ocupa el retorn
let cuadrado2 = a => (typeof a == 'number') ? a * a : undefined;
miCuadrado = cuadrado2(6);
c(miCuadrado);

// esta devolviendo un objeto y se necesita poner entre parentesis mi objeto que sera devuelto
let myObj = (a,b) => ({a,b});
let myCustomObj = myObj('hola','mundo');
c(myCustomObj);








