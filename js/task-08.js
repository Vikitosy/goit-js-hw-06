// Напиши скрипт управління формою логіна.

// <form class="login-form">
//   <label>
//     Email
//     <input type="email" name="email" />
//   </label>
//   <label>
//     Password
//     <input type="password" name="password" />
//   </label>
//   <button type="submit">Login</button>
// </form>

// Обробка відправлення форми form.login-form повинна
//  відбуватися відповідно до події submit.
// Під час відправлення форми сторінка не повинна
//  перезавантажуватися.
//
//  Якщо у формі є незаповнені поля, виводь alert з
// попередженням про те, що всі поля повинні бути заповнені.
// Якщо користувач заповнив усі поля і відправив
// форму, збери значення полів в об'єкт, де ім'я поля
//  буде ім'ям властивості, а значення поля - значенням
//   властивості. Для доступу до елементів форми
//   використовуй властивість elements.

// Виведи об'єкт із введеними даними в консоль і
// очисти значення полів форми методом reset.

const form = document.querySelector(".login-form");
const emailEl = form.querySelector('input[type="email"]');
const passwordEl = form.querySelector('input[type="password"]');

form.addEventListener("submit", hendelFormSubmit);

function hendelFormSubmit(event) {
  event.preventDefault();

  if (emailEl.value.length === 0 || passwordEl.value.length === 0) {
    alert("Bсі поля повинні бути заповнені"); 
    return;
  } 

  const formElements = event.currentTarget.elements;

  const email = formElements.email.value;
  const password = formElements.password.value;

  const formData = {
    email,
    password,
  };

  console.log(formData);

  event.currentTarget.reset();
}
