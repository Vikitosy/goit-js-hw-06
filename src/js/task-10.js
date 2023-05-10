// Напиши скрипт створення і очищення колекції елементів.
//  Користувач вводить кількість елементів в input і натискає
//  кнопку Створити, після чого рендериться колекція.
//   Натисненням на кнопку Очистити, колекція елементів очищається.

// <div id="controls">
//   <input type="number" min="1" max="100" step="1" />
//   <button type="button" data-create>Create</button>
//   <button type="button" data-destroy>Destroy</button>
// </div>

// <div id="boxes"></div>

// Створи функцію createBoxes(amount), яка приймає один
//  параметр - число. Функція створює стільки <div>,
//  скільки вказано в amount і додає їх у div#boxes.

// Розміри найпершого <div> - 30px на 30px.
// Кожен елемент після першого повинен бути ширшим і
// вищим від попереднього на 10px.
// Всі елементи повинні мати випадковий колір фону у
// форматі HEX. Використовуй готову функцію getRandomHexColor
// для отримання кольору.

// Створи функцію destroyBoxes(), яка очищає вміст div#boxes,
//  у такий спосіб видаляючи всі створені елементи.

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

  let pixels = 0;
  for (let i = 0; i < amount; i += 1) {
    const newColor = getRandomHexColor();
    const boxEl = document.createElement("div");
    pixels = 30 + i * 10;
    boxEl.style.width = `${pixels}px`;
    boxEl.style.height = `${pixels}px`;
    boxEl.style.backgroundColor = newColor;
   
    boxes.push(boxEl);
  }
  
  return bildBoxEl.append(...boxes);
}

createBoxEl.addEventListener("click", (event) => {
  const amount = numberOfBoxEL.value;
  createBoxes(amount);
});

destroyBoxEl.addEventListener("click", (event) => {
  bildBoxEl.innerHTML = "";
});
