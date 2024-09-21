const getExpenses = require('./getExpenses');
test('get the total production/shipping expenses', () => {
  expect(getExpenses(20, 12)).toBe(32);
});
