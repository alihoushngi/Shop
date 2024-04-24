// Get current browser URL
let currentURL = window.location.href;
console.log(currentURL);

// find my menu links
const myMenuLinks = document.querySelectorAll("#menu a");

myMenuLinks.forEach((links) => {
  console.log(links);
  if (links.href === currentURL) {
    links.classList = "activeLink";
  }
});
