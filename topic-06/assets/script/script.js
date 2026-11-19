const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext('2d');


const width = canvas.width;
const height = canvas.height;

let startX = -100;
let speed = 1;

function draw(){

    ctx.clearRect(0, 0, width, height);

    ctx.beginPath();
    ctx.fillStyle = "green";
    ctx.strokeStyle = "#ccc";
    ctx.lineWidth = 10;
    ctx.rect(10, 10, 150, 130);
    ctx.fill();
    ctx.stroke();

    ctx.save();
    ctx.translate(20,10);
    ctx.fillStyle = "black";
    ctx.font = "40px Arial";
    ctx.fillText("Ciao", 20, 60);
    ctx.restore();

    ctx.beginPath();
    ctx.fillStyle = "orange";
    ctx.arc(startX, height / 3 * 2, 50, 0, Math.PI * 2); // x, y, radius, startAngle (radians), endAngle (radians)
    ctx.fill();

    startX = startX + speed;

    if (startX == (canvas.width +50) ){
        startX = -100;
    }

    requestAnimationFrame(draw);
}
draw();
