
// this es un apuntador a un objeto
let myObj = {
    nombre: 'Christopher',
    saludar() {
        console.log(`Holi ${this.nombre}`);
    }
}

myObj.saludar();


'use strict';
function checkThis() {
    console.log(this);
}

// checkThis();

//-------------- LEXICAL THIS--------------
// con las arrow function existe el lexical this el cual nos permite ir directamente con el this exterior 
// antes para hacer eso se tenia que usar una variable intermedia
function Boy(edad) {
    this.edad = 0;
    setInterval(() => {this.edad++},1000)

}


let pedrito = new Boy();

