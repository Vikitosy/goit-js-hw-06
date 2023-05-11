

const rangeInput = document.querySelector('input[type="range"]');
const output = document.querySelector("#text");
output.style.fontSize = `${(Number(rangeInput.min) + Number(rangeInput.max))/2}px`;
rangeInput.addEventListener("input", (event) => {
    output.style.fontSize = `${event.target.value}px`;
});