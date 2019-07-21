/**
 * example1: Declaración de una clase
 *
 * Description:
 * Se declara la clase Gato con sus campos y un
 * método (correr())
 *
 *
 * How execute:
 * $ node class/example01
 * $ yarn class:example01
 */

/**
 * Clase gato
 */
class Gato {
    constructor(nombre, edad, peso){
        this.nombre = nombre;
        this.edad = edad;
        this.peso = peso;
    }

    correr(){
        console.log("El gato", this.nombre, "corre");
    }
};

var gato1 = new Gato("Peludo", 4, 3);
var gato2 = new Gato("Manchas", 7, 4);

gato1.correr();

/**
 * FORMA ALTERNATIVA: ES5
 * Se comenta la forma antigua de instanciar un
 * objeto Gato mediante una función 'Gato' similar
 * a una clase.
 */
/*
function Gato(nombre, edad, peso){
    this.nombre = nombre;
    this.edad = edad;
    this.peso = peso;

    this.correr = function(){
        console.log("El gato ", nombre, " corre");
    }
}
var gato1 = new Gato("Peludo", 4, 3);
var gato2 = new Gato("Manchas", 7, 4);

console.log(gato1.nombre);
gato2.correr();
*/