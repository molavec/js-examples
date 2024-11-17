// More info:
// https://dev.to/alextomas80/el-operador-spread-en-javascript-12hc

import { expect, test } from "vitest";

const pointArray =  [10, 20, 15]

test('Almacena en variables el contenido de un array utilizando destructuring', () => {
  const [ x, y, z ] = pointArray
  expect(x).toBe(10)
  expect(y).toBe(20)
  expect(z).toBe(15)
})

test('Almacena en x el primer ítem', () => {
  const [ x, ] = pointArray
  expect(x).toBe(10)
})

test('Almacena en y el segundo ítem', () => {
  const [ , y ] = pointArray;
  expect(y).toBe(20)
})

test('Almacena en z el último ítem', () => {
  const [ , , z ] = pointArray;
  expect(z).toBe(15)
})

test('Destructuring utilizando operador spread', () => {
  const [ x, ...rest ] = pointArray;
  expect(rest).toStrictEqual([20, 15])
})


const pointObject =  {
  x: 10,
  y: 20,
  z: 15,
}

test('Almacena en variables las propiedades de un objeto', () => {
  const { x, y, z } = pointObject
  expect(x).toBe(10)
  expect(y).toBe(20)
  expect(z).toBe(15)
})

test('Almacena propiedad x en la variable x usando operador spread', () => {
  const { x, ...rest } = pointObject
  expect(x).toBe(10)
})

test('Almacena propiedad y en la variable pointY usando operador spread', () => {
  const { y: pointY, ...rest } = pointObject
  expect(pointY).toBe(20)
})