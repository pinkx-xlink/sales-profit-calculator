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
}

document.getElementById('submit-btn').addEventListener("click", function (event) {
    event.preventDefault();
    const newRate = new GetPrice();
    newRate.getTotalLaborRate();
});
