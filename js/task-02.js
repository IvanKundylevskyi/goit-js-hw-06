const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsList = document.querySelector('#ingredients');
const ingredientItems = ingredients.map((ingredient) => {
  const liElem = document.createElement('li');
  liElem.textContent = ingredient;
  liElem.classList.add('item');
  return liElem;
});

ingredientsList.append(...ingredientItems);