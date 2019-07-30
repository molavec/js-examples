//Array.prototype.join

let names = ['Miguel', 'Manuel']

// custom separator
console.log(names.join(', '))
console.log(names.join(' - '))

// default separator
console.log(names.join())

// try in terminal --> $ node array-join help
var help = [
  'Usage,',
  '   foo-app <input>'
]
if (process.argv[2] === 'help')
  console.log(help.join('\n'))

// complex example. First letter to Uppercase
var name = 'guilfredo montecinos'
let capitalName = name.split(' ')
      .map( word =>
        word.charAt(0).toUpperCase() + word.slice(1)
      ).join(' ')
console.log(capitalName)