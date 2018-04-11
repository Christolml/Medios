
/**
 * OBJETO WINDOW
 * es el padre de todos los objetos en el navegador
 * alert('hola') === window.alert('hola')
 * console.log('hola') ==== window.consol.log('hola')
 * 
 * 
 * 
 * Propiedades
 * 
 *  Dimensiones
 *      .innerWidth  ->dan el tamaño del contenido, mide el ancho que se visualiza en el navegador
 *      .innerHeight ->dan el tamaño del contenido, mide el área vertical que se visualiza con contenido en el navegador
 *      .outerWidth  -> el total de la ventana completa del navegador contando el scroll hacia abajo
 *      .outerHeight -> el total de la ventana  del navegador (en vertical)
 * 
 * 
 *  Coordenadas de la ventana
 *      screenX
 *      screenY
 * 
 *  Scroll
 *      scrollX
 *      scrollY
 * 
 *  Storage 
 *      localStorage    guardan informacion en formato json  manualmente se borra
 *      sessionStorage  guardan informacion en formato json, se borra cuando se cierra el navegador
 * 
 * 
 *  Metodos
 *      alert()  muestra un mensaje de texto
 *      prompt() cuadro que me permite ingresar un dato, eso dato se guarda en una variable de tipo string 
 *      confirm() cuadro que me indica si confirmo o cancelo 
 * 
 *  Manipular ventanas
 *      window.open('url')
 *      window.close()  para este debo de crear con codigo mi ventana abierta y despues la puedo cerrar
 *          ejemp ->  let myWindow = window.open("http://google.com")
 *                    myWindow.close()
 * 
 *      .getSelection()   obtiene la seleccion junto con informacion
 *      .getSelection().toStrin()   me lo convierte en string
 *      .getComputedStyle()   devuelve un objeto con todas las propiedades css computadas 
 *                            (todo el estilo computado por el navegador) para ello debo seleccionar
 *                     un elemento de la pag web, y ese seleccionada tiene como referencia el $0 y ya 
 *                     en el metodo poner window.getComputedStyle($0) 
 *                     con js puedo obtener los estilos calculados por el navegador, desde js leer el css
 * 
 *      .scrollTo(x,y) nos envia a la posicion x,y
 *      .scrollBy(x,y) le suma a la posicion actual los valores de x,y
 *
 * 
 *  History   es el historial de la pestaña abierta y de la sesión actual
 *      window.history
 *      .history.back()
 *      .history.forward()
 *      .history.go(n)   -> n positivo (adelante) n negativo (atras) indica el numero de veces que va adelantar
 *                          o retrasar la pestaña
 * 
 * 
 * 
 * 
 * 
 * 
 */









