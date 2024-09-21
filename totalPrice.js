const laborRate = require('./laborRate');
const getExpenses = require('./getExpenses');
const salesTax = require('./salesTax');

const laborRateInput = document.getElementById('labor-hours');

const submitBtn = document.getElementById('submit');
submitBtn.addEventListener('click', function() {
    console.log(laborRateInput);
})

// function getTotalExpenses() {}