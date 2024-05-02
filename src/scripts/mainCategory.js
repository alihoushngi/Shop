// select category section
const catResult = document.querySelector("#category-list");

// fetch categories from FakeStore API
const cat = async () => {
  let html = "";

  await fetch("https://fakestoreapi.com/products/categories")
    .then((res) => res.json())
    .then((result) => {
      result.map((data) => {
        html += `
                <a href="/pages/shop/category/category.html?id=${data}" target="_blank">
                  <li class="flex justify-center items-center w-40 h-24 rounded-md capitalize cursor-pointer transition-all duration-300 hover:shadow-custom bg-primaryColor text-white hover:text-primaryColor hover:bg-white">
                    ${data}
                  </li>
                </a>
                `;
      });
    });

  // select category from array and pin to html
  catResult.innerHTML = html;
};

cat();
