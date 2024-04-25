// login with github and google icon and text

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
