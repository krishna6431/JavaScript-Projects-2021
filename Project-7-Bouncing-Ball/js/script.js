// this project is created by krishna6431

var canvas = document.getElementById("mycanvas");
//create 2d context from canvas
var ctx = canvas.getContext("2d");

var x = canvas.width / 2;
var y = canvas.height - 30;
var dx = 2;
var dy = -2;
//creating ball for game 
function draw() {
    ctx.beginPath(); //begin path from drawing ball
    // arc(x, y, radius, startAngle, endAngle, false / true(direction))
    ctx.arc(x, y, 20, 0, Math.PI * 2, false);
    ctx.fillStyle = "red"; //give color to shape circle
    ctx.fill(); // fill color to shape
    ctx.closePath(); // close of path 
    x += dx;
    y += dy;
}
//infinte loop
// setInterval(method name , time in ms)
setInterval(draw, 10);