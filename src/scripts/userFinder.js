// get user is login or not from local storage
const userName = localStorage.getItem("name");

// get login and exit button and navbar from dom
const loginButton = document.querySelector("#login");
const exitButton = document.querySelector("#exit");
const navbarLeftSide = document.querySelector("#navbar-left-side");

if (userName !== null) {
  loginButton.remove();
  exitButton.classList.remove("hidden");
  const item = document.createElement("li");
  item.innerHTML = `
  <span>${userName}</span>
  `;
  navbarLeftSide.appendChild(item);
}

// function for exit user
const exitHandler = () => {
  localStorage.clear();
  window.location.reload();
};
exitButton.addEventListener("click", exitHandler);
