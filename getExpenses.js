function getExpenses(materialsCost, shippingCost) {
  const totalExpenses = materialsCost + shippingCost;
  return totalExpenses;
};
module.exports = getExpenses;
