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

test('handles unknown amount of comma separated numbers', () => {
  expect(add("1,2,3,4")).toBe(10);
});

test('handles newlines between  numbers', () => {
  expect(add("1\n2,3")).toBe(6);
});

test('supports custom delimiter', () => {
  expect(add("//;\n1;2")).toBe(3);
});