const labor = document.getElementById('labor');
function getLaborHoursInput() {
    const laborHoursInput = document.getElementById('labor-hours').value;
    return laborHoursInput;
}
function getHourlyRateInput() {
    const hourlyRateInput = document.getElementById('labor-hourly-rate').value;
    return hourlyRateInput;
}
class GetPrice {
    constructor(laborHoursInput, hourlyRateInput) {
        this.laborHoursInput = getLaborHoursInput();
        this.hourlyRateInput = getHourlyRateInput();
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
