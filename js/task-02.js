const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

ingredients.forEach((ingredient, i) => {
  const item = document.createElement('li');
  item.innerText = ingredients[i];
  item.classList.add('.item');
  document.querySelector('ul').appendChild(item);
});
