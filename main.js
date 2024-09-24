const labor = document.getElementById('labor');
const expenses = document.getElementById('expenses');
const preTax = document.getElementById('pre-tax');
const postTax = document.getElementById('post-tax');
const totalPrice = document.getElementById('total-price');
// All US sales tax rates per state
const taxRates = {
  AL: 0.04,
  AK: 0.00,
  AZ: 0.056,
  AR: 0.065,
  CA: 0.0725,
  CO: 0.029,
  CT: 0.0635,
  DE: 0.0,
  FL: 0.06,
  GA: 0.04,
  HI: 0.04,
  ID: 0.06,
  IL: 0.0625,
  IN: 0.07,
  IA: 0.06,
  KS: 0.065,
  KY: 0.06,
  LA: 0.045,
  ME: 0.055,
  MD: 0.06,
  MA: 0.0625,
  MI: 0.06,
  MN: 0.06875,
  MS: 0.07,
  MO: 0.04225,
  MT: 0.0,
  NE: 0.055,
  NV: 0.0685,
  NH: 0.0,
  NJ: 0.06625,
  NM: 0.04875,
  NY: 0.04,
  NC: 0.0475,
  ND: 0.05,
  OH: 0.0575,
  OK: 0.045,
  OR: 0.0,
  PA: 0.06,
  RI: 0.07,
  SC: 0.06,
  SD: 0.042,
  TN: 0.07,
  TX: 0.06250,
  UT: 0.0485,
  VT: 0.06,
  VA: 0.043,
  WA: 0.065,
  WV: 0.06,
  WI: 0.05,
  WY: 0.04,
};
function showTaxRate() {
  const state = document.getElementById("states").value;
  const rate = taxRates[state];
  document.getElementById("taxRate").innerText = `Sales Tax Rate: ${rate}%`;
  return Number(rate);
}

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

class GetPrice {
  constructor(laborHoursInput, hourlyRateInput, materialsCostInput, shippingCostInput, totalLaborRate, totalExpenses, salesTaxInput, totalPricePreSalesTax, rate, totalPriceWithSalesTaxAddedOn) {
    this.laborHoursInput = getLaborHoursInput();
    this.hourlyRateInput = getHourlyRateInput();
    this.materialsCostInput = getMaterialsCostInput();
    this.shippingCostInput = getShippingCostInput();
    this.totalLaborRate = this.getTotalLaborRate();
    this.totalExpenses = this.getTotalExpenses();
    this.totalPricePreSalesTax = this.getPreSalesTaxPrice();
    this.rate = this.getTaxRate();
    this.totalPriceWithSalesTaxAddedOn = this.applySalesTax();
  }

  getTotalLaborRate() {
    const totalLaborRate = this.laborHoursInput * this.hourlyRateInput;
    labor.innerHTML += `<p>Total labor rate: ${this.laborHoursInput} hours at $${this.hourlyRateInput}/hour = $${totalLaborRate}.</p>`
    return Number(totalLaborRate);
  }

  getTotalExpenses() {
    const totalExpenses = this.materialsCostInput + this.shippingCostInput;
    expenses.innerHTML += `<p>Total expenses: $${this.materialsCostInput} in materials + $${this.shippingCostInput} in shipping = $${totalExpenses}.</p>`
    return Number(totalExpenses);
  }

  getPreSalesTaxPrice() {
    const totalPricePreSalesTax = this.totalLaborRate + this.totalExpenses;
    preTax.innerHTML += `<p>Total pre sales tax price: $${totalPricePreSalesTax}</p>`;
    return Number(totalPricePreSalesTax);
  }

  getTaxRate() {
    const state = document.getElementById("states").value;
    const rate = taxRates[state];
    return Number(rate);
  }

  applySalesTax() {
    const totalPriceWithSalesTaxAddedOn = ((this.totalPricePreSalesTax * this.rate) + this.totalPricePreSalesTax);
    postTax.innerHTML += `<p>Total price, adding sales tax on : $${totalPriceWithSalesTaxAddedOn}</p>`
    console.log(totalPriceWithSalesTaxAddedOn)
    return Number(totalPriceWithSalesTaxAddedOn);
  }
}


const addMaterialsBtn = document.getElementById('add-materials-btn');
const materialsName = document.getElementById('materials-name');
const materialsNameLabel = document.getElementById('materials-name-label');
const materialsPrice = document.getElementById('materials-price');
const materialsPriceLabel = document.getElementById('materials-price-label');
const submitMaterialsBtn = document.getElementById('submit-materials-btn');

const currentPrice = document.getElementById('current-price');
submitMaterialsBtn.addEventListener('click', function (event) {
  event.preventDefault();
})

addMaterialsBtn.addEventListener('click', function (event) {
  event.preventDefault();
  materialsName.hidden = false;
  materialsNameLabel.hidden = false;
  materialsPrice.hidden = false;
  materialsPriceLabel.hidden = false;
  submitMaterialsBtn.hidden = false;
});

document.getElementById('submit-btn').addEventListener("click", function (event) {
  event.preventDefault();
  const newRate = new GetPrice();
  totalPrice.innerHTML += `<p>To earn a profit of 
  $${newRate.totalLaborRate} for this product, you will 
  need to charge $${newRate.totalPriceWithSalesTaxAddedOn} 
  total to account for shipping, materials, and sales taxes.</p>`;
});
