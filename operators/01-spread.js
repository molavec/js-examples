
// Spread Operator
// Expande iterables en elementos individuales.

export const arraySpread = (numbers) => {
  return [0, ...numbers, 9];
};

export const objectSpread = (object) => {
  return {
    ...object,
    firstname: 'John',
    lastname: 'Doe',
  };
};
