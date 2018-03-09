

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
















