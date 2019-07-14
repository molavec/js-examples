 /**
 * example05: Operador spread
 *
 * Description:
 * Permite enviar los objetos de un arreglo como su fueran elementos
 * independientes.
 * En el caso de funciones, sirve para entregar valores de un arreglo
 * como parámetros independientes.
 *
 * How execute:
 * $ yarn function:example05
 */

console.log('--> Ejemplo 5:')
 let numeros = [1, 2, 3]

 /**
  * En este caso se entrega a la función todo el arreglo y como el
  * parámetro de la función. El operador rest almacena todo del
  * arreglo como el elemento 0 del parémetro 'valores'.
  * Luego, se suma todo el objeto arreglo a 0 por lo que javascript
  * lo considera lo considera como una concatenación y tiene como
  * resultado "01,2,3"
  */
 console.log(numeros)
 console.log('sumar sin spread: ' + sumar(numeros))

 /**
  * En este caso, se separan los valores del arreglo antes de
  * pasarlos a la función sumar, lo que permite a la función obtener
  * los valores como si fuesen valores separados.
  */
 console.log(...numeros)
 console.log('sumar con spread: ' + sumar(...numeros))


 
 