const minus = require('../src/minus');

describe('minus', () => {
  test('subtracts 3 - 2 to equal 1', () => {
    expect(minus(3, 2)).toBe(1);
  });
});
