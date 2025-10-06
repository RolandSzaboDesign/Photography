const hero = document.querySelector('.hero');
const slides = hero.querySelectorAll('.slide');
const dots = hero.querySelectorAll('.dot');

let current = 0;
let timer;
const delay = 4500; // 4.5s

// Dotokra kattintás
dots.forEach((dot, i) => {
	dot.addEventListener('click', () => goToSlide(i));
});

// Slide-váltás
function goToSlide(index) {
	slides[current].classList.remove('slide--active');
	dots[current].classList.remove('dot--active');

	current = (index + slides.length) % slides.length;

	slides[current].classList.add('slide--active');
	dots[current].classList.add('dot--active');

	resetTimer();
}

// Autoplay
function nextSlide() { goToSlide(current + 1); }
function resetTimer() {
	clearTimeout(timer);
	timer = setTimeout(nextSlide, delay);
}

// Touch (mobil) támogatás
let startX = 0;
window.addEventListener('touchstart', e => startX = e.touches[0].clientX);
window.addEventListener('touchend', e => {
	const endX = e.changedTouches[0].clientX;
	if (endX - startX > 50) goToSlide(current - 1);
	if (startX - endX > 50) goToSlide(current + 1);
});

// Init with slight delay
setTimeout(() => {
	goToSlide(0);
}, 100);
