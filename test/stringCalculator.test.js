const { add } = require('../src/stringCalculator');

test('empty string returns 0', () => {
  expect(add("")).toBe(0);
});