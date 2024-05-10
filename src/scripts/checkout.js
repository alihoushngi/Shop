// select checkout product section from dom
const checkoutSection = document.querySelector("#product-for-checkout");
const sumProduct = document.querySelector("#sum");

let html = "";
let prices = [];

// get product from local storage
eventListenersForCheckout();
function eventListenersForCheckout() {
  document.addEventListener("DOMContentLoaded", loadDataFromLocalStorage);
  setTimeout(() => {
    let removeButton = document.querySelectorAll("#remove-button");
    removeButton.forEach((item) => {
      item.addEventListener("click", removeProduct);
    });
  }, 1000);
}

// function for load data
function loadDataFromLocalStorage() {
  const products = JSON.parse(localStorage.getItem("products"));
  if (products) {
    products.forEach((element) => {
      prices.push(JSON.parse(element.price));
      html += `
      <div class="flex shadow-custom px-10 py-5 rounded-md w-full my-1 gap-4 justify-between items-center">
        <img src="${element.image}" class="h-[100px] w-[100px] object-contain"/>
        <div>
            <h4 class="text-3xl font-semibold">${element.title}</h4>
            <span class="text-xl">قیمت : ${element.price} $ </span>
        </div>
        <a data-id="${element.id}" id="remove-button" class="remove cursor-pointer text-red-800 text-2xl font-extrabold transition-all duration-300 hover:text-red-600">X</a>
      </div>
      `;
    });
    checkoutSection.innerHTML = html;
    let sum = prices.reduce((total, currentValue) => total + currentValue, 0);
    sumProduct.innerHTML = `
    <div class="w-full flex justify-center items-center">
        <span class="text-4xl block">${sum} $</span>
    </div>
    `;
  }
}

// function for remove selected product from local storage
function removeProductFromLocalStorage(id) {
  let products = JSON.parse(localStorage.getItem("products"));
  if (products) {
    products.forEach(function (product, index) {
      console.log(product.id);
      if (product.id === id) {
        products.splice(index, 1);
      }
    });
    localStorage.setItem("products", JSON.stringify(products));
    window.location.reload();
  } else {
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
