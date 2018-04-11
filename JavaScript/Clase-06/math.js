
/*
MATH
no se instancia
Solo si tienen propiedades y metodos estaticos

Metodos

Math.max(a,b,c....n) 
Math.min(a,b,c....n)
Math.random()
Math.floor() -> redondea hacia abajo un decimal
Math.ceil() -> redondea hacia arriba un decimal
Math.round() -> redondea un decimal a su entereo mas cercano
Math.pow(x,n) -> eleva x al exponente n
Math.sqrt(n) -> devuelve la raiz de n
 */

let arr = [1,2,3,4,5,6,7];
console.log(Math.max(...arr));
/* 
console.log(arr);
expande los numeros del array como si fueran numeros secuenciados y no como un array
console.log(...arr);
*/



/**
 * Obtener un enero aleatorio
 */

let getRandomNumber = (min,max) => {
    // se esta obteniendo un numero aleatorio entre el rango de nuestro min y nuestro max y al ultimo sumamos el min con 
    // el random generado del rango de min y max
    return Math.floor(Math.random() * (max-min) + min);
}

/* se tiene un numero aleatorio entre cero y un 10, el * 10 es para indicarle cual sera el tope de mi random
let randomNumber = Math.floor(Math.random() * 10);
console.log(randomNumber);
*/

let arr2 = ['Christopher','Luis','Dana','Trosca']
console.log(arr2[getRandomNumber(0,arr2.length)]);


/**
 * Adivinando el numero que tiene la maquina en memoria
 */

let guestNumber = (min,max) => {
    let numMachine = getRandomNumber(min,max);
    let numPlayer;
    let count = 0;
    do {
// prompt nos devuelve un string, por tanto ocupamos convertirlo a un numero para usarlo en nuestras condicionales
        // numPlayer = Number(parseInt(prompt('Adivina el numero de la maquina'))); una forma con Number
        numPlayer = parseInt(prompt(`Adivina el numero de la maquina (entre ${min} y ${max})`),10);  //el 10 es para convertirlo a numero en base decimal
        count++;
        if (numPlayer > numMachine) {
            alert(`Tu numero es mayor que el de la maquina
            Llevas ${count} ${count === 1 ? 'intento' : 'intentos'}`)
        } else if (numPlayer < numMachine) {
            alert(`Tu numero es menor que el de la maquina
            Llevas ${count} ${count === 1 ? 'intento' : 'intentos'}`);
        } else {
            alert(`Adivinaste el numero en ${count} ${count === 1 ? 'intento' : 'intentos'}`)
        }

    } while(numPlayer !== numMachine);
};


guestNumber(50,90);





