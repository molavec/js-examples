const { paramsToString } = require('./example2');

beforeAll(() => {
  process.argv.push('Hello', 'World!');
});

test('Obtien valores desde argumentos', () => {
  expect(paramsToString(process.argv)).toMatch("Hello World!");
});