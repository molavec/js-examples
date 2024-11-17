/**
 * Añade elementos utilizando un spread en un array
 * @constructor
 * @param {array} numbers - array de elementos.
 * @returns {array} array con un 0 al inicio y un 9 al final
 */
const arraySpread = (numbers) => {
  return [0, ...numbers , 9]
}

/**
 * Añade elementos utilizando un spread en un array
 * @constructor
 * @param {object} object - un objeto con propiedades.
 * @returns {array} array con un 0 al inicio y un 9 al final
 */
const objectSpread = (object) => {
  return {
    ...object,
    firstname: 'John',
    lastname: 'Doe',
  }
}


export { arraySpread, objectSpread }