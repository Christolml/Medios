
/**
 * DOM   -> Document Object Model
 * 
 *  .body               -> body element
 *  .documentElement    -> root (html)
 *  .links              -> enlaces
 *  .scripts            -> scripts
 *  .images             -> images
 *  .head               -> head element
 *  .styleSheets        -> todos los css
 * 
 * 
 * 
 * OBTENER ELEMMENTOS DEL DOM
 * 
 * document.getById('id')    devuelve el elemento del dom que tiene ese id
 * documente.querySelector('cssSelector')    obtiene el primer de los elementos que coincida con el selector
 * document.querySelectorAll('cssSelector')    devuelve todos los elementos que coincida
 * 
 *   *si no se encuentra el o los elementos se devuelve null
 * 
 */

//  devulve null
// console.log(document.getElementById('app'));

let title = document.getElementById('title');
if (title) {
    title.textContent = 'Bienvenidos';
}
console.log('Esto funciona');



/**
 * querySelector() y querySelectorAll()
 *      se pueden ejecutar desde el documento o desde un elemento
 *      querySelectorAll no devuelve un array (devuelve un nodeList), es necesario expandirlo
 *          [...document.querySelectorAll(selector)]    aqui se esta convertiendo a un array
 */

// menuLinks = menu.querySelectorAll('#menu li a')
// se esta usando la # almohadilla el cual es el ash del id, ya que es un selector de css

let menu = document.getElementById('menu'),  //busca un id solamente por eso no se pasa #menu
    menuLinks = menu.querySelectorAll('a'),   // se esta buscando dentro de un elemento
    menuLinksArray = [...menu.querySelectorAll('a')],    // se devuelve un array
    menuItems = [...menu.querySelectorAll('li')];

console.log(menu),
    console.log(menuLinks),
    console.log(menuLinksArray);


/**
 * DOM TRAVERSING    irnos moviendo por el dom    elementos: etiquetas html, nodo: en el orden jerarquico
 *  
 * Hermanos
 *      element.nextElementSibling          -> hermano siguiente (elemento)
 *      element.nextSibling                 -> hermano sigte (nodo)
 *      element.previousElementSibling      -> hermano anterios(elemento)
 *      element.previousSibling             -> hermano anterior (nodo)
 *  
 * Padres
 *      element.parentElement               -> padre (elemento)
 *      element.parentNode                  -> padre (nodo)
 * 
 * Hijos
 *      element.children                    -> lista de elementos hijos
 *      element.childNodes                  -> todos los nodos hijos
 *      element.firstElementChild           -> primer elemento hijo
 *      element.lastElementChild            -> primer nodo hijo
 *      element.lastElementChild            -> ultimo elemento hijo
 *      element.lastChild                   -> ultimo nodo hijo
 */

 console.dir(menuItems[1]);



 /**
  * PROPIEDADES DE LOS ELEMENTOS
  * 
  * Contenido (dos formas de acceder al contenido de los elementos)
  *     .textContet  -> devuelve el texto plano del elemento (lectura y escritura)
  *         item.textContent
            "Hola Item 2"

  *     .innerHTML   -> html interno de un elemento (devuelve un html)
  *         item.innerHTML
            "Hola <a href="https://www.google.com">Item 2</a>"
  * 
  * Atributos
  *     .attributes   obtiene los atributos
  *         item.attributes
            NamedNodeMap {0: class, 1: id, 2: data-menu, class: class, id: id, data-menu: data-menu, length: 3}

  *     .getAttribute('attr')   obtiene un atributo especifico
  *         item.getAttribute('class')
  *          "item"
  *          item.getAttribute('id')
  *          "item2"
  *          item.getAttribute('data-menu')
  *          "2"
  *
  *      .setAttribute('attr','value')   especifica un atributo particular, estable 
  *          checkbox.setAttribute('checked','true')
  *      .removeAttribute('attr')
  * 
  * 
  * CLASES
  *     .classList           devuelve un node con todas las clases
  *         .add('className')
  *         .remove('className')
  *         .toggle('className')      cambia una clase
  *         .constains('className')  -> devuelve true si el elemento contiene esa clase
  *
  *
  * ESTILOS CSS
  *     .style      para definir escribir propiedades
  *         .cssProperty (usar camelCase en lugar de guiones)
  * 
  *              item.style.color = 'red'
  *              "red"
  *              item.firstElementChild.style.color = 'green'
  *              "green"
  *              item.style.backgroundColor = 'yellow'
  *              "yellow"
  */

   let item = menuItems[1];  


/**
 * TRANSFORMAR EL DOM
 * 
 *          parent -> Elemento padre (en este caso es la variable menu)
 *  Crear elementos
 *      document.createElement('tagName')   crea elementos html
 * 
 *  Insertar elementos
 *      .appendChild()  -> inserta un elemento al final del padre
 *          parent.appendChild(elemento) 
 * 
 *      .insertBefore   -> inserta un elemento antes de otro
 *          parent.insertBefore(newElement,nextElement)
 * 
 *  Eliminar y mover elementos
 *      parent.removeChild(element)
 *          elimina el element de parent
 *      element.remove()
 *          elimina el  element
 */

// let element = document.createElement('li');
// element.textContent = 'Soy un nuevo elemento';
// menu.appendChild(element);
// menu.insertBefore(element,menuItems[1]);


//eliminar un element y agregar al final
let element = menu.removeChild(menuItems[0]);    // se esta sacando un element y se guarda en una variable
menu.appendChild(element);


