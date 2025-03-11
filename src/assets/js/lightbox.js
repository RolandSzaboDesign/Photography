document.addEventListener("DOMContentLoaded", function () {
	const lightboxContainer = document.querySelector('.lightbox');
	const lightboxImage = document.querySelector('.lightbox__image');
	const lightboxCaption = document.querySelector('.lightbox__caption');
	const lightboxClose = document.querySelector('.lightbox__close');
	const lightboxButtons = document.querySelectorAll('.lightbox__arrow');
	const lightboxLeft = document.querySelector('#left');
	const lightboxRight = document.querySelector('#right');

	let lightboxArray = [];
	let activeImageIndex = 0;

	const showLightbox = () => lightboxContainer.classList.add('active');
	const hideLightbox = () => lightboxContainer.classList.remove('active');

	const updateNavButtons = () => {
		lightboxLeft.classList.toggle('hidden', activeImageIndex === 0);
		lightboxRight.classList.toggle('hidden', activeImageIndex === lightboxArray.length - 1);
	};

	const setActiveImage = (index) => {
		if (index < 0 || index >= lightboxArray.length) return;
		const link = lightboxArray[index];

		lightboxImage.src = link.href;
		lightboxImage.alt = link.title;
		lightboxCaption.textContent = link.title;
		activeImageIndex = index;
		updateNavButtons();
	};

	const showLeft = () => setActiveImage(activeImageIndex - 1);
	const showRight = () => setActiveImage(activeImageIndex + 1);

	const navigate = (direction) => direction.includes('left') ? showLeft() : showRight();

	document.addEventListener('click', (e) => {
		if (e.target.closest('.portfolio__link')) {
			e.preventDefault();
			lightboxArray = Array.from(document.querySelectorAll('.portfolio__link'));
			activeImageIndex = lightboxArray.indexOf(e.target.closest('.portfolio__link'));
			setActiveImage(activeImageIndex);
			showLightbox();
			return;
		}

		if (e.target === lightboxContainer || e.target.closest('.lightbox__close')) {
			hideLightbox();
		}

		if (e.target.closest('.lightbox__arrow')) {
			e.preventDefault();
			e.stopPropagation();
			navigate(e.target.closest('.lightbox__arrow').id);
		}
	});

	window.addEventListener('keydown', (e) => {
		if (!lightboxContainer.classList.contains('active')) return;
		if (e.key === 'ArrowLeft') showLeft();
		if (e.key === 'ArrowRight') showRight();
		if (e.key === 'Escape') hideLightbox();
	});
});
