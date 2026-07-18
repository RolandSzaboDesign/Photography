module.exports = function (eleventyConfig) {
	eleventyConfig.addPassthroughCopy("src/_headers");
	eleventyConfig.addPassthroughCopy("src/_redirects");
	eleventyConfig.addPassthroughCopy("src/favicon.ico");
	eleventyConfig.addPassthroughCopy("src/assets");

	eleventyConfig.addWatchTarget("src/assets/css");
	eleventyConfig.addWatchTarget("src/assets/js");
	eleventyConfig.addWatchTarget("src/_data");

	eleventyConfig.addFilter("jsonLd", (value) => {
		const serialized = JSON.stringify(value);

		if (serialized === undefined) {
			return "null";
		}

		return serialized
			.replace(/</g, "\\u003c")
			.replace(/>/g, "\\u003e")
			.replace(/&/g, "\\u0026")
			.replace(/\u2028/g, "\\u2028")
			.replace(/\u2029/g, "\\u2029");
	});

	eleventyConfig.setQuietMode(true);

	return {
		dir: {
			input: "src",
			output: "public",
			includes: "_includes",
		},
	};
};
