
/*
clase => plantilla a partir de la cual se crean objetos
instancia => cada objeto creado a partir de una clase
constructor => funcion que se ejecuta automaticamente䀠al instanciar una clase
propiedad => valores
metodos => funciones

 en ES6 es cuando se empezo a usar las clases en js, antes se tenia que hacer por funciones
*/

// el cosntructor debe llevar el nombre tal cual "constructor"
// se puede crear nuevas propiedades aunque no esten como parametros en el constructor

class Persona {
    constructor(nombre,apellido,pais) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.pais = pais;
        this.nombreCompleto = `${nombre} ${apellido}`;
    }

    saludar() {
        return `Holi, soy ${this.nombreCompleto} y vivo en ${this.pais}`;
    }

}




const christo = new Persona('Christopher','Velazquez','Mexico');
console.log(christo.saludar());


/* se esta heredando de la clase persona
las tres primeras propiedades del constructor las hereda de la clase persona, se usa super porque indica 
que falta el super clase (clase padre) y con eso me traigo las propiedades que ocupo de la clase padre
*/
class Profesor extends Persona {
    constructor(nombre,apellido,pais,curso) {
        super(nombre,apellido,pais);
        this.curso = curso;
    }

    invitarAlCurso() {
        return `Holi soy ${this.nombre} y te invito al curso ${this.curso}`
    }

}

const luis = new Profesor('Luis','Velazquez','Mexico','GO');
console.log(luis.invitarAlCurso());



// ------------------------METODO STATIC
// es un metodo que no requiere instancia