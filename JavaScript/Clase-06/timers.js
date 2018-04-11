
// /**
//  *  TIMERS
//  * cb= callback,   t = tiempo (en milisegundos)
//  * setTimeout(cb,t) -> espera un tiempo y despues de ese tiempo ejecuta la funcion que se pase como parametro
//  * setInterval(cb,t) ->ejecuta la funcion que se pasa como parametro repetidas veces de acuerdo a un intervalo de tiempo
//  */


//  let counter = num => console.log(++num);

// //  se esta esperando tres segundos antes de imprimir holi mundo
//  setTimeout(function(){
//      counter(1);
//      console.log('Holi mundo');
//  },3000);

// let count = 0;

// // cuando un intervalo se guarda en una variable se tiene un referencia de ese intervalo, por 
// // eso se puede hacer el clearInterval y limpiar el intervalo
// let myInterval = setInterval(function(){
//      console.log(++count);
//     if (count === 5) {
//         // clearInterval detiene la function
//         clearInterval(myInterval);
//     }
//  },1000);



/**
 * EJERCICIO RELOJ
 */
//  let reloj = setInterval(function(){
//      document.body.innerHTML = new Date().toLocaleString();
//  }, 1000);

// CONTADOR HACIA ATRAS
// let countDown = ms => {
//     let myCountDown = setInterval(function(){
//         ms -= 1000;
//         let minutes = Math.floor(ms / (1000 * 60)),
//         seconds = Math.floor((ms % (1000 * 60)) / 1000);
//     document.body.innerHTML = `Quedan ${minutes} minutos y ${seconds} segundos `
//     if (ms === 0) {
//         clearInterval(myCountDown);
//         document.body.innerHTML = `Tiempo cumplido`;
//     }
//     }, 1000)
// };

// countDown(3000);


/*
* MAQUINA DE ESCRIBIR
*/

let writing = str => {
    let arrFromStr = str.split('');   // split, trnaforma el string str a un array
    let i = 0;
    let printStr = setInterval(function() {
        document.body.innerHTML += arrFromStr[i];
        i++;

        if (i === arrFromStr.length) {
            clearInterval(printStr);
            document.body.style.color = 'steelblue';
        }

    },80);
};

writing('Esto se esta escribiendo');


