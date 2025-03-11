document.addEventListener("DOMContentLoaded", function () {
	const filterButtons = document.querySelectorAll(".filter__btn");
	const portfolioLinks = document.querySelectorAll(".portfolio__link");

	filterButtons.forEach(button => {
		button.addEventListener("click", function () {
			filterButtons.forEach(btn => btn.classList.remove("filter__btn--active"));
			this.classList.add("filter__btn--active");

			const filter = this.getAttribute("data-filter");

			portfolioLinks.forEach(link => {
				const category = link.getAttribute("data-category");

				if (filter === "all" || category === filter) {
					link.style.display = "flex";
				} else {
					link.style.display = "none";
				}
			});
		});
	});
});
