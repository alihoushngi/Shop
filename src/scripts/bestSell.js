// select data result section
const bestSellResult = document.querySelector("#best-sell");
const productCard = document.querySelector("#product-card");
const productInBasket = document.querySelector("#product-in-basket");

// start and end number
let startNumber = null;
let endNumber = null;

function generateRandomRanges(iterations) {
  for (let i = 0; i < iterations; i++) {
    const start = Math.floor(Math.random() * 7) + 1; // Generate random number between 1 and 7 (inclusive)
    const end = start + 3; // Ensure end is 2 more than start
    startNumber = start;
    endNumber = end;
  }
}

// Specify how many random ranges to generate (e.g., 3)
generateRandomRanges(1);

// fetch data
const bestSell = async () => {
  // create empty array and html for push and show data
  let result = [];
  let html = "";

  // fetch data from api
  await fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((data) => result.push(data));

  // create html section with data
  result.forEach((element) => {
    for (let i = startNumber; i < endNumber; i++) {
      const data = element[i];
      // translate category
      if (data.category === "electronics") {
        data.category = "الکترونیک";
      } else if (data.category === "jewelery") {
        data.category = "جواهرات";
      } else if (data.category === "men's clothing") {
        data.category = "لباس مردانه";
      } else if (data.category === "women's clothing") {
        data.category = "لباس زنانه";
      }

      //customize title world length
      let maxTitleLength = 3;
      let titleText = data.title;
      let titleWords = titleText.split(" ");
      if (titleWords.length > maxTitleLength) {
        titleText = titleWords.slice(0, maxTitleLength).join(" ") + "...";
      }
      // set custom description to my data description
      data.title = titleText;

      //customize description world length
      let maxDesLength = 30;
      let descriptionText = data.description;
      let desWords = descriptionText.split(" ");
      if (desWords.length > maxDesLength) {
        descriptionText = desWords.slice(0, maxDesLength).join(" ") + "...";
      }
      // set custom description to my data description
      data.description = descriptionText;

      // create my html
      html += `
      <div class="w-1/3 max-h-[inherit] min-h-[400px] flex flex-col justify-start relative items-center shadow-custom px-2 py-4 rounded-md gap-2 transition-all duration-300 ease-in-out hover:cursor-pointer hover:shadow-lg">
        <a href="/pages/shop/product/product.html?id=${data.id}">
          <div class="flex justify-center items-center mb-4">
          <img src="${data.image}" alt="" class="object-cover bg-no-repeat bg-top w-fit rounded-md max-h-[140px] min-h-[140px]">
          </div>
          <h4 class="text-[15px] font-bold uppercase min-h-12">${data.title}</h4>
          <span class="capitalize text-secondaryColor">قیمت : <span class="text-primaryColor price">${data.price}$</span></span>
          <p id="description" class="text-[12px] text-justify font-thin w-[95%] mb-8">${descriptionText}</p>
          <span class="text-sm text-primaryColor absolute bottom-14 z-20"><a>${data.category}</a></span>
          <div class="flex gap-2 absolute bottom-4 z-10" id="addToCartButton">
              <div data-id="${data.id}"
                  class="addToCartButton text-white bg-primaryColor w-[30px] h-[30px] flex justify-center items-center text-xl rounded-md leading-[0] shadow-custom transition-all duration-300 ease-in-out cursor-pointer hover:bg-white hover:text-primaryColor hover:border">
                  +</div>
              <div data-id="${data.id}"
                  class="bg-white w-[100px] flex justify-center items-center border rounded-md transition-all duration-300 ease-in-out grayscale hover:grayscale-0">
                  <img src="./src/assets/images/basket.png" alt=""
                      class="w-[30px]  transition-all duration-300 ease-in-out">
              </div>
              <div data-id="${data.id}"
                  class="removeFromCartButton text-white bg-primaryColor w-[30px] h-[30px] flex justify-center items-center text-xl rounded-md leading-[0] shadow-custom transition-all duration-300 ease-in-out cursor-pointer hover:bg-white hover:text-primaryColor hover:border">
                  -</div>
          </div>
        </a>
      </div>
      `;
    }
    // show data on document

    bestSellResult.innerHTML = html;
    // findButtons();
  });
};

bestSell();

// show where click on best sell result section
eventListenerOnBestSell();
function eventListenerOnBestSell() {
  bestSellResult.addEventListener("click", buyBestSellProduct);

  // remove product
  productInBasket.addEventListener("click", removeProduct);

  // get data from local storage on loaded
  document.addEventListener("DOMContentLoaded", getProductOnLoaded);
}

// function for handler buy best sell product
function buyBestSellProduct(e) {
  e.preventDefault();
  // find which product selected division
  if (e.target.classList.contains("addToCartButton")) {
    const selectedProduct = e.target.parentElement.parentElement;
    // send to a function to save on local storage and show on basket button
    getProductInfo(selectedProduct);
  }
}

// function for save on local storage and show on basket button
function getProductInfo(product) {
  // create object with data we need to keep
  const productInfo = {
    image: product.querySelector("img").src,
    title: product.querySelector("h4").textContent,
    price: product.querySelector("span.price").textContent.split("$")[0],
    id: product.querySelector(".addToCartButton").getAttribute("data-id"),
  };

  // add to basket
  addToCard(productInfo);

  // add to local storage
  saveToLocalStorage(productInfo);
}

// function for add to cart
function addToCard(data) {
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
  productInBasket.appendChild(division);
}

// add to local storage Function
function saveToLocalStorage(ProductData) {
  // check local storage before save
  let products = getProductFromLocalStorage();
  products.push(ProductData);
  localStorage.setItem("products", JSON.stringify(products));
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

// create function for open or close basket
productCard.addEventListener("click", basketHandler);

function basketHandler(e) {
  // create element and function for remove all button
  if (productInBasket.innerHTML) {
    let deleteAllButton = document.querySelector("button");
    deleteAllButton.className =
      "w-full bg-primaryColor text-white p-3 rounded-md transition-all duration-300 hover:shadow-custom hover:bg-primaryColorHover";
    deleteAllButton.innerHTML = "Delete All Product";
    productInBasket.appendChild(deleteAllButton);
    deleteAllButton.addEventListener("click", removeAllProduct);
  }
  const basket = e.target.nextElementSibling;
  if (basket.className.includes("hidden")) {
    basket.classList.remove("hidden");
    basket.classList.add("flex");
  } else {
    basket.classList.remove("flex");
    basket.classList.add("hidden");
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

  if (!productInBasket.innerHTML) {
    const basket = productCard.nextElementSibling;
    if (basket.className.includes("hidden")) {
      basket.classList.remove("hidden");
      basket.classList.add("flex");
    } else {
      basket.classList.remove("flex");
      basket.classList.add("hidden");
    }
  }
}

// function for remove selected product from local storage
function removeProductFromLocalStorage(id) {
  let products = JSON.parse(localStorage.getItem("products"));
  products.forEach(function (product, index) {
    if (product.id === id) {
      products.splice(index, 1);
    }
  });
  localStorage.setItem("products", JSON.stringify(products));
}

// function for remove all product button
function removeAllProduct(e) {
  e.preventDefault();
  productInBasket.innerHTML = "";
  clearLocalStorage();
  setTimeout(() => {
    window.alert("All Product Removed");
  }, 100);
}

// clear local storage function
function clearLocalStorage() {
  localStorage.clear();
}

// function for get data on loaded page
function getProductOnLoaded() {
  let productsList = getProductFromLocalStorage();
  productsList.forEach((data) => {
    addToCard(data);
  });
}
