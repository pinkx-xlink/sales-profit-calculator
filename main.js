const labor = document.getElementById('labor');
function getLaborHoursInput() {
    const laborHoursInput = document.getElementById('labor-hours').value;
    return laborHoursInput;
}
function getHourlyRateInput() {
    const hourlyRateInput = document.getElementById('labor-hourly-rate').value;
    return hourlyRateInput;
}
function getMaterialsCostInput() {
    const materialsCostInput = document.getElementById('materials-cost').value;
    // const num1 = materialsCostInput.Number();
    return materialsCostInput;
}
function getShippingCostInput() {
    const shippingCostInput = document.getElementById('shipping-cost').value;
    return shippingCostInput;
}
class GetPrice {
    constructor(laborHoursInput, hourlyRateInput, materialsCostInput, shippingCostInput) {
        this.laborHoursInput = getLaborHoursInput();
        this.hourlyRateInput = getHourlyRateInput();
        this.materialsCostInput = getMaterialsCostInput();
        this.shippingCostInput = getShippingCostInput();
    }
    getTotalLaborRate() {
        const totalLaborRate = this.laborHoursInput * this.hourlyRateInput;
        labor.innerHTML += `<p>Total labor rate: ${this.laborHoursInput} hours at $${this.hourlyRateInput}/hour = $${totalLaborRate}.</p>`
        return totalLaborRate;
    }
    getTotalExpenses() {
        //const materialsCost = this.materialsCostInput;
        //const shippingCost = this.shippingCostInput;
        const totalExpenses = this.materialsCost + this.shippingCost;
        labor.innerHTML += `<p>Total expenses: $${this.materialsCostInput} in materials + $${this.shippingCostInput} in shipping = $${totalExpenses}.</p>`
        return totalExpenses;
    }
}

document.getElementById('submit-btn').addEventListener("click", function (event) {
    event.preventDefault();
    const newRate = new GetPrice();
    newRate.getTotalLaborRate();
    newRate.getTotalExpenses();
});
