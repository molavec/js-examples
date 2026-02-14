import { expect, test } from "vitest";
import Person from './Person'
import Patient from './Patient'

test('Crea una instancia de la clase Person y verifica método getFullname', () => {
  const person = new Person('John', 'Doe')
  expect(person.getFullname()).toBe('John Doe')
})

test('Crea una instancia de la clase Patient y verifica herencia', () => {
  const patient = new Patient('John', 'Doe', 34, 79, 1.68)
  expect(patient.getFullname()).toBe('John Doe')
})

test('Obtiene el IMC del paciente', () => {
  const patient = new Patient('John', 'Doe', 34, 79, 1.68)
  expect(patient.calculateIMC()).toBe(27.99036281179139)
})

