

//------------ARRAYS-----------------
// en un array puedo poner true y false, con true hay que recordar que toma valor de 1 y con false de 0
// cuando le metes un string al array te lo concatena con lo dema, eso en el ejemplo de la suma

let arr = [1,2,3,false,'Christopher',true,'Trosca',4,5];
let arr2 = [1,2,3,'Holi',4];


console.log(arr);
console.log("--------------------------------Imprime el array arr")
console.log(arr.length);
console.log("--------------------------------Tamaño de arr");
console.log(arr[2]);
console.log("--------------------------------Imprime indice 2");

let sum=0, sum2=0;
//  array 1
for (let index = 0; index < arr.length; index++) { 
    const element = arr[index];
    /* este lo que hace es que si no es igual el tipo de mi variable elemento con continue indico
    que se salte la iteracion (que continue)
    if (typeof element != 'number') continue;
    sum += element;
    */
    if (typeof element == 'number') {
        sum += element;
    }
    console.log(element);
}
// array 2
for (let index = 0; index < arr2.length; index++) {
    sum2 += arr2[index];
}

console.log("--------------Imprime uno por uno los elementos del array");
console.log(`La suma es del array es: ${sum}`);
console.log("--------------------------------");
console.log(`La suma del segundo array es: ${sum2}`);
console.log("--------------------------------");

// cuando a un tipo de dato se comienza con mayuscula, estoy haciendo referencia como a donde nace 
// todo lo relacionado a ese tipo de dato y con prototype son como las propiedades que tiene 
// y le estoy asignando otra nueva propiedad de saludo
Array.prototype.saludo = 'Holi';
console.log(arr.saludo);
console.log("---------Imprime el metodo saludo metido al prototype");

//-------------------INDEX OF-------------
console.log(arr.indexOf(8)); //este no existe y me regresa un numero negativo
console.log("------------indexOf(8) de arr");
console.log(arr.indexOf(4));  //me regresa en que posicion esta el 4
console.log("------------indexOf(4) de arr");
console.log(arr.indexOf('Trosca'));

//-----------AGREGAR ELEMENTOS A MI ARRAY------------
//  .push(el1,el2,el3)   Añade al final 
//  .unshift(el1,el2,el3)   Añade al inicio

arr.push('JavaScript','Desde','Cero');
arr.unshift('Tengo',10,'Años');
console.log(arr);
console.log("-------push y unshift agrega elementos");

//--------------ELIMINAR UN SOLO ELEMENTO (SIN PARAMETROS)--------------
//estos metodos devuelven el elemento eliminado
//  .pop()  al final
//  .shift()   al inicio
// `Bienvenido, ${amigo} ${numero*3} veces`;
let eliminado = arr.pop(), eliminado2 = arr.shift();
console.log(`Array con ya eliminados ${arr}`);
console.log("--------------------------------");
console.log("Elementos eliminados: \n", eliminado,'\n',eliminado2);
console.log("--------------------------------");

//---------------JOIN (NOS DEVUELVE NUESTRO ARRAY EN STRING)---------
//los elementos de nuestro nuevo string estan separados por una coma por defecto, pero se puede modificar
console.log(arr.join(' '));
console.log("-------join devuelve el array en string");

//-----------------SPLICE(AÑADE O QUITA ELEMENTOS)------------------
// quita y añade elementos
// modifica el string original
// el primer parametro es a apartir de donde se va a iniciar a insertar los nuevos 
// items, el segundo parametro es la cantidad de lo que se va a eliminar a partir 
// del inicio, del tercer a adelante son los elementos que se van a insertar en el 
// array original
arr.splice(3,2,'nuevo','en esta','cadena');
console.log(arr);
console.log("---------Splice quita y añade elementos ");
// 10 Años 1 2 3 false Christopher true Trosca 4 5 JavaScript Desde

//--------------SLICE ---------------
//se crea un nuevo array a partir de un array, toma los elementos y ya es un nuevo array
// el primer parametro es donde inicia a tomar los valores y el segundo parametro
// es hasta donde los va a tomar este segundo parametro no lo toma si no hasta uno antes
let arr3 = arr.slice(3,7);
console.log(arr3);
console.log("---slice se crea un nuevo array a partir de otro y desde un rango");


//--------------ES6-------------
//con find, nos devuelve el primer elemento que coincida con la condicion
//con findIndex, devuelve el indice del elemento 
let arr4 = [1,2,3,4,5];
let num = arr4.find( elemento => elemento > 3);
let numIndex = arr4.findIndex( elemento => elemento > 3);
console.log(num);
console.log("-----find(devuelve el primer elemento coincida con la condicion)");
console.log(numIndex);
console.log("---findIndex(devuelve el primer indice que cumpla con la condicion");

// array-fuction    que es
//con parentesis si recibe mas de un parametro y separados por coma
//(parametro1,parametro2) => //valor retornado
//si no recibe parametros es de la forma de abajo
//() => //valor retornado


//------------------ITERADORES----------------
//Objeto que contienen un metodo next(), devuelve un objeto con dos propiedades, recuerda su posicion anterior
//value, done
// tres metodos que nos permite recuperar un iterador
// .keys() devuelve indice  .values()   .entries()    estos devuelven un iterador

let iterador = arr4.keys();
console.log(iterador.next());
console.log('Esto lo esta interrumpiendo mi iterador, pero el sigue recordando en que numero va');
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());   

console.log("-------Iteradores");


//--------------------OBJETOS-----------------------
// lado izq propiedades, lado der valores
let chris = {
    nombre: 'Christopher',
    edad: 21,
    pais: 'Mexico',
    esPadre: false,
    hijos: ['Trosca','Luna','Rocky']
}
//a mi objeto se le puede seguir agregando propiedades
chris.ciudad = 'Colima';

console.log(chris);
console.log("-----------------Objetos");

//--------------------OPERADORES DELETE, IN Y HASOWNPROPERTY------------------
// delete => elimina una propiedad
// in     => devuelve true si existe la propiedad en el objeto
//

const juego = {
    nombre: 'Fallout',
    sedes: ['Mexico','USA','Alaska'],
    creador: 'Christopher',
    fundacion: 2007,
    multiplataforma: true,
    eslogan: 'Nunca ganaras',
    // el de abajo es un metodo que nomas le pertenece a este objeto
    saludar() {
        return 'Bienvenidos al jueguito chipocludo del mundo mundial';
    }
};

// delete juego.eslogan;
//para poder usar in, ocupo poner la propiedad como string

Object.prototype.numeroMagico = 27;
// console.log('numeroMagico' in juego);
//la propiedad de abajo viene del prototype, no existe en el objeto juego
// console.log(juego.numeroMagico);

// permite saber si una propiedad existe en el objeto
console.log(juego.hasOwnProperty('numeroMagico'));


//---------------------COPIAR OBJETO-------------
//ES6   lo de abajo permite copiar un objeto, en assign se especifica que es un 
// objeto con {} y despues el objeto a copiar
let juego2 = Object.assign({}, juego);
console.log(juego2);
console.log("--------------Copiando un objeto");

// ASIGNAR VARIABLES EXISTENTES A PROPIEDADS
// si el nombre de la propiedad es igual al de la variable que esta afuera se pone como el comentado
let a = 'hola', b = 'mundo';
let myObj = {
    // a,
    // b
    a: a,
    b: b
}

console.log(myObj);
console.log("-----------asignar variables existentes a propiedades");

//-----------------EXPRESIONES EN PROPIEDADES
//ando juntando mis dos variables a y b que estan arriba declaradas y en este las uno para crear una
// propiedad y asignarles un valor
let myObj2 = {
    [a + b]: 'Hola mundo'
}

console.log(myObj2);
console.log("---------Expresiones en propiedades");



let estudiantes = [
    {
        nombre: 'Chris',
        calificacion: 20
    },
    {
        nombre: 'Fajis',
        calificacion: 10
    },
    {
        nombre: 'Towi',
        calificacion: 31
    },
    {
        nombre: 'Maria',
        calificacion: 9
    },
];


// console.log(estudiantes[1]);
//----------------MAP------------
// Map transforma cada elemento del array segun el callback
// y devuelve un array
// el callback es una funcion

                                    // PARAMETRO => VALOR DE RETORNO
// con map lo que hace es aplicar la funcion a cada uno de lo elementos del array
let estudiantsNombres = estudiantes.map( estudiante => estudiante.nombre);

console.log(estudiantsNombres);
console.log("--------aplicando map");

//------------------FILTER-------------
// filtra elementos y los devuelve en un array
//nos saca los elementos que de calificacion tengan mayor a 10
let estudiantesAprobados = estudiantes.filter(estudiante => estudiante.calificacion > 10);
console.log(estudiantesAprobados);
console.log("---------filter, estudiantes con cal > 10 ");
//nos saca el nombre de los elementos que tuvieron calificacion mayor a 10
let estudiantesAprobadosNombres = estudiantesAprobados.map(estudiante => estudiante.nombre);
console.log(estudiantesAprobadosNombres);
console.log("---------usando el resultado anterior y usando map para que muestre los nombres solos");

//-----------------------------REDUCE--------------------------
// devuelve un solo valor por medio de iteraciones, ejecuta una funcion una vez por cada elemento
// presente en el array 
// los parametros que recibe son el valor anterior, el valor actual, el indice actual 
// y el array
//    sintaxis:    reduce(cb(prev,current[,i,arr]) [, initial])   []son opcionales

let numeros = [2,4,6,8,10];
let suma = numeros.reduce( (a,b) => a + b);
// nos devuelve la suma de nuestro array gracias a reduce y sus iteraciones
console.log(suma);
console.log("------suma de un array de numeros con reduce");

// obtener el valor mas alto del array por medio de un ternario
let max = numeros.reduce( (a,b) => a > b ? a : b);
console.log(max);
console.log("------valor mas alto del array numeros");

// let promedio = numeros.reduce( (a,b) => (a+b))/numeros.length;
// se necesito de los valores anteriores, el actual, el indice del array y el array MSSiteModeEvent
// cuando la estructura es mas compleja y se tiene que crear pasos intermedios es cuando se pone llaves
// el ternario es lo siguiente:
// retorname lo que devuelva el operador ternario, el operador ternario pregunta si se llega
// al final de que el indice sea igual que la longitud del array menos uno nos va devolver la operacion
// de b (que ya es la suma de todo el array) entre la longitud del array, pero si no es verdad que
// i sea igual que la long del array menos uno (el final) nos devolvera b para que se siga acumulando la suma del array
let promedio = numeros.reduce( (a,b,i,arr) => {
    b += a;
    return i == arr.length -1 ? b/arr.length : b;
});
console.log(promedio);
console.log("-----Devuelve promedio con un reduce un poco mas complicado");

// cuando es con objetos nos va devolver el ultimo objeto y lo que especifiquemos ya que en los objetos no nos dejo
// manejar sus valores
//$$$$$$$$$$$$$$$$$$$$$  juntos arriba y abajo   $$$$$$$$$$$$$$$$$
//  let mejorEstudiante2 = estudiantes.reduce( (a,b) => a.calificacion > b.calificacion ? a.calificacion : b.calificacion);
//  console.log(mejorEstudiante2);


//para arreglar lo de los objetos, lo que se hizo fue que ahora si a cada objeto y a cada iteracion se 
// le fue preguntando uno por uno sobre las califaciones de cada objeto (a y b, recordar que a es el resultado 
// de la iteracion anterior) y se regresaba un nuevo objeto con las caracteristicas descritas y ese objeto
// que se retornaba es nuestra a

let mejorEstudiante = estudiantes.reduce( (a,b) => {
    if (a.calificacion > b.calificacion) {
        return {
            nombre: a.nombre,
            calificacion: a.calificacion
        }
    } else {
        return {
            nombre: b.nombre,
            calificacion: b.calificacion
        }
    }

})

console.log(mejorEstudiante);








