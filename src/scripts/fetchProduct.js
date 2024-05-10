// select element from dom to show data
const proResult = document.querySelector("#product-result");

// create null html for data
let proSection = "";
let result = [];

// fetch data from API
fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((data) => {
    result.push(data);
    result[0].forEach((element) => {
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
      //customize title world length
      let maxTitleLength = 3;
      let titleText = element.title;
      let titleWords = titleText.split(" ");
      if (titleWords.length > maxTitleLength) {
        titleText = titleWords.slice(0, maxTitleLength).join(" ") + "...";
      }
      // set custom description to my data description
      element.title = titleText;

      //customize description world length
      let maxDesLength = 25;
      let descriptionText = element.description;
      let desWords = descriptionText.split(" ");
      if (desWords.length > maxDesLength) {
        descriptionText = desWords.slice(0, maxDesLength).join(" ") + "...";
      }
      // set custom description to my element description
      element.description = descriptionText;

      proSection += `
      <div class="relative w-[32%] max-h-[inherit] min-h-[450px] shadow-custom rounded-md transition-all duration-300 ease-in-out hover:cursor-pointer hover:shadow-lg flex justify-center items-center">
        <a href="/pages/shop/product/product.html?id=${element.id}" class="flex flex-col justify-between h-full items-center px-2 py-4 gap-2">
          <div class="flex justify-center items-center mb-4">
            <img src="${element.image}" alt="${element.title}" class="object-cover bg-no-repeat bg-top w-fit rounded-md max-h-[140px] min-h-[140px]">
          </div>
          <h4 class="text-[15px] font-bold uppercase min-h-12">${element.title}</h4>
          <span class="capitalize text-secondaryColor">قیمت : <span class="price text-primaryColor">${element.price}$</span></span>
          <p id="description" class="text-[12px] text-justify font-thin w-[95%] mb-8">${descriptionText}</p>
          <span class="text-sm text-primaryColor">${element.category}</span>
          </a>
          <div class="flex gap-2 absolute bottom-4 z-10 w-[90%]">
          <div data-id="${data.id}"
              class="addToCartButton text-white bg-primaryColor w-full text-sm h-[30px] flex justify-center items-center rounded-md leading-[0] shadow-custom transition-all duration-300 ease-in-out cursor-pointer hover:bg-white hover:text-primaryColor hover:border">
              اضافه کردن به سبد خرید</div>
          </div>
      </div>
      `;
    });
    proResult.innerHTML = proSection;
  });
