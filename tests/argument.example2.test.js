const { paramsToString } = require('../argument/example2');

beforeAll(() => {
  process.argv.push('Hello', 'World!');
});

test('argument:example2 - Se obtienen los parametros pasados desde el terminal:', () => {
  expect(paramsToString(process.argv)).toMatch("Hello World!");
});