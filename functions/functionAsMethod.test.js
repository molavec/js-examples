/**
 * Función como método de un objeto
 */

import { expect, test } from "vitest"

const player = {
  name: 'John',
  sayHi: function() {
     return `Hi ${this.name}!`
  },
  sayHi2: () => {
    return `Hi ${this.name}!`
  }
}

test('Prueba el this en function method', ()=>{
  expect(player.sayHi()).toBe('Hi John!')
})

test('Prueba el this arrow function method', ()=>{
  expect(player.sayHi2()).toBe('Hi undefined!')
})
