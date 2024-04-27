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
    window.location.href = "/";
  }
};

loginForm.addEventListener("submit", loginFormValidation);
