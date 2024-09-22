const labor = document.getElementById('labor');
const expenses = document.getElementById('expenses');
const preTax = document.getElementById('pre-tax');
const postTax = document.getElementById('post-tax');
const totalPrice = document.getElementById('total-price');

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
  constructor(laborHoursInput, hourlyRateInput, materialsCostInput, shippingCostInput, totalLaborRate, totalExpenses, salesTaxInput, totalPricePreSalesTax, totalPriceWithSalesTaxAddedOn) {
    this.laborHoursInput = getLaborHoursInput();
    this.hourlyRateInput = getHourlyRateInput();
    this.materialsCostInput = getMaterialsCostInput();
    this.shippingCostInput = getShippingCostInput();
    this.salesTaxInput = getSalesTaxInput();
    this.totalLaborRate = this.getTotalLaborRate();
    this.totalExpenses = this.getTotalExpenses();
    this.totalPricePreSalesTax = this.getPreSalesTaxPrice();
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

  applySalesTax() {
    const totalPriceWithSalesTaxAddedOn = ((this.totalPricePreSalesTax * this.salesTaxInput) + this.totalPricePreSalesTax);
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
addMaterialsBtn.addEventListener('click', function (event) {
  event.preventDefault();
  materialsName.hidden = false;
  materialsNameLabel.hidden = false;
  materialsPrice.hidden = false;
  materialsPriceLabel.hidden = false;
});

document.getElementById('submit-btn').addEventListener("click", function (event) {
  event.preventDefault();
  const newRate = new GetPrice();
  totalPrice.innerHTML += `<p>To earn a profit of 
  $${newRate.totalLaborRate} for this product, you will 
  need to charge $${newRate.totalPriceWithSalesTaxAddedOn} 
  total to account for shipping, materials, and sales taxes.</p>`;
});
