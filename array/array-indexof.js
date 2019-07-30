// Array.prototype.indexOf()


// Encuentra elemento y entrega la posición
let names = ['juan', 'luis', 'gustavo']
console.log(names.indexOf('gustavo'))
let gustavoExists = names.indexOf('gustavo') > -1
console.log(gustavoExists)

// ¿Está el elemento en la posición indicada?
console.log(names.indexOf('luis', 1)) //1
console.log(names.indexOf('luis', 2)) //-1


//filtrado
var whitelist = ['.js', '.css']

var events = [
  {
    filename: 'src/index.html'
  },
  {
    filename: 'src/index.js'
  },
  {
    filename: 'src/style.css'
  },
]

var files = events.filter( (event) => {
  const ext = require('path').extname(event.filename)
  return whitelist.indexOf(ext) > -1;
})

console.log(files)