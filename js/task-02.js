const ingredientsList = document.querySelector('#ingredients');

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const itemsHTML = ingredients.map(ingredient => `<li class="item">${ingredient}</li>`).join('');

ingredientsList.innerHTML = itemsHTML;
