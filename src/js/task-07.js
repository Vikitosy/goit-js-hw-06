// Напиши скрипт, який реагує на зміну значення 
// input#font-size-control (подія input) і змінює 
// інлайн-стиль span#text, оновлюючи властивість font-size. 
// В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.

// <input id="font-size-control" type="range" min="16" max="96" />
// <br />
// <span id="text">Abracadabra!</span>



const rangeInput = document.querySelector('input[type="range"]');
const output = document.querySelector("#text");
output.style.fontSize = `${(Number(rangeInput.min) + Number(rangeInput.max))/2}px`;
rangeInput.addEventListener("input", (event) => {
output.style.fontSize = `${event.target.value}px`;
});