const categoriesAll = document.querySelectorAll('li.item');
console.log(`Number of categories: ${categoriesAll.length}`);

categoriesAll.forEach((item) => {
  console.log(`Category: ${item.querySelector('h2').textContent}`);
  console.log(`Elements: ${item.querySelectorAll('li').length}`);
});
