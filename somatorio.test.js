const sunFunc = require('../funcoes/somatorio');

test('sunFunc 10+20 = 30', () => {
  expect(sunFunc([10, 20])).toBe(30);
});

test('sunFunc -10+20 = 30', () => {
  expect(sunFunc([-10, 40])).toBe(30);
});
