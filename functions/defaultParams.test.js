/**
 * example07: Parámetros por defecto
 *
 * Description:
 * Se puede definir parámetros por defecto.
 */

import { expect, test } from "vitest"


/**
* Retorna un saludo
*
* @param {*} name El nombre pasasdo como parametro o 'Annonymus' en caso de ser null.
* @returns String con el saludo.
*/
const greeting = (name='Annonymus') => (`Hi ${name}!`)

test('Obtiene el valor por defecto', ()=>{
  expect(greeting()).toBe('Hi Annonymus!')
})

test('Obtiene el valor por pasado al parámetro', ()=>{
  expect(greeting('John')).toBe('Hi John!')
})


