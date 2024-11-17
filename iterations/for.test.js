/**
 *
 * Description:
 * Ejemplos de todas las variantes de for
 * 
 * for of: utilizado para iterar sobre iterables como arreglos
 * for in: utilizado para iterar sobre las propiedades de un objecto 
 */

import { expect, test } from "vitest"

let meses = ["enero", "febrero", "marzo", "abril"];
const person = {name: 'John', age: 31};


test('for con un contador i', ()=>{
  // itera sobre el iterable meses
  for (let i = 0; i < meses.length; i++) {
    if(i === 1) expect(meses[i]).toBe('febrero')
  } 
})

test('for of value', ()=>{
  // itera sobre el iterable meses
  for (const value of meses) {
    expect(value).toBe('enero')
    break
  } 
})

// for of
test('for of value e index', ()=>{
  // itera sobre el iterable meses
  for (const { value, index } of meses) {
    if(index === 1) expect(value).toBe('febrero')
  } 
})

test('for of value', ()=>{
  // itera sobre el objeto person
  for (const value of meses) {
    expect(value).toBe('enero')
    break
  } 
})


// for in 
test('for in key, value', ()=>{
  // itera sobre el objeto person
  for (const [ key, value ] in person) {
    if(key === 'age') expect(value).toBe(31)
  } 
})

test('for in key', ()=>{
  // itera sobre el objeto person
  for (const key in person) {
    expect(person[key]).toBe('John')
    break
  } 
})
