

class Task {
    constructor(name) {
        this.name = name;
        this.isComplete = false;
    }

    /*
    en la practica nos podemos dar cuenta que nos equivocamos al decir que una tarea ya esta completada
    y nos hizo falta hacer unas correcciones y es por ello que mejor usamos el opuesto de isComplete
    no recomendado             this.isComplete = true;

    */
    complete() {
        // le estoy asignando lo opuesto que tiene isComplete 
        this.isComplete = !this.isComplete;
    }
}


// una clase donde se crean listas que almacenan tareas
class TaskList {
    constructor(name) {
        this.name = name;
        this.tasks = [];
    }

    addTask(task, element) {
        // con este push estamos metiendo tareas al array del constructor de esta clase
        this.tasks.push(task);
        // cuando se crea una tarea debemos renderizarla, mostrarla en pantalla
        this.renderTask(element);
    }


    removeTask(indice, element) {
        // con splice se elimina algo de un array, el segundo parametro es la cantidad de elementos que se quiere quitar
        this.tasks.splice(indice,1)
        this.renderTask(element);
    }

    // recibe un elemento del html
    renderTask(element) {
        // tasks es un array del array tasks del constructor gracias a map
        // con este nuevo array vamos a escribir html para cada una de las tareas y luego ese 
        // html lo metemos a la pag web
        // cada tarea es un li
        let tasks = this.tasks.map( task => `
        <li class="task">
        <input type="checkbox" class="task__complete-button">
        <span class="task__name">${task.name}</span>
        <a href="#" class="task__remove-button">X</a>
        </li>
        `);

        // con este ando juntando todo el codigo html generado de arriba de las tareas que tengo 
        // para luego meterlo a mi html
        element.innerHTML =tasks.reduce((a,b) => a + b, '');
    }

}


// --------------------TRABAJANDO CON EL DOM------------------
//  vamos a trabajar con el input y el ul del html
// Con Element estoy haciendo como referencia de que es un elemento html
const addTaskElement = document.getElementById('add-task');

const taskContainerElement = document.getElementById('tasks-container');

// se crea una lista de tareas a mano en el codigo
// el parametro de TaskList es el nombre que tendra la lista
const inbox = new TaskList('inbox');


// FUNCION DE AÑADIR LA TAREA DESDE EL DOM
// esta funcion debe capturar lo que se escribe en la pag web y luego instanciar
// una tarea por medio de la clase Task que esta al principio y tambien debe ejecutar
// el metodo de addTask de la clase TaskList
// el segundo parametro del metodo de abajo es list = inbox ya que es la lista 
// que tenemos por defecto
function addDOMTask(e, list = inbox) {
    // obtener el texto del input, cuando se presiona enter es porque
    // ya se termino de escribir la tarea y capturamos el contenido del input
    if (e.key === 'Enter') {
        // crear la tarea instanciando la clase
        // con this.value, en este contexto this es el elemento en el que el evento fue 
        // ejecutado, el elemento es el input por tanto es el value del texto del input
        let task = new Task(this.value);
        // añadir la tarea a la lista
        list.addTask(task,taskContainerElement);
        // borrar el contenido del input
        this.value = ' ';
    }
    



    // me imprime la tecla que oprimi
//    console.log(e.key);
}

// cada vez que suelto una tecla se ejecuta la funcion addDOMTask
addTaskElement.addEventListener('keyup', addDOMTask);


//------------OBTENER EL INDICE DE LA TAREA ACTUAL
function getTaskIndex(e) {
    // se esta seleccionando al padre, se obtiene el elemento de la tarea el item
    let taskItem = e.target.parentElement, 
    taskItems = [...taskContainerElement.querySelectorAll('li')];   //se esta obteniendo un array con todas las tareas
    return taskItems.indexOf(taskItem);
}


//-----------------ELIMINAR LA TAREA DESDE EL DOM------------------
/*
vamos a detectar un evento en el contenedor, por la denegacion de eventos en JS consiste
en que si quiero hacer el mismo evento en muchos elementos es perdida de recursos hacer el mismo evento
en cada elemento entonces por tanto se hace el evento en el contenedor y luego se detecta en cual de sus hijos
se ejecuto el evento, el evento se esta ejecutando en el padre por tanto solo se hace una vez el evento 
*/
function removeDOMtask(e, list = inbox) {    // e es el evento 

    // detectar que se hizo click en el enlace en la x 
    if (e.target.tagName === 'A') {   //target es donde se ejcuto el evento, tagName es el nombre de la tiqueta
        // remover tarea de la lista, se necesita el indice
        list.removeTask(getTaskIndex(e),taskContainerElement)
    }
}

// taskContainerElement es el ul de mi html el cual contiene a todas las tareas
taskContainerElement.addEventListener('click', removeDOMtask);

//------COMPLETAR LA TAREA
function completeDOMtask(e, list = inbox) { 
    // detectar que se hizo click en el input
    if (e.target.tagName === 'INPUT') {
        // completar la tarea de la lista, se necesita el indice
        list.tasks[getTaskIndex(e)].complete();
        console.table(list.tasks);
    }
}

taskContainerElement.addEventListener('click', completeDOMtask);











