// Get current browser URL
let currentURL = window.location.href;

// find my menu links
const myMenuLinks = document.querySelectorAll("#menu a");

myMenuLinks.forEach((links) => {
  if (links.href === currentURL) {
    links.classList = "activeLink";
  }
});
