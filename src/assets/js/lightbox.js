document.addEventListener("DOMContentLoaded", function () {
	const lightboxContainer = document.querySelector('.lightbox');
	const lightboxImage = document.querySelector('.lightbox__image');
	const lightboxCaption = document.querySelector('.lightbox__caption');
	const lightboxClose = document.querySelector('.lightbox__close');
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

		const el = lightboxArray[index];
		const href = el.getAttribute('href') || el.getAttribute('data-lightbox');
		const title = el.getAttribute('title') || el.querySelector('img')?.getAttribute('alt') || '';

		lightboxImage.src = href;
		lightboxImage.alt = title;
		lightboxCaption.textContent = title;
		activeImageIndex = index;
		updateNavButtons();
	};

	const showLeft = () => setActiveImage(activeImageIndex - 1);
	const showRight = () => setActiveImage(activeImageIndex + 1);

	const navigate = (direction) => direction.includes('left') ? showLeft() : showRight();

	document.addEventListener('click', (e) => {
		const trigger = e.target.closest('.lightbox-enabled');

		if (trigger) {
			e.preventDefault();

			lightboxArray = Array.from(document.querySelectorAll('.lightbox-enabled'))
				.filter(el => el.offsetParent !== null);

			activeImageIndex = lightboxArray.indexOf(trigger);
			setActiveImage(activeImageIndex);
			showLightbox();
			return;
		}

		if (e.target.closest('.lightbox__close') || e.target === lightboxContainer) {
			e.preventDefault();
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
