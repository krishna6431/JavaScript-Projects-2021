// this project is created by krishna6431

var canvas = document.getElementById("mycanvas");
//create 2d context from canvas
var ctx = canvas.getContext("2d");

//creating ball for game 
function draw() {
    ctx.beginPath(); //begin path from drawing ball
    // arc(x, y, radius, startAngle, endAngle, false / true(direction))
    ctx.arc(220, 140, 20, 0, Math.PI * 2, false);
    ctx.fillStyle = "red"; //give color to shape circle
    ctx.fill(); // fill color to shape
    ctx.closePath(); // close of path 
}
//infinte loop
// setInterval(method name , time in ms)
setInterval(draw, 10);