// get category detail result section from dom
const detailContainer = document.getElementById("category-detail");
const categoryDisplay = document.getElementById("cat-name");
const urlParams = new URLSearchParams(window.location.search);
const categoryName = urlParams.get("id");

// fetch data
const catProduct = async () => {
  // create empty array and html for push and show data
  let html = "";
  let myArray = [];

  // fetch data from API
  await fetch(`https://fakestoreapi.com/products/category/${categoryName}`)
    .then((res) => res.json())
    .then((data) => myArray.push(data));

  // create html section with data
  myArray.forEach((item) => {
    item.forEach((element) => {
      // translate category
      if (element.category === "electronics") {
        element.category = "الکترونیک";
      } else if (element.category === "jewelery") {
        element.category = "جواهرات";
      } else if (element.category === "men's clothing") {
        element.category = "لباس مردانه";
      } else if (element.category === "women's clothing") {
        element.category = "لباس زنانه";
      }

      // add cat name to html
      categoryDisplay.textContent = element.category;

      //customize title world length
      let maxTitleLength = 3;
      let titleText = element.title;
      let titleWords = titleText.split(" ");
      if (titleWords.length > maxTitleLength) {
        titleText = titleWords.slice(0, maxTitleLength).join(" ") + "...";
      }
      // set custom description to my element description
      element.title = titleText;

      //customize description world length
      let maxDesLength = 30;
      let descriptionText = element.description;
      let desWords = descriptionText.split(" ");
      if (desWords.length > maxDesLength) {
        descriptionText = desWords.slice(0, maxDesLength).join(" ") + "...";
      }
      // set custom description to my element description
      element.description = descriptionText;

      // create my html
      html += `
      <div class="w-[32%] max-h-[inherit] min-h-[450px] shadow-custom rounded-md transition-all duration-300 ease-in-out hover:cursor-pointer hover:shadow-lg">
      <a href="/pages/shop/product/product.html?id=${element.id}" class="flex flex-col justify-between h-full items-center px-2 py-4 gap-2">
        <div class="flex justify-center items-center mb-4">
          <img src="${element.image}" alt="${element.title}" class="object-cover bg-no-repeat bg-top w-fit rounded-md max-h-[140px] min-h-[140px]">
        </div>
        <h4 class="text-[15px] font-bold uppercase min-h-12">${element.title}</h4>
        <span class="capitalize text-secondaryColor">قیمت : <span class="text-primaryColor">${element.price}$</span></span>
        <p id="description" class="text-[12px] text-justify font-thin w-[95%] mb-8">${descriptionText}</p>
        <span class="text-sm text-primaryColor">${element.category}</span>
        <div class="flex gap-2">
          <div class="text-white bg-primaryColor w-[30px] h-[30px] flex justify-center items-center text-xl rounded-md leading-[0] shadow-custom transition-all duration-300 ease-in-out cursor-pointer hover:bg-white hover:text-primaryColor hover:border">+</div>
          <div class="bg-white w-[100px] flex justify-center items-center border rounded-md transition-all duration-300 ease-in-out grayscale hover:grayscale-0">
            <img src="../../../src/assets/images/basket.png" alt="" class="w-[30px]  transition-all duration-300 ease-in-out">
          </div>
          <div class="text-white bg-primaryColor w-[30px] h-[30px] flex justify-center items-center text-xl rounded-md leading-[0] shadow-custom transition-all duration-300 ease-in-out cursor-pointer hover:bg-white hover:text-primaryColor hover:border">-</div>
        </div>
      </a>
    </div>
        `;
      // show data on document
      detailContainer.innerHTML = html;
    });
  });
};

catProduct();
