console.log('is this thing on')

function getLaborHoursInput() {
    const laborHoursInput = document.getElementById('labor-hours').value;
    return laborHoursInput;
}
function getHourlyRateInput() {
    const hourlyRateInput = document.getElementById('labor-hourly-rate').value;
    return hourlyRateInput;
}
class GetLaborRate {
    constructor(laborHoursInput, hourlyRateInput) {
        this.laborHoursInput = getLaborHoursInput();
        this.hourlyRateInput = getHourlyRateInput();
        // this.totalLaborRate = laborHoursInput * hourlyRateInput;
    }
    getTotalLaborRate() {
        const totalLaborRate = this.laborHoursInput * this.hourlyRateInput;
        return totalLaborRate;
    }
}

document.getElementById('submit-btn').addEventListener("click", function (event) {
    event.preventDefault();
    const newRate = new GetLaborRate();
    console.log(newRate.getTotalLaborRate());
});

// console.log(getLaborRate(laborHoursInput, totalLaborRate));
