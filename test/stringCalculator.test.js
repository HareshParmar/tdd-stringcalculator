const { add } = require('../src/stringCalculator');

test('empty string returns 0', () => {
  expect(add("")).toBe(0);
});

test('single number returning itself', () => {
  expect(add("1")).toBe(1);
});

test('two comma separated numbers return their sum', () => {
  expect(add("1,2")).toBe(3);
});