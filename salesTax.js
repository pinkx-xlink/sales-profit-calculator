const laborRate = require('./laborRate');
const getExpenses = require('./getExpenses');
function getSalesTax(getExpenses, totalLaborRate) {
  const totalPricePlusTax = ((getExpenses + totalLaborRate) * 0.07) + (getExpenses + totalLaborRate);
  return totalPricePlusTax;
}