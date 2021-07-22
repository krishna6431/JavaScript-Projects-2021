// < !--this project is created by krishna6431-- >

function computeLoan() {

    var amount = document.getElementById('amount').value;
    var interestRate = document.getElementById('interestRate').value;
    var months = document.getElementById('months').value;
    var interest = (amount * (interestRate * 0.01)) / months;
    var payment = ((amount / months) + interest).toFixed(2);
    // payment = payment.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    local_payment = parseInt(payment).toLocaleString('en-IN');
    // \B is used to look into word boudry
    // ?= tells it to find what the group is looking for 
    document.getElementById('payment').innerHTML = "Monthly Payment = ₹" + local_payment;
}