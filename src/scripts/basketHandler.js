// get basket element from Dom
const productBasket = document.querySelector("#product-card");
const pInBasket = document.querySelector("#product-in-basket");

// show where click on best sell result section
eventListenerOnBasket();
function eventListenerOnBasket() {
  pInBasket.addEventListener("click", removeProduct);
  // get data from local storage on loaded
  document.addEventListener("DOMContentLoaded", getProductOnLoaded);
}

// function for add to cart
function addToCardFromLocalStorage(data) {
  // create division for wrap on product
  let division = document.createElement("div");
  division.className = "flex w-full justify-between items-center gap-3";

  // jsx for build html to show product when added to basket
  division.innerHTML = `
  <div class="flex justify-center items-center gap-3">
    <div class="shadow-custom p-6 rounded-md">
      <img src="${data.image}" class="object-contain h-14 w-14"/> 
    </div>
  </div>
  <div class="flex flex-col justify-center items-center gap-3">
    <div>
      <h3>${data.title}</h3>
    </div>
    <div class="flex justify-between items-center gap-3 w-full">
        <span>${data.price} $</span>
        <a href="#" data-id="${data.id}" class="remove text-red-700">X</a>
    </div>
  </div>
  `;

  // append my jsx to result section
  pInBasket.appendChild(division);
}

// function for get data on loaded page
function getProductOnLoaded() {
  let productsList = getProductFromLocalStorage();
  if (productsList) {
    productsList.forEach((data) => {
      addToCardFromLocalStorage(data);
    });
  }
}

// check data is on local storage or not
function getProductFromLocalStorage() {
  let products;
  let productInLocalStorage = localStorage.getItem("products");
  if (productInLocalStorage) {
    products = JSON.parse(productInLocalStorage);
  } else {
    products = [];
  }

  return products;
}

// function for remove selected product from local storage
function removeProductFromLocalStorage(id) {
  let products = JSON.parse(localStorage.getItem("products"));
  if (products) {
    products.forEach(function (product, index) {
      if (product.id === id) {
        products.splice(index, 1);
      }
    });
    localStorage.setItem("products", JSON.stringify(products));
  } else {
    const closers = productBasket.nextElementSibling;
    closers.classList.remove("flex");
    closers.classList.add("hidden");
    localStorage.clear();
  }
}

// handel remove button
function removeProduct(e) {
  e.preventDefault();
  let product, productId;

  if (e.target.classList.contains("remove")) {
    e.target.parentElement.parentElement.parentElement.remove();
    product = e.target.parentElement.parentElement.parentElement;
    productId = product.querySelector("a").getAttribute("data-id");
  }

  removeProductFromLocalStorage(productId);
}

// create element and function for remove all button
let deleteAllButton = document.createElement("button");
let goToBuy = document.createElement("button");
deleteAllButton.className =
  "w-full bg-red-800 text-sm text-white py-1 px-4 rounded-md transition-all duration-300 hover:shadow-custom hover:bg-red-600";
goToBuy.className =
  "w-full bg-primaryColor text-sm text-white py-1 px-4 rounded-md transition-all duration-300 hover:shadow-custom hover:bg-primaryColorHover";
deleteAllButton.innerHTML = "پاک کردن همه محصولات از سبد خرید";
goToBuy.innerHTML = "رفتن به صفحه پرداخت";
pInBasket.appendChild(deleteAllButton);
pInBasket.appendChild(goToBuy);
deleteAllButton.addEventListener("click", removeAllProduct);

// function for basket handler
productBasket.addEventListener("click", basketHandler);

function basketHandler(e) {
  const basket = e.target.nextElementSibling;
  if (basket.className.includes("hidden")) {
    basket.classList.remove("hidden");
    basket.classList.add("flex");
  } else {
    basket.classList.remove("flex");
    basket.classList.add("hidden");
  }
}

// function for remove all product button
function removeAllProduct(e) {
  e.preventDefault();
  localStorage.clear();
  pInBasket.innerHTML = "";
  setTimeout(() => {
    window.alert("All Product Removed");
  }, 100);
}
