function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
// console.log(
//   `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`
// );

const button = document.querySelector('.change-color');
const color = document.querySelector('.color');

button.addEventListener('click', () => {
  color.innerText = getRandomHexColor();
  document.body.style.backgroundColor = color.textContent;
});
