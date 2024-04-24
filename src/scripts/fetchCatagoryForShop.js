// select element from dom to show data
const catResult = document.querySelector("#category-result");

// create null html for data
let html = "";

// fetch data from API
fetch("https://fakestoreapi.com/products/categories")
  .then((res) => res.json())
  .then((result) => {
    result.map((item, index) => {
      html += `
      <li key="${index}">
        <input type="checkbox" name="${item}" id="${item}" />
        <label for="${item}">${item}</label>
      </li>
      `;
    });
    // assign items to document
    catResult.innerHTML = html;
  });
