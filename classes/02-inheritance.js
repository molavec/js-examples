
// Herencia
// La palabra clave 'extends' se usa en declaraciones de clase o expresiones de clase
// para crear una clase hija de otra clase.

import { Person } from './01-definition.js';

export class Patient extends Person {
  constructor(firstname, lastname, age, weight, height) {
    super(firstname, lastname);
    this.age = age;
    this.weight = weight;
    this.height = height;
  }

  calculateIMC() {
    return this.weight / Math.pow(this.height, 2);
  }
}
