// < !--this project is created by krishna6431-- >
// finding canvas element from html 
var canvas = document.getElementById("canvas");
//creating 2d drawwing object for canvas element
var ctx = canvas.getContext("2d");
var radius = canvas.height / 2;
//move canvas to x,y axis 
ctx.translate(750, 350);
radius = radius * 0.90;
drawClock();

function drawClock() {
    // arc(x, y, r, startangle, endangle) - creates an arc / curve.To create a circle with arc(): Set start angle to 0 and end angle to 2 * Math.PI.The x and y parameters define the x - and y - coordinates of the center of the circle.The r parameter defines the radius of the circle
    ctx.arc(0, 0, radius, 0, 2 * Math.PI);
    ctx.fillStyle = "White";
    ctx.fill();
}



