document.getElementById('submit-btn').addEventListener("click", function (event) {
    event.preventDefault();
    console.log('blah');
    getLaborHoursInput();
})

console.log('is this thing on')

function getLaborHoursInput() {
    const laborRateInput = document.getElementById('labor-hours').value;
    console.log(laborRateInput);
    return laborRateInput;
}