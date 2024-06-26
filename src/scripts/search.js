// get search form from Dom
const searchForm = document.querySelector("#searchForm");
const searchInput = document.querySelector("#searchInput");
const formResult = document.querySelector("#formResult");

// states for data
const productsFound = [];

// formSubmitHandler
const formSubmitHandler = (e) => {
  e.preventDefault();
  const searchValue = searchInput.value.toLowerCase();
  let showProduct = "";
  if (productsFound.length > 0) {
    productsFound.length = 0;
    formResult.innerHTML = "";
  }
  // fetch data from API
  if (searchValue) {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        data.forEach((element) => {
          if (element.title.toLowerCase().includes(searchValue)) {
            productsFound.push(element);
          }
        });
        productsFound.forEach((item) => {
          showProduct += `
            <div class="bg-white p-4 rounded-md hover:shadow-custom border border-slate-200 transition-all duration-300 hover:bg-slate-200">
            <a href="/pages/shop/product/product.html?id=${item.id}" class="flex justify-between items-center">
              <div class="flex items-center gap-2">
                  <div>
                      <img src="${item.image}" width="60"/>
                  </div>
                  <div>
                      <h2 class="text-primaryColor font-semibold text-xl">${item.title}</h2>
                      <span class="text-gray-400 text-sm">${item.category}</span>
                  </div>
              </div>
              <div>
                  <span class="text-primaryColor text-md">${item.price}</span>
              </div>
            </a>
            </div>
            `;
        });
        formResult.innerHTML = showProduct;
      });
  } else {
    formResult.innerHTML = "";
  }
};

// select when form submit
searchForm.addEventListener("submit", formSubmitHandler);
