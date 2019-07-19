/**
 * example1: Declaración de una clase
 *
 * Description:
 * Se declara la animal con 2 campos,
 * como clase padre.
 * 
 * Se declara la clase 'Domesticos' que
 * hereda de 'Animal', se incluye(obligatorio)
 * la funcion super() en el constructor de
 * la clase 'Domesticos'.
 *
 * How execute:
 * $ node class/example02
 * $ yarn class:example02
 */

class Animal{
    constructor(tipo, raza){
        this.cero = tipo;
        this.raza = raza;
    }
}

class Domesticos extends Animal{
    constructor(cero, nombre, edad, peso){
        super(cero)
        this.uno = nombre;
        this.dos = edad;
        this.tres = peso;
    }
}

var animal1 = new Domesticos("Hogar", "Boby", 8, 6);
var animal2 = new Domesticos("Caza", "Jorge", 7, 5);
var unico = new Animal("Salvaje", "pura");

// console.log(animal1.cero);
console.log( unico.cero );