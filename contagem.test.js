const contagem = require('../funcoes/contagem');

test('contFunc 10 = true', () => {
  expect(contagem([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toBe(10);
});

test('contFunc 3 = false', () => {
  expect(contagem([1, 2, 3])).toBe(3);
});
