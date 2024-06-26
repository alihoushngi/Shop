// select data result section
const bestSellResult = document.querySelector("#best-sell");

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
      <div class="w-1/3 max-md:w-full max-h-[inherit] min-h-[400px] flex flex-col justify-start relative items-center shadow-custom px-2 py-4 rounded-md gap-2 transition-all duration-300 ease-in-out hover:cursor-pointer hover:shadow-lg">
        <a href="/pages/shop/product/product.html?id=${data.id}">
          <div class="flex justify-center items-center mb-4">
          <img src="${data.image}" alt="" class="object-cover bg-no-repeat bg-top w-fit rounded-md max-h-[140px] min-h-[140px]">
          </div>
          <h4 class="text-[15px] font-bold uppercase min-h-12">${data.title}</h4>
          <span class="capitalize text-secondaryColor">قیمت : <span class="text-primaryColor price">${data.price}$</span></span>
          <p id="description" class="text-[12px] text-justify font-thin w-[95%] mb-8">${descriptionText}</p>
          <div class="flex gap-2 absolute bottom-4 z-10 w-[90%]">
          <div data-id="${data.id}"
              class="addToCartButton text-white bg-primaryColor w-full text-sm h-[30px] flex justify-center items-center rounded-md leading-[0] shadow-custom transition-all duration-300 ease-in-out cursor-pointer hover:bg-white hover:text-primaryColor hover:border">
              اضافه کردن به سبد خرید</div>
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
