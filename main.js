const submitBtn = document.getElementById('submit-btn');
submitBtn.addEventListener('submit', function (event) {
    console.log('blah');
})

console.log('is this thing on')

function getLaborHoursInput() {
    const laborRateInput = document.getElementById('labor-hours').value;
    return laborRateInput;
}