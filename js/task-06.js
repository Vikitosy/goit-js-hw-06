

const inputToValidateEl = document.querySelector('#validation-input');

inputToValidateEl.addEventListener("blur", (event) => {
  const isValid = event.currentTarget.value.length === Number(inputToValidateEl.dataset.length);
  inputToValidateEl.classList.remove("invalid", "valid");

  if (isValid) inputToValidateEl.classList.add("valid");
  else inputToValidateEl.classList.add("invalid");
});
