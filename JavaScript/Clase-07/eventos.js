


/**
 * EVENTOS
 * Un eveto es 'cualquier cosa' que sucede en la aplicación
 * 
 * Para reconocer los eventos disponibles en un objeto es -> console.dir(obj), todos los que
 * comiencen con on son evento
 * 
 * Aplicar una funcion a un evento, no recomendable
 *        no es ta bueno hacerlo asi por que si despues se quiere meter un nuevo evento al objeto ya no se puede
 *   objeto.onEvent = function() {}
 * 
 * 
 * Usar addEventListener, recomendable
 *      esta escuchando los eventos y cuando sucede el evento ejecuta la funcion
 *   objeto.addEventListener('event', function(){})   ,  el evento sin on de esta forma
 * 
 * 
 * EVENTOS COMUNES
 *  De mouse
 *      'click'
 *      'dblclick'
 *      'onmousedown' 
 *      'onmouseenter'
 *      'onmouseleave'
 *      'onmousemove'
 *      'onmouseout'
 *      'onmouseover'
 *      'onmouseup'
 *      'onmousewheel'
 * 
 * De teclado
 *      'keydown'
 *      'keyup'
 * 
 * De formulario
 *      'submit' -> cuando se envia el formulario
 *      'change' -> cambio de valor de un input
 * 
 * De window
 *      'resize' -> cuando se redimensiona la ventana
 *      'scroll' -> cuando se hace scroll
 *      'load' -> cuando se carga completamente toda la pagina web
 *      'DOMContentLoaded' -> cuando se renderiza el DOM
 */



//  let eventHandler = e => {
//      e.preventDefault();
//      e.target,style.backgroundColor = 'red';
//  }

//  menu.addEventListener('click', eventHandler);

// menu.addEventListener('click', evento => {
//     evento.preventDefault();    // se para evitar que el navegador haga lo que quiere hacer, su comportamiento predeterminado
//     console.log(evento.target);   // con target me dice donde se disparo el evento
//     evento.target.style.color = 'red';   // le estoy cambiando el color al que tenga el evento click

// });



/**
 * DELEGACION DE EVENTOS
 */

 let eventHandler = e => {
     e.preventDefault();
    //  se detecta cuando se hace clic en un elemento <a>
     if (e.target.tagName === 'A') {
         console.log(e.target.textContent);
     }
 }


menu.addEventListener('click', eventHandler);



