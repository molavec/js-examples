class Person {
  constructor(firstname, lastname){
    this.firstname = firstname
    this.lastname = lastname
  }

  getFullname () {
   return this.firstname + ' ' + this.lastname
  }
};

export default Person