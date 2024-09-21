const getPricePlusSalesTax = require('./salesTax');
test('gets the price plus sales tax', () => {
  expect(getPricePlusSalesTax(30, 80)).toBeCloseTo(117.7);
});
