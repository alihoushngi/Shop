// todo login with github and google icon and text

// ! login buttons design
// Google
const loginGoogleWrapper = document.querySelector("#login-with-google");
const loginGoogleText = document.querySelector("#login-with-google-text");
const loginGoogleIcon = document.querySelector("#login-with-google-icon");

// Github
const loginGithubWrapper = document.querySelector("#login-with-github");
const loginGithubText = document.querySelector("#login-with-github-text");
const loginGithubIcon = document.querySelector("#login-with-github-icon");

// Add mouseover event listener for google
loginGoogleWrapper.addEventListener("mouseover", function () {
  // Show the icon and hide the text
  loginGoogleText.classList.add("hidden");
  loginGoogleIcon.style.width = "100px";
  loginGoogleIcon.style.position = "absolute";
});

// Add mouseout event listener for google
loginGoogleWrapper.addEventListener("mouseout", function () {
  // Show the text and hide the icon
  loginGoogleText.classList.remove("hidden");
  loginGoogleIcon.style.width = "30px";
  loginGoogleIcon.style.position = "unset";
});

// Add mouseover event listener for github
loginGithubWrapper.addEventListener("mouseover", function () {
  // Show the icon and hide the text
  loginGithubText.classList.add("hidden");
  loginGithubIcon.style.width = "100px";
  loginGithubIcon.style.position = "absolute";
});

// Add mouseout event listener for github
loginGithubWrapper.addEventListener("mouseout", function () {
  // Show the text and hide the icon
  loginGithubText.classList.remove("hidden");
  loginGithubIcon.style.width = "30px";
  loginGithubIcon.style.position = "unset";
});

// ! form validation
// * login form validation
const loginForm = document.querySelector("#login-form");
const loginFromName = document.querySelector("#login-name");
const loginFromPassword = document.querySelector("#login-password");

const loginFormValidation = (e) => {
  e.preventDefault();
  if (loginFromName.value === "" || loginFromName.value.length < 3) {
    window.alert("نام کاربری باید بیشتر از ۳ کاراکتر باشد");
  } else if (
    loginFromPassword.value === "" ||
    loginFromPassword.value.length < 6
  ) {
    window.alert("رمز عبور باید بیشتر از ۶ کاراکتر باشد");
  } else if (
    loginFromPassword.value.includes(" ") ||
    loginFromPassword.value.includes(".")
  ) {
    window.alert("رمز عبور نمی‌تواند شامل فاصله یا نقطه باشد");
  } else {
    // ? add name to local storage
    localStorage.setItem("name", loginFromName.value);
    window.location.href = "/";
  }
};

loginForm.addEventListener("submit", loginFormValidation);

// * register form validation
const registerForm = document.querySelector("#register-form");
const registerFormName = document.querySelector("#register-name");
const registerFormUserName = document.querySelector("#register-username");
const registerFormEmail = document.querySelector("#register-email");
const registerFormPassword = document.querySelector("#register-password");
const registerFormRePassword = document.querySelector("#register-rePassword");

const registerFormValidation = (e) => {
  e.preventDefault();
  if (registerFormName.value === "" || registerFormName.value.length < 3) {
    window.alert("نام باید بیشتر از ۳ کاراکتر باشد");
  } else if (
    registerFormUserName.value === "" ||
    registerFormUserName.value.length < 3
  ) {
    window.alert("نام کاربری باید بیشتر از ۳ کاراکتر باشد");
  } else if (
    registerFormUserName.value.includes(" ") ||
    registerFormUserName.value.includes(".")
  ) {
    window.alert("نام کاربری نمی‌تواند شامل فاصله یا نقطه باشد");
  } else if (
    registerFormEmail.value === "" ||
    registerFormEmail.value.length < 3
  ) {
    window.alert("ایمیل باید بیشتر از ۳ کاراکتر باشد");
  } else if (registerFormEmail.value.includes(" ")) {
    window.alert("ایمیل نمی‌تواند شامل فاصله باشد");
  } else if (
    !registerFormEmail.value.includes("@") ||
    !registerFormEmail.value.includes(".com")
  ) {
    window.alert("ایمیل به درستی وارد نشده است");
  } else if (
    registerFormPassword.value === "" ||
    registerFormPassword.value.length < 6
  ) {
    window.alert("رمز عبور باید بیشتر از ۶ کاراکتر باشد");
  } else if (
    registerFormPassword.value.includes(" ") ||
    registerFormPassword.value.includes(".")
  ) {
    window.alert("رمز عبور نمی‌تواند شامل فاصله یا نقطه باشد");
  } else if (
    registerFormRePassword.value === "" ||
    registerFormRePassword.value.length < 6
  ) {
    window.alert("رمز عبور تکراری باید بیشتر از ۶ کاراکتر باشد");
  } else if (
    registerFormRePassword.value.includes(" ") ||
    registerFormRePassword.value.includes(".")
  ) {
    window.alert("رمز عبور تکراری نمی‌تواند شامل فاصله یا نقطه باشد");
  } else if (registerFormRePassword.value !== registerFormPassword.value) {
    window.alert("رمز عبور تکراری با رمز عبور اصلی یکسان نیست");
  } else {
    // ? add name to local storage
    localStorage.setItem("name", registerFormName.value);
    window.location.href = "/";
  }
};

registerForm.addEventListener("submit", registerFormValidation);
