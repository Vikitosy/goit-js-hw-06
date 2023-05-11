

const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const galleryEl = document.querySelector(".gallery");
const imageCards = images
  .map(
    (image) =>
      `<li><img src=${image.url} alt=${image.alt} width="400"></img></li>`
  )
  .join("");
galleryEl.insertAdjacentHTML("beforeend", imageCards);
galleryEl.style =
  "display:flex;justify-content:center;list-style:none;gap:10px;";
// galleryEl.style.display = 'flex';
// galleryEl.style.justifyContent = 'center';
// galleryEl.style.listStyle = "none";
// galleryEl.style.gap = "10px";
