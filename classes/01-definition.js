
// Clases
// Las clases son una mejora sintáctica sobre la herencia basada en prototipos de JavaScript.

export class Person {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }

  getFullname() {
    return `${this.firstname} ${this.lastname}`;
  }
}
