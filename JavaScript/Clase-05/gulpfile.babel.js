// con ES6 ya se tienen los imports
import gulp from 'gulp';
import babel from 'gulp-babel';

// con nodejs se puede o se podia traer archivos con un require, pero es mejor con
// import como esta arriba
// const gulp = require('gulp');


// 4 metodos de gulp que debo de saber
// gulp.task();    //define una tarea
// gulp.src();      //indica un directorio en el cual gulp busca archivos con los cuales va a trabajar     origen
// gulp.dest();    //define un directorio en el que gulp va a dejar los archivos ya procesados      destino
// gulp.watch();   //esta mirando los cambios en un archivo especifico y cuado hay un cambio automaticamente realiza la tarea que se le indique


// las tareas se hacen a traves de plugins

//('nombre de la tarea', una funcion donde va estar ek cuerpo de la tarea)
gulp.task('es6', () => {
    /* se le indica donde va a buscar el archivo con el que se va a trabajar, a apartir del directorio actual
     busque el directorio es6 y dentro de el que busque cualquier archivo js  */
    gulp.src('./es6/*.js')
    /*   pipe es un metodo de nodejs, se le pasa los plugins
    pipe lo que hace es pasar los datos de uno a otro en este caso agarramos el archivo de src y lo pasa a babel */
      .pipe(babel())
    //   se dice en donde va a quedar mis datos ya procesados
      .pipe(gulp.dest('./es5'))
});

// cuando mi tarea se llama default, en la terminal solo tengo que poner gulp sin el nombre de la tarea
gulp.task('default', ()=> {
    /* primer parametro la ruta donde va a estar mirando, el segundo param es un array de tareas esto es
     las tareas que va ejecutar cuando haya cambios a mi archivo que ando mirando, en este caso ando
    ejecutando la tarea es6 que esta arriba, y con esto cuando haya un cambio en mi archivo es6.js y guarde cambios
    lo que hara sera convertir los nuevos cambios a es5 en la carpeta es5   */
    gulp.watch('./es6/*.js', ['es6'])
});


