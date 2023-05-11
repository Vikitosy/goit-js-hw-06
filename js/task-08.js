

const form = document.querySelector(".login-form");

form.addEventListener("submit", hendelFormSubmit);

function hendelFormSubmit(event) {
  event.preventDefault();

  const { email, password } = event.currentTarget.elements;

  if (email.value.length === 0 || password.value.length === 0) {
    alert("Bсі поля повинні бути заповнені"); 
    return;
  } 

  console.log({
    email: email.value,
    password: password.value,
  });

  event.currentTarget.reset();
}
