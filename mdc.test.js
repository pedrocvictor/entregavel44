const mdcFunc = require('../funcoes/mdc');

test('mdcFunc 5 10 = 5', () => {
  expect(mdcFunc(5, 10)).toBe(5);
});

test('mdcFunc 1 = 1', () => {
  expect(mdcFunc(1, 1)).toBe(1);
});
