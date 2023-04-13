const slider = document.querySelector('#font-size-control');
const text = document.querySelector('#text');
const changeFontSize = () => {
  const size = slider.value;
  text.style.fontSize = size + 'px';
};
slider.addEventListener('input', changeFontSize);

//próba zastosowania event.currentTarget - też działa, ale jakieś to przekombinowane IMO
// const slider = document.querySelector('#font-size-control');
// console.log(slider);
// console.log(slider.value);
// const text = document.querySelector('#text');
// console.log(text);
// console.log(text.textContent);

// const changeFontSize = (event) => {
//   console.log(event.currentTarget);
//   const size = slider.value;
//   text.style.fontSize = size + 'px';
// };

// slider.addEventListener('input', function (event) {
//   changeFontSize(event);
// });
