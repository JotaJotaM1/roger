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


/* Validate password */

document.addEventListener("DOMContentLoaded", function () {
  let currentSlide = 0;
  const slides = document.querySelectorAll(".carousel-slide");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

  // Función para mostrar una imagen específica
  function showSlide(index) {
    slides.forEach((slide, i) => {
      if (i === index) {
        slide.style.display = "block";
      } else {
        slide.style.display = "none";
      }
    });
  }

  // Muestra la primera imagen al cargar la página
  showSlide(currentSlide);

  // Función para mostrar la siguiente imagen
  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }

  // Función para mostrar la imagen anterior
  function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
  }

  // Agrega eventos a los botones de navegación
  if (nextBtn) {
    nextBtn.addEventListener("click", function() {
      nextSlide();
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener("click", function() {
      prevSlide();
    });
  }
});




