// click box
// --------------------

const clickBox = document.getElementById("click-box");
const clickContainer = document.getElementById("click-container");

const MAX_BOXES = 12;
let boxes = 0;

clickBox.addEventListener("click", () => {

    const newDiv = document.createElement("div");
    newDiv.style.width = "50px";
    newDiv.style.height = "50px";
    newDiv.style.backgroundColor = "lightgreen";

    clickContainer.appendChild(newDiv);

    boxes += 1;

    if (boxes == MAX_BOXES){
        clickContainer.replaceChildren();
        boxes = 0;
    }
})

// hover box
// --------------------

const hoverBox = document.getElementById("hover-box");
const hoverLabel = document.getElementById("hover-label");

const DEFAULT_LABEL_SIZE = 16; 
const MAX_LABEL_SIZE = 80; 
let labelSize = 16;

hoverBox.addEventListener("mouseenter", () => {
    hoverBox.style.backgroundColor = "red";

    labelSize += 4;
    if (labelSize > MAX_LABEL_SIZE){
        labelSize = DEFAULT_LABEL_SIZE;
    }

    hoverLabel.style.fontSize = labelSize + "px";

})

hoverBox.addEventListener("mouseleave", () => {
    hoverBox.style.backgroundColor = "lightgreen";
})

// type box
// --------------------

const textBox = document.getElementById("text-box");
const textInput = document.getElementById("text-input");
const textOutput = document.getElementById("text-output");

const keyword = "pizza";

textInput.addEventListener("input", () => {
    let userText = textInput.value;
    textOutput.textContent = userText;

    if (userText == keyword){
        textBox.style.backgroundColor = "red";
    }
    else {
        textBox.style.backgroundColor = "lightyellow";
    }
})

// change box
// --------------------

const userInput = document.getElementById("user-input");
const userBrightness = document.getElementById("user-brightness");

const box = document.getElementById("change-box");

let hue = userInput.value;
let brightness = userBrightness.value;
let color = "hsl(" + hue + ", 100%, " + brightness + "%)";
box.style.backgroundColor = color;


userInput.addEventListener("input", () => {
    let hue = userInput.value;
    let brightness = userBrightness.value;

    let color = "hsl(" + hue + ", 100%, " + brightness + "%)";
    box.style.backgroundColor = color;
})

userBrightness.addEventListener("input", () => {
    let hue = userInput.value;
    let brightness = userBrightness.value;

    let color = "hsl(" + hue + ", 100%, " + brightness + "%)";
    box.style.backgroundColor = color;    
})
