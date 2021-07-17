// < !--this project is created by krishna6431-- >
// finding canvas element from html 
var canvas = document.getElementById("canvas");
//creating 2d drawwing object for canvas element
var ctx = canvas.getContext("2d");
var radius = canvas.height / 2;
//move canvas to x,y axis 
ctx.translate(radius, radius);
radius = radius * 0.90;
drawClock();

// function olderdrawClock() {
//     // arc(x, y, r, startangle, endangle) - creates an arc / curve.To create a circle with arc(): Set start angle to 0 and end angle to 2 * Math.PI.The x and y parameters define the x - and y - coordinates of the center of the circle.The r parameter defines the radius of the circle
//     ctx.arc(0, 0, radius, 0, 2 * Math.PI);
//     ctx.fillStyle = "White";
//     ctx.fill();
// }

function drawClock() {
    drawFace(ctx, radius);
    drawNumber(ctx, radius);
}

function drawFace(ctx, radius) {
    var grad;
    ctx.beginPath();
    ctx.arc(0, 0, radius, 0, 2 * Math.PI);
    ctx.fillStyle = 'white';
    ctx.fill();
    grad = ctx.createRadialGradient(0, 0, radius * 0.95, 0, 0, radius * 1.05);
    grad.addColorStop(0, '#333');
    grad.addColorStop(0.5, 'white');
    grad.addColorStop(1, '#333');
    ctx.strokeStyle = grad;
    ctx.lineWidth = radius * 0.1;
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(0, 0, radius * 0.1, 0, 2 * Math.PI);
    ctx.fillStyle = '#333';
    ctx.fill();
}

// adding clock numbers to the clock  

function drawNumber(ctx, radius) {
    var ang;
    var num;
    ctx.font = radius * 0.15 + "px arial";
    ctx.textBaseline = "middle";
    ctx.textAlign = "center";
    for (num = 1; num < 13; num++) {

        ang = num * Math.PI / 6;
        ctx.rotate(ang);
        ctx.translate(0, -radius * 0.85);
        ctx.rotate(-ang);
        ctx.fillText(num.toString(), 0, 0);
        ctx.rotate(ang);
        ctx.translate(0, radius * 0.85);
        ctx.rotate(-ang);
    }

}

//Drawing Time and Hands for Clock
function