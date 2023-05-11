


let counterValue = 0;
const currentValueEl = document.querySelector('#value');
function updateValue() {
  currentValueEl.textContent = `${counterValue}`;
}

updateValue();
const decrementEl = document.querySelector('button[data-action="decrement"]');
decrementEl.addEventListener('click', event => {
    counterValue -= 1;
    updateValue();
})

const incrementEl = document.querySelector('button[data-action="increment"]');
incrementEl.addEventListener("click", event => {
  counterValue += 1;
  updateValue();
});