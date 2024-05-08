// login password
const loginPasswordInput = document.querySelector("#login-password");
const showLoginPasswordButton = document.querySelector("#show-login-password");

// register password
const registerPasswordInput = document.querySelector("#register-password");
const showRegisterPasswordButton = document.querySelector(
  "#show-register-password"
);

// register repeat password
const registerRePasswordInput = document.querySelector("#register-rePassword");
const showRegisterRePasswordButton = document.querySelector(
  "#show-register-rePassword"
);

// Function to toggle login password visibility
function toggleLoginPasswordVisibility() {
  // Get the current type of the input element
  const currentInputType = loginPasswordInput.type;

  // Check if the current type is "password"
  const isPassword = currentInputType === "password";

  // Toggle the input type between "text" and "password"
  if (isPassword) {
    loginPasswordInput.type = "text";
  } else {
    loginPasswordInput.type = "password";
  }
}

// Add an event listener to the show/hide password button
showLoginPasswordButton.addEventListener(
  "click",
  toggleLoginPasswordVisibility
);

// Function to toggle register password visibility
function toggleRegisterPasswordVisibility() {
  // Get the current type of the input element
  const currentInputType = registerPasswordInput.type;

  // Check if the current type is "password"
  const isPassword = currentInputType === "password";

  // Toggle the input type between "text" and "password"
  if (isPassword) {
    registerPasswordInput.type = "text";
  } else {
    registerPasswordInput.type = "password";
  }
}

// Add an event listener to the show/hide password button
showRegisterPasswordButton.addEventListener(
  "click",
  toggleRegisterPasswordVisibility
);

// Function to toggle register repeat password visibility
function toggleRegisterRePasswordVisibility() {
  // Get the current type of the input element
  const currentInputType = registerRePasswordInput.type;

  // Check if the current type is "password"
  const isPassword = currentInputType === "password";

  // Toggle the input type between "text" and "password"
  if (isPassword) {
    registerRePasswordInput.type = "text";
  } else {
    registerRePasswordInput.type = "password";
  }
}

// Add an event listener to the show/hide password button
showRegisterRePasswordButton.addEventListener(
  "click",
  toggleRegisterRePasswordVisibility
);
