//Array.prototype.slice()

// Los elemento de tipo básico con copiados con un nuevo valor
let items = [1, 2, 3, 4, 5]
let copy = items.slice()
copy.push(6)
console.log(items)
console.log(copy)

// En el caso de los objetos solo se copia la referencia
let person = {name: 'Mike'}
items = [1, 2, person]
console.log(items)

copy = items.slice()
copy[2].name =  'Alicia'
console.log(items)
console.log(copy)

// Su principal función es extraer parte de un array
items = [1, 2,  3, 4, 5, 6]
copy = items.slice (1, 4) // start (posición 1) -
                          //end (posición 4 sin incluir este elemento)
console.log(items)
console.log(copy)

// Sin segundo argumento
console.log(items.slice(3))

// Valores negativos
console.log(items.slice(-1))
console.log(items.slice(-3))
console.log(items.slice(-3,-1))
console.log(items.slice(1,-2))

