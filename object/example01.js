/**
* example01: Destructiración de objetos
*
* Description:
*  Muestra como realizar destructuring de objetos
*
* How execute:
* $ node object/example01.js
* $ node yarn:example01
*
*/

let getMethods = (obj) => Object.getOwnPropertyNames(obj).filter(item => typeof obj[item] === 'function')
getMethods(Array.prototype)

getMethods(Array)
getMethods(new Array())

