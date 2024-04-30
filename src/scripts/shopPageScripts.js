// select element from dom to show data
const catResult = document.querySelector("#category-result");
// select element from dom to show data
const productResult = document.querySelector("#product-result");

// create null html for data
let html = "";
let newProduct = "";

// fetch data from API
fetch("https://fakestoreapi.com/products/categories")
  .then((res) => res.json())
  .then((result) => {
    result.map((item, index) => {
      // translate category
      if (item === "electronics") {
        item = "الکترونیک";
      } else if (item === "jewelery") {
        item = "جواهرات";
      } else if (item === "men's clothing") {
        item = "لباس مردانه";
      } else if (item === "women's clothing") {
        item = "لباس زنانه";
      }

      html += `
      <li key="${index}">
        <input type="checkbox" name="${item}" id="${item}" value="${item}"/>
        <label for="${item}" class="capitalize">${item}</label>
      </li>
      `;
    });
    // assign items to document
    catResult.innerHTML = html;
  });

let fetchedData = {}; // Object to store fetched product data

catResult.addEventListener("click", function (event) {
  // check if the clicked element is a checkbox
  if (event.target.type === "checkbox") {
    const checkboxValue = event.target.value;
    if (event.target.checked) {
      fetch(`https://fakestoreapi.com/products/category/${checkboxValue}`)
        .then((productResult) => productResult.json())
        .then((data) => {
          fetchedData[checkboxValue] = data; // Store fetched data in object
          const checkedCheckboxes = Object.keys(fetchedData);
          if (checkedCheckboxes.length === numberOfCheckboxesChecked()) {
            // If all checkboxes are checked, sum up the arrays
            const mergedData = mergeArrays(Object.values(fetchedData));
            displayProducts(mergedData); // Display merged products
          }
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    } else {
      delete fetchedData[checkboxValue]; // Remove unchecked checkbox data
      const checkedCheckboxes = Object.keys(fetchedData);
      if (checkedCheckboxes.length === 0) {
        // If all checkboxes are unchecked, fetch all products again
        fetchAllProducts();
      } else {
        // If not all checkboxes are unchecked, update displayed products
        const mergedData = mergeArrays(Object.values(fetchedData));
        displayProducts(mergedData); // Display merged products
      }
    }
  }
});

function fetchAllProducts() {
  fetch("https://fakestoreapi.com/products")
    .then((productResult) => productResult.json())
    .then((data) => {
      displayProducts(data); // Display all products
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
}

function numberOfCheckboxesChecked() {
  return Object.keys(fetchedData).length;
}

function mergeArrays(arrays) {
  return arrays.reduce((mergedArray, array) => mergedArray.concat(array), []);
}

function displayProducts(data) {
  let newProduct = ""; // Initialize HTML string
  data.forEach((elements) => {
    // Customize title word length
    let maxTitleLength = 3;
    let titleText = elements.title;
    let titleWords = titleText.split(" ");
    if (titleWords.length > maxTitleLength) {
      titleText = titleWords.slice(0, maxTitleLength).join(" ") + "...";
    }
    // Set custom description to my data description
    elements.title = titleText;

    // Customize description word length
    let maxDesLength = 30;
    let descriptionText = elements.description;
    let desWords = descriptionText.split(" ");
    if (desWords.length > maxDesLength) {
      descriptionText = desWords.slice(0, maxDesLength).join(" ") + "...";
    }
    // Set custom description to my elements description
    elements.description = descriptionText;

    newProduct += `
        <div class="w-[32%] max-h-[inherit] min-h-[450px] relative items-center shadow-custom rounded-md transition-all duration-300 ease-in-out hover:cursor-pointer">
        <a href="/pages/shop/product/product.html?id=${elements.id}" class="flex flex-col justify-start px-2 py-4 gap-2">
        <div class="">
          <img src="${elements.image}" alt="" class="object-cover bg-no-repeat bg-top w-full rounded-md max-h-[140px] min-h-[140px]">
        </div>
        <h4 class="text-[15px] font-bold uppercase min-h-12">${elements.title}</h4>
        <span class="capitalize text-secondaryColor">قیمت : <span
                class="text-primaryColor">${elements.price}$</span></span>
        <p id="description" class="text-[12px] text-justify font-thin w-[95%] mb-8">${descriptionText}</p>
        <span class="text-sm text-primaryColor absolute bottom-14 z-20"><a>${elements.category}</a></span>
        <div class="flex gap-2 absolute bottom-4 z-10">
            <div
                class="text-white bg-primaryColor w-[30px] h-[30px] flex justify-center items-center text-xl rounded-md leading-[0] shadow-custom transition-all duration-300 ease-in-out cursor-pointer hover:bg-white hover:text-primaryColor hover:border">
                +</div>
            <div
                class="bg-white w-[100px] flex justify-center items-center border rounded-md transition-all duration-300 ease-in-out grayscale hover:grayscale-0">
                <img src="../../src/assets/images/basket.png" alt=""
                    class="w-[30px]  transition-all duration-300 ease-in-out">
            </div>
            <div
                class="text-white bg-primaryColor w-[30px] h-[30px] flex justify-center items-center text-xl rounded-md leading-[0] shadow-custom transition-all duration-300 ease-in-out cursor-pointer hover:bg-white hover:text-primaryColor hover:border">
                -</div>
        </div>
        </a>
        </div>
      `;
  });
  productResult.innerHTML = newProduct; // Display products in HTML
}
