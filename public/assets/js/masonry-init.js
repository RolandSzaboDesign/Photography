var masonry = Macy({
	container: ".masonry",
	mobileFirst: true,
	columns: 2,
	breakAt: {
		768: {
			columns: 3
		},
		1200: {
			columns: 4
		}
	},
	margin: 16,
	cancelLegacy: true
});
