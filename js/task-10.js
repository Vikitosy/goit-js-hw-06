function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controlsEl = document.querySelector("#controls");
const numberOfBoxEL = controlsEl.querySelector("input");
const createBoxEl = controlsEl.querySelector("button[data-create]");
const destroyBoxEl = controlsEl.querySelector("button[data-destroy]");
const bildBoxEl = document.querySelector("#boxes");

function createBoxes(amount) {
  const boxes = [];

  for (let i = 0; i < amount; i += 1) {
    const newColor = getRandomHexColor();
    const boxEl = document.createElement("div");
    const pixels = 30 + i * 10;

    boxEl.style.width = `${pixels}px`;
    boxEl.style.height = `${pixels}px`;
    boxEl.style.backgroundColor = newColor;

    boxes.push(boxEl);
  }

  return bildBoxEl.append(...boxes);
}

createBoxEl.addEventListener("click", () => {
  createBoxes(numberOfBoxEL.value);
});

destroyBoxEl.addEventListener("click", () => {
  bildBoxEl.innerHTML = "";
});
