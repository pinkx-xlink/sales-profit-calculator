const laborRate = require('./laborRate');
const getExpenses = require('./getExpenses');
const salesTax = require('./salesTax');

const laborRateInputFeild = document.getElementById('labor-hours');
const laborRateInput = laborRateInputFeild.value;

const submitBtn = document.getElementById('submit');
submitBtn.addEventListener('click', function () {
    console.log(laborRateInput);
})

// function getTotalExpenses() {}