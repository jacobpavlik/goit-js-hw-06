const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

// to działa i wrzuca za jednym razem tablicę
// const imageArr = [];
// images.forEach((img, i) => {
//   const imageTemplate = `<li class='gallery__item'>
//   <img class='gallery__image'
//   src ="${images[i].url}"
//   alt ="${images[i].alt}"/>
//   </li> `;
//   imageArr.push(imageTemplate);
// });

// const ul = document.body.querySelector('.gallery');
// ul.insertAdjacentHTML('beforeend', imageArr);

// czy może być bez tablicy? Czy taki zapis powoduje,
// że zdjęcia nie wgrywają się do DOMu za jednym razem?
//
images.forEach((img, i) => {
  const imageTemplate = `<li class='gallery__item'>
   <img class='gallery__image'
    src ="${images[i].url}"
    alt ="${images[i].alt}"/>
   </li> `;
  const ul = document.body.querySelector('.gallery');
  ul.insertAdjacentHTML('beforeend', imageTemplate);
});
