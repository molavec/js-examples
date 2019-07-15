/**
  * Ejemplo 1:
  *
  * Generadores e Iteradores
  *
**Recomendación:** Revisa este artículo para aprender un poco acerca de esta funcionalidad.
[A Simple Guide to Understanding Javascript (ES6) Generators](https://medium.com/dailyjs/a-simple-guide-to-understanding-javascript-es6-generators-d1c350551950)

  *
  */

 console.log('--> Ejemplo 1: Generadores e Iteradores')
 function * contar() {
    yield 1
    yield 2
    yield 3
    return "No hay más valores"
 }

 // no se puede utilizar directamente pues se obtiene sólo
 // el objeto de la primera itrración
 //console.log(contar().next())
 //console.log(contar().next())



 // Hay que invocarla realizando declaración
 let contador = contar()
 console.log(contador.next())
 console.log(contador.next())
 console.log(contador.next())
 console.log(contador.next())
 console.log(contador.next())

 // como iterar
 contador = contar()
 for (let value of contador) {
   console.log(value)
 }
