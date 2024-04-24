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
      let maxDesLength = 10;
      let descriptionText = element.description;
      let desWords = descriptionText.split(" ");
      if (desWords.length > maxDesLength) {
        descriptionText = desWords.slice(0, maxDesLength).join(" ") + "...";
      }
      // set custom description to my element description
      element.description = descriptionText;

      proSection += `
      <div class="w-[32%] max-h-[inherit] min-h-[450px] flex flex-col justify-start relative items-center shadow-md px-2 py-4 rounded-md gap-2 transition-all duration-300 ease-in-out hover:shadow-lg hover:cursor-pointer">
        <div class="">
          <img src="${element.image}" alt="" class="object-cover bg-no-repeat bg-top w-full rounded-md max-h-[200px] min-h-[200px]">
        </div>
      <h4 class="text-[15px] font-bold uppercase min-h-12">${element.title}</h4>
      <span class="capitalize text-secondaryColor">قیمت : <span
              class="text-primaryColor">${element.price}$</span></span>
      <p id="description" class="text-[12px] text-justify font-thin w-[95%] mb-8">${descriptionText}</p>
      <span class="text-sm text-primaryColor absolute bottom-14 z-20"><a>${element.category}</a></span>
      <div class="flex gap-2 absolute bottom-4 z-10">
          <div
              class="text-white bg-primaryColor w-[30px] h-[30px] flex justify-center items-center text-xl rounded-md leading-[0] shadow-sm transition-all duration-300 ease-in-out cursor-pointer hover:bg-white hover:text-primaryColor hover:shadow-xl hover:border">
              +</div>
          <div
              class="bg-white w-[100px] flex justify-center items-center border rounded-md transition-all duration-300 ease-in-out grayscale hover:grayscale-0">
              <img src="../../src/assets/images/basket.png" alt=""
                  class="w-[30px]  transition-all duration-300 ease-in-out">
          </div>
          <div
              class="text-white bg-primaryColor w-[30px] h-[30px] flex justify-center items-center text-xl rounded-md leading-[0] shadow-sm transition-all duration-300 ease-in-out cursor-pointer hover:bg-white hover:text-primaryColor hover:shadow-xl hover:border">
              -</div>
      </div>
      </div>
      `;
    });
    proResult.innerHTML = proSection;
  });