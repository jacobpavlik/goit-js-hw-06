let counterValue = 0;

const minusOne = document.querySelector('button[data-action="decrement"]');
const plusOne = document.querySelector('button[data-action="increment"]');
const value = document.querySelector('#value');

const addPoint = () => {
  counterValue += 1;
  value.innerText = counterValue;
};

const subtractPoint = () => {
  counterValue -= 1;
  value.innerText = counterValue;
};
minusOne.addEventListener('click', subtractPoint);
plusOne.addEventListener('click', addPoint);
