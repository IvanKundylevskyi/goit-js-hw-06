const categoryItems = document.querySelectorAll('.item');
console.log(`Number of categories: ${categoryItems.length}`);

categoryItems.forEach(category => {
  const categoryTitle = category.querySelector('h2').textContent;
  const categoryItemsList = category.querySelectorAll('li');
  const categoryItemsCount = categoryItemsList.length;
  console.log(`Category: ${categoryTitle}`);
  console.log(`Elements: ${categoryItemsCount}`);
});