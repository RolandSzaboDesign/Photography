const portfolioImage = document.querySelectorAll('.portfolio__link');
const lightboxEnabled = document.querySelectorAll('.portfolio__image');
const lightboxArray = Array.from(lightboxEnabled);
const lastImage = lightboxArray.length - 1;
const lightboxContainer = document.querySelector('.lightbox');
const lightboxImage = document.querySelector('.lightbox__image');
const lightboxCaption = document.querySelector('.lightbox__caption');
const lightboxClose = document.querySelector('.lightbox__close');
const lightboxButtons = document.querySelectorAll('.lightbox__arrow');
const lightboxLeft = document.querySelector('#left');
const lightboxRight = document.querySelector('#right');
let activeImage;

const removeButtonInactiveClass = () => {
	lightboxButtons.forEach(btn => {
		btn.classList.remove('hidden');
	})
}

const setActiveImage = (image) => {
	lightboxImage.src = image.src;
	lightboxImage.alt = image.alt;
	lightboxCaption.innerHTML = image.alt;
	activeImage = lightboxArray.indexOf(image);
	removeButtonInactiveClass();

	switch (activeImage) {
		case 0:
			lightboxLeft.classList.add('hidden');
			break;
		case lastImage:
			lightboxRight.classList.add('hidden');
			break;
		default:
			lightboxButtons.forEach(btn => {
			removeButtonInactiveClass();
		})
	}
}

const showLightbox = () => { lightboxContainer.classList.add('active') }
const hideLightbox = () => { lightboxContainer.classList.remove('active') }

const showLeft = () => { activeImage === 0 ? setActiveImage(lightboxArray[lastImage]) : setActiveImage(lightboxArray[--activeImage]) }
const showRight = () => { activeImage === lastImage ? setActiveImage(lightboxArray[0]) : setActiveImage(lightboxArray[++activeImage]) }

const navigate = (direction) => {
	direction.includes('left') ? showLeft() : showRight();
}

lightboxEnabled.forEach(image => {
	image.addEventListener('click', (e) => {
		showLightbox();
		setActiveImage(image);
	})
})

lightboxContainer.addEventListener('click', () => {
	hideLightbox();
})

lightboxClose.addEventListener('click', (e) => {
	e.preventDefault();
	hideLightbox();
})

lightboxButtons.forEach(btn => {
	btn.addEventListener('click', (e) => {
		e.preventDefault();
		e.stopPropagation();
		navigate(e.currentTarget.id);
	})
})

portfolioImage.forEach(link => {
	link.addEventListener('click', (e) => {
		e.preventDefault();
	})
})

window.addEventListener('keydown', (e) => {
	if(!lightboxContainer.classList.contains('active')) return;
	if(e.key.includes('Left') || e.key.includes('Right')) {
		e.preventDefault();
		navigate(e.key.toLowerCase());
	}
	if(e.key.includes('Esc')) {
		e.preventDefault();
		hideLightbox();
	}
})

