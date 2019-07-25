//Array.prototype.concat()

let items = [1, 2]

// single value
let newItems = items.concat(3)
console.log(newItems)

// array
newItems = items.concat([3, 4])
console.log(newItems)

// nested array
newItems = items.concat([3, [4, 5]])
console.log(newItems)

// A litle complex example
let people1 =[
  {
    name: "Miguel",
  },
  {
    name: "Manuel",
  },
]

let people2 =[
  {
    name: "Andrea",
  },
  {
    name: "Angelica",
  },
]


people1.concat(people2).forEach( (person) => console.log(person.name))