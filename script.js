/* Responsive header with navigation menu */

const nav = document.querySelector("#nav");
const open = document.querySelector("#open");
const close = document.querySelector("#close");

open.addEventListener("click", () => {
  nav.classList.add("visible");
});

close.addEventListener("click", () => {
  nav.classList.remove("visible");
});

/* Validate password */

const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirmPassword");
const confirmError = document.getElementById("confirmError");

function validatePassword() {
  const password = passwordInput.value;
  const confirmPassword = confirmPasswordInput.value;

  if (password === "" || confirmPassword === "") {
    confirmError.textContent = "";
  } else if (confirmPassword !== password) {
    confirmError.textContent = "Passwords do not match.";
    confirmError.style.color = "red";
  } else {
    confirmError.textContent = "Passwords match.";
    confirmError.style.color = "green";
  }
}

function validateForm() {
  validatePassword();
  return confirmError.style.color === "green";
}
