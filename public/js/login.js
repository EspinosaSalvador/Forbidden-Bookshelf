//We are using the forms and buttons specific to the login page to fetch the login via API
//The below code is to login an existing user


//We are using the forms and buttons specific to the login page to fetch the login via API
//The below code is to login an existing user

const loginFormHandler = async (event) => {
  event.preventDefault();

  const email = document.querySelector("#signin-email-address").value.trim();
  const password = document.querySelector("#signin-password").value.trim();

  if (email && password) {
    const response = await fetch("/api/users/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/");
      alert("Login successful!");
    } else {
      alert("Failed to login");
    }
  } else {
    alert("Failed to login");
  }
};

const signupFormHandler = async (event) => {
  event.preventDefault();

  const username = document.querySelector("#username-signup").value.trim();
  const email = document.querySelector("#email-signup").value.trim();
  const password = document.querySelector("#password-signup").value.trim();

  if (username && email && password) {
    const response = await fetch("/api/users", {
      method: "POST",
      body: JSON.stringify({ username, email, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/");
      alert("Signed up successfully!");
    } else {
      alert("Failed to sign up");
    }
  }
};

document
  .querySelector(".form__login")
  .addEventListener("submit", loginFormHandler);

document
  .querySelector(".form__signup")
  .addEventListener("submit", signupFormHandler);

document.getElementById("btn__sign-in").addEventListener("click", logIn);
document.getElementById("btn__sign-up").addEventListener("click", register);
window.addEventListener("resize", anchoPage);

//Variables
var formulario_login = document.querySelector(".form__login");
var formulario_register = document.querySelector(".form__signup");
var contenedor_login_register = document.querySelector(
  ".container__login-signup"
);
var caja_trasera_login = document.querySelector(".box__back-login");
var caja_trasera_register = document.querySelector(".box__back-register");

//FUNCTIONS

function anchoPage() {
  if (window.innerWidth > 850) {
    caja_trasera_register.style.display = "block";
    caja_trasera_login.style.display = "block";
  } else {
    caja_trasera_register.style.display = "block";
    caja_trasera_register.style.opacity = "1";
    caja_trasera_login.style.display = "none";
    formulario_login.style.display = "block";
    contenedor_login_register.style.left = "0px";
    formulario_register.style.display = "none";
  }
}

anchoPage();

function logIn() {
  if (window.innerWidth > 850) {
    formulario_login.style.display = "block";
    contenedor_login_register.style.left = "10px";
    formulario_register.style.display = "none";
    caja_trasera_register.style.opacity = "1";
    caja_trasera_login.style.opacity = "0";
  } else {
    formulario_login.style.display = "block";
    contenedor_login_register.style.left = "0px";
    formulario_register.style.display = "none";
    caja_trasera_register.style.display = "block";
    caja_trasera_login.style.display = "none";
  }
}

function register() {
  if (window.innerWidth > 850) {
    formulario_register.style.display = "block";
    contenedor_login_register.style.left = "410px";
    formulario_login.style.display = "none";
    caja_trasera_register.style.opacity = "0";
    caja_trasera_login.style.opacity = "1";
  } else {
    formulario_register.style.display = "block";
    contenedor_login_register.style.left = "0px";
    formulario_login.style.display = "none";
    caja_trasera_register.style.display = "none";
    caja_trasera_login.style.display = "block";
    caja_trasera_login.style.opacity = "1";
  }
}

document
  .querySelector(".form__login")
  .addEventListener("submit", loginFormHandler);

document
  .querySelector(".form__signup")
  .addEventListener("submit", signupFormHandler);
