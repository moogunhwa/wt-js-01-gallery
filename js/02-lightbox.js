import { galleryItems } from './gallery-items.js';

const galleryContainer = document.querySelector('.gallery');

function createElementMarkup(markup) {
  return markup
    .map(({ description, preview, original }) => {
      return `
    <li class="gallery__item">
    <a class="gallery__link" href="${original}">
        <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
        />
    </a>
</li>
`;
    })
    .join('');
}

galleryContainer.insertAdjacentHTML(
  'beforeend',
  createElementMarkup(galleryItems),
);

new SimpleLightbox('.gallery a', {
  captionDelay: 250,
  captionsData: 'alt',
});

console.log(galleryItems);