

//------------ARRAYS-----------------
// en un array puedo poner true y false, con true hay que recordar que toma valor de 1 y con false de 1
// cuando le metes un string al array te lo concatena con lo dema, eso en el ejemplo de la suma

let arr = [1,2,3,false,'Christopher',true,'Trosca',4,5];
let arr2 = [1,2,3,'Holi',4];


console.log(arr.length);
console.log(arr[2]);

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

console.log(`La suma es del array es: ${sum}`);
console.log(`La suma del segundo array es: ${sum2}`);

// cuando a un tipo de dato se comienza con mayuscula, estoy haciendo referencia como a donde nace 
// todo lo relacionado a ese tipo de dato y con prototype son como las propiedades que tiene 
// y le estoy asignando otra nueva propiedad de saludo
Array.prototype.saludo = 'Holi';
console.log(arr.saludo);

//-------------------INDEX OF-------------
console.log(arr.indexOf(8)); //este no existe y me regresa un numero negativo
console.log(arr.indexOf(4));  //me regresa en que posicion esta el 4

//-----------AGREGAR ELEMENTOS A MI ARRAY------------
//  .push(el1,el2,el3)   Añade al final 
//  .unshift(el1,el2,el3)   Añade al inicio

arr.push('JavaScript','Desde','Cero');
arr.unshift('Tengo',10,'Años');
console.log(arr);

//--------------ELIMINAR UN SOLO ELEMENTO (SIN PARAMETROS)--------------
//estos metodos devuelven el elemento eliminado
//  .pop()  al final
//  .shift()   al inicio

let eliminado = arr.pop(), eliminado2 = arr.shift();
console.log(arr);
console.log(eliminado,'\n',eliminado2);

//---------------JOIN (NOS DEVUELVE NUESTRO ARRAY EN STRING)---------
//los elementos de nuestro nuevo string estan separados por una coma por defecto, pero se puede modificar
console.log(arr.join(' '));

//-----------------SPLICE(AÑADE O QUITA ELEMENTOS)------------------
//añade o quita elementos
//modifica el string original
arr.splice(3,2,'nuevo','en esta','cadena');
console.log(arr);

//--------------SLICE ---------------
//se crea un nuevo string a partir de un array, toma los elementos y ya es un nuevo string

let arr3 = arr.slice(3,7);
console.log(arr3);


//--------------ES6-------------
//con find, nos devuelve el primer elemento que coincida con la condicion
//con findIndex, devuelve el indice del elemento 
let arr4 = [1,2,3,4,5];
let num = arr4.find( elemento => elemento > 3);
let numIndex = arr4.findIndex( elemento => elemento > 3);
console.log(num);
console.log(numIndex);

// array-fuction
//con paretesis si recibe mas de un parametro y separados por coma
//si no recibe parametros es de la forma de abajo
//(parametro1,parametro2) => //valor retornado
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

//-----------------EXPRESIONES EN PROPIEDADES
//ando juntando mis dos variables a y b que estan arriba declaradas y en este las uno para crear una
// propiedad y asignarles un valor
let myObj2 = {
    [a + b]: 'Hola mundo'
}

console.log(myObj2);



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

//------------------FILTER-------------
// filtra elementos y los devuelve en un array
//nos saca los elementos que de calificacion tengan mayor a 10
let estudiantesAprobados = estudiantes.filter(estudiante => estudiante.calificacion > 10);
console.log(estudiantesAprobados);
//nos saca el nombre de los elementos que tuvieron calificacion mayor a 10
let estudiantesAprobadosNombres = estudiantesAprobados.map(estudiante => estudiante.nombre);
console.log(estudiantesAprobadosNombres);







