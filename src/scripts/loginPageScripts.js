// todo login with github and google icon and text

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
    loginFromName.value.includes(" ") ||
    loginFromName.value.includes(".")
  ) {
    window.alert("نام کاربری نمی‌تواند شامل فاصله یا نقطه باشد");
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
    registerFormName.value.includes(" ") ||
    registerFormName.value.includes(".")
  ) {
    window.alert("نام کاربری نمی‌تواند شامل فاصله یا نقطه باشد");
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

// * change display forms on mobile version
const registerRoute = document.querySelector("#register-route");
const loginRoute = document.querySelector("#login-route");

const registerRouteChanger = document.querySelector("#register-route-changer");
const loginRouteChanger = document.querySelector("#login-route-changer");

// func for button route changer
// ? register
registerRouteChanger.addEventListener("click", function () {
  loginRoute.classList.add("max-lg:hidden");
  registerRoute.classList.remove("max-lg:hidden");
});

// ? login
loginRouteChanger.addEventListener("click", function () {
  registerRoute.classList.add("max-lg:hidden");
  loginRoute.classList.remove("max-lg:hidden");
});
