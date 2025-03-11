document.addEventListener("DOMContentLoaded", function () {
	const filterButtons = document.querySelectorAll(".filter__btn");
	const portfolioItems = document.querySelectorAll(".portfolio__image");

	filterButtons.forEach(button => {
		button.addEventListener("click", function () {
			filterButtons.forEach(btn => btn.classList.remove("filter__btn--active"));
			this.classList.add("filter__btn--active");

			const filter = this.getAttribute("data-filter");

			portfolioItems.forEach(item => {
				const category = item.getAttribute("data-category");

				if (filter === "all" || category === filter) {
					item.style.display = "flex";
				} else {
					item.style.display = "none";
				}
			});
		});
	});
});
