(() => {
	const header = document.querySelector(".site-header");
	const navToggle = document.querySelector(".site-header__toggle");
	const nav = document.querySelector(".site-nav");

	if (!header || !navToggle || !nav) {
		return;
	}

	const navLabel = navToggle.querySelector(".js-site-header-toggle-label");
	const desktopMedia = window.matchMedia("(min-width: 900px)");

	const isMenuOpen = () => navToggle.getAttribute("aria-expanded") === "true";

	const setMenuState = (isOpen, returnFocus = false) => {
		navToggle.setAttribute("aria-expanded", String(isOpen));
		nav.classList.toggle("site-nav--open", isOpen);

		if (navLabel) {
			navLabel.textContent = isOpen ? navToggle.dataset.closeLabel : navToggle.dataset.openLabel;
		}

		if (returnFocus) {
			navToggle.focus();
		}
	};

	navToggle.addEventListener("click", () => {
		setMenuState(!isMenuOpen());
	});

	document.addEventListener("keydown", (event) => {
		if (event.key === "Escape" && isMenuOpen()) {
			setMenuState(false, true);
		}
	});

	nav.addEventListener("click", (event) => {
		if (event.target.closest("a")) {
			setMenuState(false);
		}
	});

	document.addEventListener("click", (event) => {
		if (isMenuOpen() && !header.contains(event.target)) {
			setMenuState(false);
		}
	});

	header.addEventListener("focusout", () => {
		requestAnimationFrame(() => {
			if (isMenuOpen() && !header.contains(document.activeElement)) {
				setMenuState(false);
			}
		});
	});

	desktopMedia.addEventListener("change", (event) => {
		if (event.matches && isMenuOpen()) {
			setMenuState(false);
		}
	});
})();
