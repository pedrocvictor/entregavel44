const quicksortFunc = require('../funcoes/quicksort');

test('quicksortFunc 5,4,3,1 = 1,3,4,5', () => {
  expect(quicksortFunc([5, 4, 3, 1])).toEqual([1, 3, 4, 5]);
});

test('quicksortFunc 100,4,3,150 = 3,4,100,150', () => {
  expect(quicksortFunc([100, 4, 3, 150])).toEqual([3, 4, 100, 150]);
});
