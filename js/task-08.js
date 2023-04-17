const form = document.querySelector('.login-form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;
  if (email.value && password.value) {
    const container = { email: email.value, password: password.value };
    console.log(container);
    form.reset();
  } else {
    alert('Oba pola muszą zostać wypełnione!');
  }
});

// console.log(`email: ${email.value}, password: ${password.value}`);
// //poniżej działa, ale powyżej wg konspektu
// const form = document.querySelector('.login-form');
// // console.log(form.firstElementChild);
// // console.log(form.children);
// const email = document.querySelector('[name="email"]');
// const password = document.querySelector('[name="password"]');
// console.log(email.value, password.value);
// // document.querySelector('.login-form').firstElementChild;
// console.log(document.querySelector('[name="email"]'));
// console.log(document.querySelector('[name="password"]'));

// form.addEventListener('submit', (event) => {
//   event.preventDefault();
//   if (email.value && password.value) {
//     const {
//       elements: { email, password },
//     } = event.currentTarget;
//     console.log(`email: ${email.value}, password: ${password.value}`);
//     form.reset();
//   } else {
//     alert('Oba pola muszą zostać wypełnione!');
//   }
// });
