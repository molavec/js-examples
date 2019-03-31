/**
  * Ejemplo 1:
  *
  * Generadores e Iteradores
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
