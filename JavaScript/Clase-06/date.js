

//----------DATE
/*
date es un objeto que ocupa ser instanciado para usarse

*/

// instanciando el objeto Date, todo lo de abajo son objetos, setFullYear y los demas son metodos, no tiene propiedades
// de los metodos se puede recuperar informacion y establecer informacion
let date = new Date();
// console.dir(date);   muestra el prototype de Date
date.setFullYear(1980);
date.setMinutes(20);
date.setHours(21);
date.setDate(21);
// los meses es un aray van del 0-11
date.setMonth(11);
console.log(date);



/* ----------------METODOS GET

.getFullYear()
.getMonth()   0 -> Enero
.getHours()
.getSeconds()
.getMilliseconds()
.getDate()   -> Fecha del mes
.getDay()   ->  Dia de la semana  0 -> Domingo
.getTime()   -> Milisegundos desde el 1 de enero de 1970

*/

let date2 = new Date();
console.log(date2.getFullYear());
console.log(date2.getMonth());
console.log(date2.getDay());
console.log(date2.getTime());
