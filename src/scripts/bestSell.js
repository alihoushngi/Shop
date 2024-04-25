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
      <div
      class="w-1/3 max-h-[inherit] min-h-[400px] flex flex-col justify-start relative items-center shadow-md px-2 py-4 rounded-md gap-2 transition-all duration-300 ease-in-out hover:shadow-lg hover:cursor-pointer">
      <div class="">
      <img src="${data.image}" alt="" class="object-cover bg-no-repeat bg-top w-full rounded-md max-h-[140px] min-h-[140px]">
      </div>
      <h4 class="text-[15px] font-bold uppercase min-h-12">${data.title}</h4>
      <span class="capitalize text-secondaryColor">قیمت : <span
              class="text-primaryColor">${data.price}$</span></span>
      <p id="description" class="text-[12px] text-justify font-thin w-[95%] mb-8">${descriptionText}</p>
      <span class="text-sm text-primaryColor absolute bottom-14 z-20"><a>${data.category}</a></span>
      <div class="flex gap-2 absolute bottom-4 z-10">
          <div
              class="text-white bg-primaryColor w-[30px] h-[30px] flex justify-center items-center text-xl rounded-md leading-[0] shadow-sm transition-all duration-300 ease-in-out cursor-pointer hover:bg-white hover:text-primaryColor hover:shadow-xl hover:border">
              +</div>
          <div
              class="bg-white w-[100px] flex justify-center items-center border rounded-md transition-all duration-300 ease-in-out grayscale hover:grayscale-0">
              <img src="./src/assets/images/basket.png" alt=""
                  class="w-[30px]  transition-all duration-300 ease-in-out">
          </div>
          <div
              class="text-white bg-primaryColor w-[30px] h-[30px] flex justify-center items-center text-xl rounded-md leading-[0] shadow-sm transition-all duration-300 ease-in-out cursor-pointer hover:bg-white hover:text-primaryColor hover:shadow-xl hover:border">
              -</div>
      </div>
  </div>
      `;
    }
    // show data on document

    bestSellResult.innerHTML = html;
  });
};

bestSell();
