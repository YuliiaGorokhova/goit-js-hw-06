// Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция.
// При нажатии на кнопку Очистить, коллекция элементов очищается.
// <div id="controls">
//   <input type="number" min="1" max="100" step="1" />
//   <button type="button" data-create>Create</button>
//   <button type="button" data-destroy>Destroy</button>
// </div>
// <div id="boxes"></div>
// Создай функцию createBoxes(amount), которая принимает один параметр - число. Функция создает столько <div>, сколько указано в amount и добавляет их в div#boxes.
//     Размеры самого первого <div> - 30px на 30px.
//     Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
//     Все элементы должены иметь случайный цвет фона в формате HEX. Используй готовую функцию getRandomHexColor для получения цвета.
// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }
// Создай функцию destroyBoxes(), которая очищает содержимое div#boxes, тем самым удаляя все созданные элементы.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputNumber = document.querySelector('input');
const buttonCreate = document.querySelector('button[data-create]');
const buttonDestroy = document.querySelector('button[data-destroy]');
const boxesColor = document.querySelector('#boxes');

buttonCreate.addEventListener('click', () => {
  createBoxes(inputNumber.value);
  });

let stap = 30;
const createBoxes = amount => {
  const elementAdd = [];
  for (let i = 0; i < amount; i++) {
    stap += 10;
    const viewDiv = `<div style='width: ${stap}px; height:${stap}px; background-color: ${getRandomHexColor()}'></div>`;
    elementAdd.push(viewDiv);
  }
  const nextBoxesColor = elementAdd.join('');
  boxesColor.insertAdjacentHTML('beforeend', nextBoxesColor);
};

buttonDestroy.addEventListener('click', () => {
  boxesColor.innerHTML = '';
  inputNumber.value = '';
  });

