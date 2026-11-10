const fibonacciFunc = require('../funcoes/fibonacci');

test('fibonacciFunc 5 = 0, 1, 1, 2, 3', () => {
  expect(fibonacciFunc(5)).toEqual([0, 1, 1, 2, 3, 5]);
});

test('fibonacciFunc 1 = 0', () => {
  expect(fibonacciFunc(1)).toEqual([0, 1]);
});
