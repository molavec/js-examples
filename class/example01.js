/**
 * example1: Declaración de una clase
 *
 * Description:
 * Se declara la clase Gato con sus campos y un
 * método (correr())
 * 
 * Se comenta una forma alternativa de instanciar un
 * objeto Gato mediante una función 'Gato' similar
 * a una clase.
 *
 * How execute:
 * $ node class/example01
 * $ yarn class:example01
 */

 /*
function Gato(nombre, edad, peso){
    this.nombre = nombre;
    this.edad = edad;
    this.peso = peso;

    this.correr = function(){
        document.write("El gato ", nombre, " corre");
    }
}

var gato1 = new Gato("Peludo", 4, 3);
var gato2 = new Gato("Manchas", 7, 4);

// document.write(gato1.nombre);
gato2.correr();
*/

class Gato{
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