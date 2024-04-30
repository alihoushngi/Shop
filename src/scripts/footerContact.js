// get footer section from html
const footerContactSection = document.querySelector("#footer-contact");
console.log(footerContactSection.innerHTML);

// create list for social media
let socialMediaArray = [
  {
    icon: "../src/assets/images/linkedin.png",
    link: "https://www.linkedin.com/in/alihoushangi/",
  },
  {
    icon: "../src/assets/images/telegram.png",
    link: "https://t.me/Alihoushangi",
  },
  {
    icon: "../src/assets/images/instagram.png",
    link: "https://www.instagram.com/alihoushngii/",
  },
  {
    icon: "../src/assets/images/github.png",
    link: "https://github.com/alihoushngi",
  },
];

// create html for assign social media to my footer
let socialMedia = "";

socialMediaArray.map((data) => {
  console.log(data);
  socialMedia += `
  <a href="${data.link}">
    <img class="bg-white p-2 rounded-md transition-all duration-300 hover:shadow-custom" src="${data.icon}" width="40"/>
  </a>
  `;
});
footerContactSection.innerHTML = socialMedia;
