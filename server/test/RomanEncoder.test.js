const RomanEncoder = require('../services/RomanEncoder');

test('RomanEncoder test', () => {
  expect(RomanEncoder(1)).toBe("I");
});