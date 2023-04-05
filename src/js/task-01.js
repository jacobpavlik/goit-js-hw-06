// One line code for the first part of task#1
// console.log(
//   `Number of categories: ${categories.querySelectorAll("li.item").length}`
// );

const categoriesArray = categories.querySelectorAll("li.item");
const numberOfCategories = categoriesArray.length;
console.log(`Number of categories: ${numberOfCategories}`);

categoriesArray.forEach((el) => {
  const categoryName = el.querySelector("h2").textContent;
  const numberOfElements = el.querySelectorAll("li").length;
  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${numberOfElements}`);
});
