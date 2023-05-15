const rangeInput = document.querySelector('#font-size-control');
const textToChange = document.querySelector('#text');

rangeInput.addEventListener('input', onRangeChange);

function onRangeChange(event) {
  const fontSize = event.currentTarget.value + 'px';
  textToChange.style.fontSize = fontSize;
}


const initialFontSize = rangeInput.value + 'px';
textToChange.style.fontSize = initialFontSize;
