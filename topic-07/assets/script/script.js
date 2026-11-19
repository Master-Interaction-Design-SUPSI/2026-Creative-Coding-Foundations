const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext('2d');

// const width = canvas.width;
// const height = canvas.height;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let mouseX = 0;
let mouseY = 0;

let penSize = 40;
let hue = 0;

function draw(){

    canvas.addEventListener("mousemove", (event) => {
        const rect = canvas.getBoundingClientRect();
        mouseX = event.clientX - rect.left; // mouseX within the whole window - x position of the canvas
        mouseY = event.clientY - rect.top; // mouseY within the whole window - y position of the canvas
        console.log(mouseX, mouseY);

        ctx.beginPath();
        ctx.fillStyle = `hsl(${hue}, 50%, 50%)`;
        ctx.arc(mouseX, mouseY, penSize, 0, Math.PI * 2); // x, y, radius, startAngle (radians), endAngle (radians)
        ctx.fill();
    });

    hue += 1;

    if (hue == 360) {
        hue = 0;
    }

    requestAnimationFrame(draw);
}
draw();
