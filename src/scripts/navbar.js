// ? create array for navbar list ----------------
const navbarArray = [
  {
    name: "خانه",
    link: "/",
  },
  {
    name: "فروشگاه",
    link: "#",
  },
  {
    name: "ارتباط با ما",
    link: "#",
  },
];

// ! get navbar from dom -------------------------
const navbar = document.querySelector("#navbar");
// create elements for menu ----------------------
const menuWrapper = document.createElement("div");
const leftSideWrapper = document.createElement("div");
const navbarList = document.createElement("ul");

// add class to my items ------------------------
navbar.classList.add("w-full");
navbarList.classList.add("flex", "gap-3", "p-5");

// create navbar item with navbarArray ----------
navbarArray.forEach((item) => {
  const list = document.createElement("li");
  const link = document.createElement("a");

  // a tag link to list -------------------------
  list.appendChild(link);

  // a tag get items text and href --------------
  link.textContent = item.name;
  link.href = item.link;

  // list link to navbar ------------------------
  navbarList.appendChild(list);
});

// ul add to navbarWrapper and navbarWrapper added to navbar ----
menuWrapper.appendChild(navbarList);
navbar.appendChild(menuWrapper);

//left side of navbar linked to navbar ---------
navbar.appendChild(leftSideWrapper);
