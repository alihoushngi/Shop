// select feature section
const catFeature = document.querySelector("#feature-list");

// create feature items array json
const featureList = [
  "ارسال رایگان",
  "تضمین کیفیت",
  "ضمانت برگشت وجه",
  "پشتیبانی ۲۴ ساعته",
  "کمترین قیمت",
];
let features = "";

featureList.map((data) => {
  features += `
                  <li class="max-lg:w-32 max-lg:h-10 max-lg:text-sm max-md:w-full flex justify-center items-center w-40 h-24 rounded-md capitalize cursor-pointer transition-all duration-300 hover:shadow-custom bg-primaryColor text-white hover:text-primaryColor hover:bg-white">
                    ${data}
                  </li>
                `;
});

// select feature from array and pin to html
catFeature.innerHTML = features;
