const getExpenses = require('./getExpenses');
test('get the total production and shipping expenses', () => {
  expect(getExpenses(20, 12)).toBe(32);
});
