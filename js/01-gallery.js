import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryEl = document.querySelector(".gallery");
const lightBox = basicLightbox.create(`<img class="originalImage" src="" >`);
const originalSizeImage = lightBox.element().querySelector(".originalImage");

galleryEl.innerHTML = createGalleryMarkup(galleryItems);

galleryEl.addEventListener("click", onImageClick);

function createGalleryMarkup(galleryItems) {
  const markup = galleryItems
    .map(
      (item) =>
        `<li class="gallery__item"><img class="gallery__image" src="${item.preview}" alt="${item.description}" data-original-src="${item.original}" /></li>`
    )
    .join("");

  return `<ul class='gallery__list'>${markup}</ul>`;
}

function onImageClick(event) {
  originalSizeImage.src = event.target.dataset.originalSrc;

  lightBox.show();
}
