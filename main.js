const labor = document.getElementById('labor');
function getLaborHoursInput() {
  const laborHoursInput = document.getElementById('labor-hours').value;
  return Number(laborHoursInput);
}
function getHourlyRateInput() {
  const hourlyRateInput = document.getElementById('labor-hourly-rate').value;
  return Number(hourlyRateInput);
}
function getMaterialsCostInput() {
  const materialsCostInput = document.getElementById('materials-cost').value;
  return Number(materialsCostInput);
}
function getShippingCostInput() {
  const shippingCostInput = document.getElementById('shipping-cost').value;
  return Number(shippingCostInput);
}
function getSalesTaxInput() {
  const salesTaxInput = document.getElementById('sales-tax').value;
  return Number(salesTaxInput);
}

class GetPrice {
  constructor(laborHoursInput, hourlyRateInput, materialsCostInput, shippingCostInput, totalLaborRate, totalExpenses, salesTaxInput) {
    this.laborHoursInput = getLaborHoursInput();
    this.hourlyRateInput = getHourlyRateInput();
    this.materialsCostInput = getMaterialsCostInput();
    this.shippingCostInput = getShippingCostInput();
    this.salesTaxInput = getSalesTaxInput();
    this.totalLaborRate = this.getTotalLaborRate();
    this.totalExpenses = this.getTotalExpenses();
  }
  getTotalLaborRate() {
    const totalLaborRate = this.laborHoursInput * this.hourlyRateInput;
    labor.innerHTML += `<p>Total labor rate: ${this.laborHoursInput} hours at $${this.hourlyRateInput}/hour = $${totalLaborRate}.</p>`
    return Number(totalLaborRate);
  }
  getTotalExpenses() {
    const totalExpenses = this.materialsCostInput + this.shippingCostInput;
    labor.innerHTML += `<p>Total expenses: $${this.materialsCostInput} in materials + $${this.shippingCostInput} in shipping = $${totalExpenses}.</p>`
    return Number(totalExpenses);
  }
  getPreSalesTaxPrice() {
    const totalPricePreSalesTax = this.totalLaborRate + this.totalExpenses;
    labor.innerHTML += `<p>Total pre sales tax price: $${totalPricePreSalesTax}</p>`;
    return Number(totalPricePreSalesTax);
  }
  applySalesTax() {
    const totalPriceWithSalesTaxAddedOn = ((this.totalPricePreSalesTax) * this.salesTaxInput) + this.totalPricePreSalesTax;
    labor.innerHTML += `<p>Total price, adding sales tax on : $${totalPriceWithSalesTaxAddedOn}</p>`
    return Number(totalPriceWithSalesTaxAddedOn);
  }
}

document.getElementById('submit-btn').addEventListener("click", function (event) {
  event.preventDefault();
  const newRate = new GetPrice();
  // newRate.getTotalLaborRate();
  // newRate.getTotalExpenses();
  newRate.getPreSalesTaxPrice();
  newRate.applySalesTax();
});
