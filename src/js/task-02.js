const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


//     Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
//     Добавит название ингредиента как его текстовое содержимое.
//     Добавит элементу класс item.
//     После чего вставит все <li> за одну операцию в список ul#ingredients.


const ingredientsAll = document.querySelector("#ingredients");

const ingredientsNameArray = [];

ingredients.forEach(ingredient => {
	const ingredientsName = document.createElement("li");
	ingredientsName.className = "item";
	ingredientsName.textContent = ingredient;
	ingredientsNameArray.push(ingredientsName);
});

ingredientsAll.append(...ingredientsNameArray);

