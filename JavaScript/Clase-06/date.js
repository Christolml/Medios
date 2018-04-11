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
.getHours()    obtiene horas de 0-24
.getSeconds()
.getMilliseconds()
.getDate()   -> Fecha del mes
.getDay()   ->  Dia de la semana  0 -> Domingo
.getTime()   -> Milisegundos desde el 1 de enero de 1970

*/

/*
let date2 = new Date();
console.log(date2.getFullYear());
console.log(date2.getMonth());
console.log(date2.getDay());
console.log(date2.getTime());
*/



/*
Ejercicios imprimir fecha y hora en un formato persoalizado
*/


let date3 = new Date();

let getStringDay = date3=> {
    let days = ['Domingo','Lunes','Martes','Miércoles','Jueves','Viernes','Sábado']
    return days[date3.getDay()]
};

let getStringMonth = date3=> {
    let months = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre']
    return months[date3.getMonth()]
};

let getAmPmHour = date3=> {
    let hours = date3.getHours(), 
    minutes = date3.getMinutes(),
    seconds = date3.getSeconds(),
    amPm = hours >= 12 ? 'PM' : 'AM';
    if (amPm === 'PM' && hours > 12) hours -= 12;
    return `${hourLeadingZero(hours)}:${hourLeadingZero(minutes)}:${hourLeadingZero(seconds)}${amPm}`

};

let hourLeadingZero = num=> ('0' + num).slice(-2);


// let dateFormated = `Lunes 4 de abril de 2018, 9:10am`;
let dateFormated = `${getStringDay(date3)} ${date3.getDate()} de ${getStringMonth(date3)} de ${date3.getFullYear()} , ${getAmPmHour(date3)}`;

console.log(dateFormated);


/*
Definir fechas
new Date(year,month,day,hours,minutes,seconds,millisecondds)
*/
// una forma
console.log(new Date(1997,0,22,5,31,12,19))
// segunda forma
console.log(new Date('Jan 22 1997 07:28:21 GMT-0500'))


/**
 Operaciones con fechas y Fechas internacionales no lo hice, (6.5,6.6)
 */



