const categoriesList = document.getElementById('categories');
const categoriesItems = categoriesList.getElementsByClassName('item');

console.log('Number of categories:', categoriesItems.length);

for (let i = 0; i < categoriesItems.length; i++) {
  const item = categoriesItems[i];
  const categoryTitle = item.querySelector('h2').textContent;
  const categoryElements = item.getElementsByTagName('li').length;

  console.log('Category:', categoryTitle);
  console.log('Elements:', categoryElements);
}

