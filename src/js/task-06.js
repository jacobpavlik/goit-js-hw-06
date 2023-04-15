const textInput = document.querySelector('#validation-input');

const validInputLength =
  document.querySelector('#validation-input').dataset.length;

const lostFocus = () => {
  if (
    // eslint-disable-next-line eqeqeq
    document.querySelector('#validation-input').value.length == validInputLength
  ) {
    textInput.classList.remove('invalid');
    textInput.classList.add('valid');
  } else if (textInput.value === '') {
    textInput.classList.remove('invalid');
    textInput.classList.remove('valid');
  } else {
    textInput.classList.remove('valid');
    textInput.classList.add('invalid');
  }
};
textInput.addEventListener('blur', lostFocus);
