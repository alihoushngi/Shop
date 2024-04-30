// get product detail result section from dom
const detailContainer = document.getElementById("product-detail");

// get params from url when page loaded
document.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get("id");

  fetchProductDetails(productId);
});

// select category section
const catResult = document.querySelector("#category-list");

// fetch product data with id from params
async function fetchProductDetails(productId) {
  try {
    const response = await fetch(
      `https://fakestoreapi.com/products/${productId}`
    );
    let product = await response.json();
    renderProductDetails(product);
  } catch (error) {
    console.error("Error fetching product details: ", error);
  }
}

// create html for show on single page
function renderProductDetails(product) {
  // fetch categories from FakeStore API
  let productCategoryData = "";
  const myCategory = async () => {
    await fetch(
      `https://fakestoreapi.com/products/category/${product.category}`
    )
      .then((res) => res.json())
      .then((result) => {
        for (let i = 0; i <= 2; i++) {
          let data = result[i];
          let pro = [];
          pro.push(data);
          pro.forEach((element) => {
            let maxTitleLength = 3;
            let titleText = element.title;
            let titleWords = titleText.split(" ");
            if (titleWords.length > maxTitleLength) {
              titleText = titleWords.slice(0, maxTitleLength).join(" ") + "...";
            }
            // Set custom description to my data description
            element.title = titleText;

            productCategoryData += `
            <div class="w-full rounded-md shadow-custom p-2 ">
              <a href="/pages/shop/product/product.html?id=${element.id}" class="flex flex-col justify-center items-center gap-4">
                <div>
                  <img src="${element.image}" alt="${element.title}" width="50"/>
                </div>
                <div>
                  <h4 class="text-sm">${element.title}</h4>
                </div>
              </a>
            </div>
            `;
          });
        }
        document.querySelector("#catProductResult").innerHTML =
          productCategoryData;
      });
  };
  myCategory();

  // translate category
  if (product.category === "electronics") {
    product.category = "الکترونیک";
  } else if (product.category === "jewelery") {
    product.category = "جواهرات";
  } else if (product.category === "men's clothing") {
    product.category = "لباس مردانه";
  } else if (product.category === "women's clothing") {
    product.category = "لباس زنانه";
  }

  detailContainer.innerHTML = `
    <div class="flex flex-col gap-4">
      <div class="flex gap-5 items-stretch">
        <div class="w-1/4 flex justify-center items-center rounded-md shadow-custom p-10">
            <img src="${product.image}" alt="${product.title}" class="object-cover bg-no-repeat bg-top w-fit rounded-md"/>
        </div>
        <div class="w-2/4 flex flex-col justify-center gap-4 rounded-md shadow-custom p-14">
            <h1 class="text-xl text-center font-bold text-primaryColor">${product.title}</h1>
            <p class="text-sm text-left font-extralight">${product.description}</p>
            <span class="text-right text-primaryColor">دسته بندی: ${product.category}</span>
            <div class="flex justify-start items-center gap-3">
                <span class="text-sm text-center text-primaryColor">راه های ارتباطی</span>
                <div id="footer-contact" class="flex gap-3 justify-center items-center">
                    <a href="https://www.linkedin.com/in/alihoushangi/">
                        <img class="bg-white p-1 rounded-md transition-all duration-300 hover:shadow-custom"
                            src="../../../src/assets/images/linkedin.png" width="40" />
                    </a>
                    <a href="https://t.me/Alihoushangi">
                        <img class="bg-white p-1 rounded-md transition-all duration-300 hover:shadow-custom"
                            src="../../../src/assets/images/telegram.png" width="40" />
                    </a>
                    <a href="https://www.instagram.com/alihoushngii/">
                        <img class="bg-white p-1 rounded-md transition-all duration-300 hover:shadow-custom"
                            src="../../../src/assets/images/instagram.png" width="40" />
                    </a>
                    <a href="https://github.com/alihoushngi">
                        <img class="bg-white p-1 rounded-md transition-all duration-300 hover:shadow-custom"
                            src="../../../src/assets/images/github.png" width="40" />
                    </a>
                </div>
            </div>
        </div>
        <div class="w-1/4 gap-4 flex flex-col justify-center items-start rounded-md shadow-custom p-10">
            <p class="text-xl text-primaryColor font-semibold">قیمت : $ ${product.price}</p>
            <button class="w-full bg-primaryColor text-white p-3 rounded-md transition-all duration-300 hover:bg-blue-600 hover:shadow-custom">افزودن به سبد خرید</button>
            <button class="w-full bg-green-600 text-white p-3 rounded-md transition-all duration-300 hover:bg-green-400 hover:shadow-custom">افزودن به علاقه مندی ها</button>
        </div>
      </div>
      <div class="w-full flex flex-col justify-center items-center rounded-md shadow-custom p-6 gap-4">
        <h3 class="text-base text-center font-bold text-primaryColor">محصولات مرتبط</h3>
        <div id="catProductResult" class="flex gap-2 w-full">
        </div>
      </div>
    </div>
    `;
}
