const counterValue = 0;
const valueSpan = document.getElementById('value');
const decrement = document.querySelector('[ data-action="decrement"]');
const increment = document.querySelector('[data-action ="increment"]');
function updateContent(newValue) {
valueSpan.textContent = newValue;
}
decrement.addEvenListener('click',() => {
counterValue -= 1;
updateContent(counterValue)
});

increment.addEvenListener('click',() => {
counterValue += 1;
updateContent(counterValue)
});
updateContent(counterValue);