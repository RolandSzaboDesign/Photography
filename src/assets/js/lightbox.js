const lightboxEnabled = document.querySelectorAll('.portfolio__image');
const lightboxContainer = document.querySelectorAll('.lightbox');
const lightboxImage = document.querySelectorAll('.lightbox__image');

const lightboxButtons = document.querySelectorAll('.lightbox__button');
const lightboxButtonPrev = document.querySelectorAll('.lightbox__button--prev');
const lightboxButtonNext = document.querySelectorAll('.lightbox__button--next');

const showLightbox = () => { lightboxContainer.classList.add('active') }
const hideLightbox = () => { lightboxContainer.classList.remove('active') }
const setActiveImage = (image) => {
	lightboxImage.src = image.src;
}

lightboxEnabled.forEach(image => {
	image.addEventListener('click', (e) => {
		showLightbox();
		setActiveImage(image);
	})
})

lightboxContainer.addEventListener('click', () => { hideLightbox() });

lightboxButtons.forEach(btn => {
	btn.addEventListener('click', (e) => {
		https://www.youtube.com/watch?v=_h6iT2UnyVs 8:45
	})
})
