/**
 * example05: Operador spread (Caso especial)
 *
 * Description:
 * Permite enviar los objetos de un arreglo como su fueran elementos
 * independientes.
 * En el caso de funciones, sirve para entregar valores de un arreglo
 * como parámetros independientes.
 *
 * How execute:
 * $ node function/example05
 * $ yarn function:example05
 */

/**
 * Suma todos los argumentos ingresados como parámetros
 *
 * @param  {...any} valores valor a ser sumados
 */
const sumar = (...valores) => {
  let resultado = 0

  valores.forEach((valor) => {
    //console.log(valor)
    resultado += valor
  })

   //console.log(valores) //<-- Entrega los valores como un arreglo
  return resultado
}

let numeros = [1, 2, 3]

 /**
  * En este caso se entrega a la función todo el arreglo y como el
  * parámetro de la función. El operador rest almacena todo del
  * arreglo como el elemento 0 del parémetro 'valores'.
  * Luego, se suma todo el objeto arreglo a 0 por lo que javascript
  * lo considera lo considera como una concatenación y tiene como
  * resultado "0,1,2,3"
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
