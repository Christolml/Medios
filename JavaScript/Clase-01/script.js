// alert("Holi mundo");
console.log("Holi mundo");

let saludo="Holi mundo";
console.log(saludo);


let a;
if ( 1 < 5) a = 5; console.log(a)

// con el back slash puedo poner el caracter de las comillas dentro del strings
let holaMundo = "Hola \"mundo\"";

// template string, nos permite poner variables dentro de un string
//  juntas y otras funcionalidades, usa `` y ${} para las variables
let amigo="Christopher";
let numero=2;
let saludo2 = `Bienvenido, ${amigo} ${numero*3} veces`;
console.log(saludo2);


let nacimiento=1997,
year = new Date().getFullYear(),
edad=year-nacimiento;
console.log(`Tu tienes ${edad} años`);

// en el segundo caso esta concatenando mi num con mi string y eso se debe 
// a que eso es lo que hace + cuando hay un string (concatena)
console.log(5+5);
console.log(5+"5");  //como arreglar esto

if("a"=="b") {
    console.log("Son iguales");
} else {
    console.log("No son iguales");
}

//undefined, cuando no se le asigna un valor a la variable, 
//null cuando no existe un  valor
let noDefinida;
//let title = document.getElementById("title");

//operadores  +=, -=, *=, /=

let numero2=10;
numero2*=2;
console.log(numero2);

//operadores de comparación (devuelven un boolean)
// <, >, <=, >=, ==,  === el triple igual es para comparar de valor y de tipo
let condicion = 5 <= 5;
let condicion2= 5 ==="5";
console.log(condicion);
console.log(condicion2);

//propiedades y métodos
let hola="Buenos dias mi maestra favorita";    //como arreglar que con indexOf me imprima de todas las "a"

let name1="Christopher";
let name2="Alex";
let name3="Esmeralda";
let name4="carlos";
// console.log(name1.indexOf("r"));
//con esto me devuelve true o false ya que, estamos comparando con el indexOf con los nombres
console.log(`la sentencia fue: ${name1.indexOf("C")==0}`);
//si un nombre de arriba lo escriben con minuscula con toUpperCase lo convierto a mauscula
//y ya ejecuto el indexOf sin problemas
console.log(name4.toUpperCase().indexOf("C")==0);  

let num=10.43657645;
console.log(`Número original: ${num}  \n Con toFixed(2) ${num.toFixed(2)},  \n Con toFixed(0) ${num.toFixed(0)}, 
 Con toLocaleString() ${num.toLocaleString()}, \n Con toString() ${num.toString()}`);











