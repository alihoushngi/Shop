// ? create array for navbar list
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

// ! get navbar from dom
const navbar = document.querySelector("#navbar");
navbar.classList.add("w-full");
const menuWrapper = document.createElement("div");
const leftSideWrapper = document.createElement("div");
const navbarList = document.createElement("ul");
navbarList.classList.add("flex", "gap-3", "p-5");
navbarArray.forEach((item) => {
  const list = document.createElement("li");
  const link = document.createElement("a");
  list.appendChild(link);
  link.textContent = item.name;
  link.href = item.link;
  navbarList.appendChild(list);
});
menuWrapper.appendChild(navbarList);
navbar.appendChild(menuWrapper);
navbar.appendChild(leftSideWrapper);
