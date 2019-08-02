/**
* example03: Operador delete
*
* Description:
* El operador delete eliminar una propiedad de un objeto.
*
* Al contrario de lo que se podría pensar, el operador delete
* no tiene nada que ver con liberar memoria (sólo lo hace de
* manera indirecta eliminando referencias. Más detalles en la
* página de gestión de memoria).

* Si la operación delete funciona correctamente, eliminará
* la propiedad del objeto por completo. Sin embargo,
* si existe otra propiedad con el mismo nombre en la
* cadena del prototype del objeto, éste heredará la propiedad
* del prototype.

* "delete" sólo es efectivo en propiedades de objetos.
* No tiene ningún efecto en variables o en nombres de funciones.
* Aunque a veces son mal identificados como variables globales,
* las asignaciones que no especifican al objeto (ejemplo: x = 5),
* son en realidad propiedades que se asignan al objeto global.
*
* delete no puede eliminar ciertas propiedades de los objetos
* predefinidos (como Object, Array, Math etc). Estos están descritos
*  en ECMAScript 5 y más tarde como no configurables.
*
* https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Operadores/delete
*
* How execute:
* $ node scope/example03.js
* $ node yarn:example03
*
*/

x = 42         // crea la propiedad x en el objeto global
var y = 43     // crea la propiedad y en el objeto global, y la marca como no configurable
myobj = {
  h: 4,
  k: 5
}

// x es una propiedad del objeto global y puede ser eliminada
console.log('x')
delete x       // retorna true

// y no es configurable, por lo tanto no puede ser eliminada
console.log('y')
delete y       // retorna false

// delete no afecta a ciertas propiedades predefinidas
console.log('delete Math.PI')
delete Math.PI // retorna false

// las propiedades definidas por el usuario pueden eliminarse
console.log('delete myobj.h')
delete myobj.h // retorna true

// myobj es una propiedad del objeto global, no una variable,
// por lo tanto puede eliminarse
console.log('delete myobj')
console.log(delete myobj)   // retorna true

//1.- con variables locales
function f() {
  var z = 44

  // delete no afecta a nombres de variables locales
  console.log('delete variable local z')
  console.log(delete z)     // retorna false
}

f()