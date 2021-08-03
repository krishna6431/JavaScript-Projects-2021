// this project is created by krishna6431

var canvas = document.getElementById("mycanvas");
//create 2d context from canvas
var ctx = canvas.getContext("2d");
var ballRadius = 10;
var x = canvas.width / 2;
var y = canvas.height - 30;
var dx = 2;
var dy = -2;
var paddleHeight = 12;
var paddleWidth = 72;
var paddleX = (canvas.width - paddleWidth) / 2;

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function drawBall() {
    ctx.beginPath(); //begin path from drawing ball
    // arc(x, y, radius, startAngle, endAngle, false / true(direction))
    ctx.arc(x, y, ballRadius, 0, Math.PI * 2, false);
    ctx.fillStyle = "red"; //give color to shape circle
    ctx.fill(); // fill color to shape
    ctx.closePath(); // close of path 
}

function drawPaddle() {
    ctx.beginPath(); //begin path from drawing ball
    ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
    ctx.fillStyle = "blue"; //give color to shape paddle
    ctx.fill(); // fill color to shape
    ctx.closePath(); // close of path 
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); //clear canvas
    drawBall();
    drawPaddle();
    //check for left and right wall collision
    if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
        dx = -dx;
    }
    //check for top and bottom wall collision
    if (y + dy > canvas.height - ballRadius || y + dy < ballRadius) {
        dy = -dy;
    }
    x += dx;
    y += dy;
}

//infinte loop
// setInterval(method name , time in ms)
setInterval(draw, 10);