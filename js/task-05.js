const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

const transferInput = () => {
  if (document.querySelector('#name-input').value !== '') {
    output.innerText = document.querySelector('#name-input').value;
  } else {
    output.innerText = 'Anonymous';
  }
};
input.addEventListener('input', transferInput);

// dlaczego nie działa const, tylko musze pełną ścieżkę podawać ??
// const whyDoesntWork = document.querySelector('#name-input').value;
// const input = document.querySelector('#name-input');
// const output = document.querySelector('#name-output');
// const transferInput = () => {
//     if (whyDoesntWork != 0) {
//         output.innerText = whyDoesntWork;
//     } else {
//         output.innerText = 'Anonymous';
//     }
// };
// input.addEventListener('input', transferInput);
