import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryEl = document.querySelector(".gallery");
const lightBox = basicLightbox.create(`<img class="originalImage" src="" >`);
const originalSizeImage = lightBox.element().querySelector(".originalImage");

galleryEl.innerHTML = createGalleryMarkup(galleryItems);

galleryEl.addEventListener("click", onImageClick);
document.addEventListener("keydown", onEscapeKey);

function createGalleryMarkup(galleryItems) {
  const markup = galleryItems
    .map(
      (item) =>
        `<div class="gallery__item">
        <a class="gallery__link" href="${item.original}">
          <img
            class="gallery__image"
            src="${item.preview}"
            data-source="${item.original}"
            alt="${item.description}"
          />
        </a>
      </div>`
    )
    .join("");

  return markup;
}

function onImageClick(event) {
  event.preventDefault();
  originalSizeImage.src = event.target.dataset.source;
  lightBox.show();
}

function onEscapeKey(event) {
  if (event.key !== "Escape") {
    return;
  }

  if (!lightBox.visible()) {
    return;
  }

  lightBox.close();
}
