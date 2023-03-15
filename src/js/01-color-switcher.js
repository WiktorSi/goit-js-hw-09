function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const startButton = document.querySelector('button[data-start]');
const stopButton = document.querySelector('button[data-stop]');
const body = document.querySelector("body");
stopButton.disabled = true;

const changeColor = () => {
    colorId = setInterval(() => {
        body.style.backgroundColor = getRandomHexColor();
    }, 1000);
    startButton.disabled = true;
    stopButton.disabled = false;
};

const stopChange = () => {
    clearInterval(colorId);
    startButton.disabled = false;
    stopButton.disabled = true;
} 

startButton.addEventListener("click", changeColor);
stopButton.addEventListener("click", stopChange);