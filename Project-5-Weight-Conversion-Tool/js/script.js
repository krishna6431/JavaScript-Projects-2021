// < !-- /* // < !--this project is created by krishna6431 */ -->
function weightConverter(valNum) {
    var valNum = valNum * 2.2046;
    var n = valNum.toFixed(0);
    document.getElementById("outputPounds").innerHTML = n;
}

function weightConverter2(valNum) {
    var valNum = valNum / 2.2046;
    var n = valNum.toFixed(0);
    document.getElementById("outputKilograms").innerHTML = n;
}