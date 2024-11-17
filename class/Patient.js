import Person from "./Person"

class Patient extends Person {
  constructor(firstname, lastname, age, weight, height){
    super(firstname, lastname)
    this.age = age
    this.weight = weight
    this.height = height
  }

  calculateIMC() {
    return this.weight/Math.pow(this.height, 2)
  }
};

export default Patient