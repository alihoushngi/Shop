setTimeout(() => {
  const addToCardButton = document.querySelectorAll(".addToCartButton");
  const myBasket = document.querySelector("#product-in-basket");

  addToCardButton.forEach((items) => {
    items.addEventListener("click", buyPro);
  });

  // function for handler buy product
  function buyPro(e) {
    e.preventDefault();
    // find which product selected division
    if (e.target.classList.contains("addToCartButton")) {
      const selectedProduct = e.target.parentElement.parentElement;
      // send to a function to save on local storage and show on basket button
      getProductInformation(selectedProduct);
    }
  }

  // function for save on local storage and show on basket button
  function getProductInformation(product) {
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
    myBasket.appendChild(division);
  }

  // add to local storage Function
  function saveToLocalStorage(ProductData) {
    // check local storage before save
    let products = getProductFromLocalStorage();
    if (products) {
      products.push(ProductData);
    }
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
}, 1000);
