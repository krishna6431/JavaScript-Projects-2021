// BMI = KG / (H / 100 * H / 100);

document.getElementById("submit").addEventListener("click", bmiCalculator);

function bmiCalculator() {

    var cm = parseInt(document.getElementById("cm").value);
    var kg = parseInt(document.getElementById("kg").value);

    var bmi;
    var newCm = parseFloat(cm / 100);

    bmi = kg / (newCm * newCm);
    bmi = bmi.toFixed(1);
    console.log(bmi);
    var check;
    if (bmi < 18.6) {
        check = "UnderWeight";
    }
    else if (bmi >= 18.6 && bmi <= 24.9) {
        check = "Normal";
    }
    else {
        check = "OverWeight";
    }
    document.getElementById("result").innerHTML = bmi.toString() + " " + check;
}
