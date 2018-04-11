
/**
 * NAVIGATOR,  nos da las propiedades del navegador
 * 
 * GEOLOCATION    es un objeto con tres metodos
 *  clearWatch           limpia la posicion de watchPosition
 *  getCurrentPosition   obtiene la posicion actual fija 
 *  watchPosition        ve la posicion del objeto mientras se mueve 
 * 
 * 
 * navigator.geolocation.getCurrentPosition(success [,error,options])  es un metodo con tres parametros, pero el primero es obligatorio
 *      success es una funcion,
 */

//  obtengo la latitude y la longitude con lo cual me puede ir a google maps y me devuelve mi ubicacion actual
 navigator.geolocation.getCurrentPosition(function(geoposition) {
     let coords = geoposition.coords,
     lat = coords.latitude,
     long = coords.longitude;

     console.log(lat,long)
 });



 /**
  * LOCATION      contiene la informacion de la pagina actual
  * 
  *     .href       -> url
  *     .pathname   -> la ruta dentro del dominio
  *     .hash       -> el marcador
  *     .origin     -> protocol + hostname
  *     .protocol   -> http o https
  *     .hostname   -> hostname (dominio o IP)
  *     .host       -> hostname y port
  *     .port       -> puerto
  *     .search     -> parametros de busqueda ?id=1
  * 
  */

  /**
   * Determinar item activo de un menu
   */

   function getCurrentMenuitem(containerElement) {
       let url = location.href,
       links = [...containerElement.querySelectorAll('a')];
       links.map(link => {
           if (link.href === url) return link.classList.add('active');
       })
   }

   getCurrentMenuitem(document.getElementById('menu'));




