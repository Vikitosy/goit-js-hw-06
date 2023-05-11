
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyEl = document.querySelector("body");
const nameColorEl = document.querySelector(".color");
const buttonChangeColorEL = document.querySelector(".change-color");

buttonChangeColorEL.addEventListener("click", () => {
  const newColor = getRandomHexColor();
  bodyEl.style.backgroundColor = newColor;
  nameColorEl.textContent = newColor;
});
