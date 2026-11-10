const primeFunc = require('../funcoes/numeroprimo');

test('primeFunc 10 = false', () => {
  expect(primeFunc(10)).toBe(false);
});

test('primeFunc 3 = true', () => {
  expect(primeFunc(3)).toBe(true);
});
