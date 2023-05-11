
const categoriesEl = document.querySelectorAll("#categories .item");

console.log(`Number of categories: ${categoriesEl.length}`);

categoriesEl.forEach((element) => {
  const nameOfCategoryEL = element.querySelector("h2");
  const numberOfEl = element.querySelectorAll("ul > li");
  console.log(`Category: ${nameOfCategoryEL.textContent}`);
  console.log(`Elements: ${numberOfEl.length}`);
});
