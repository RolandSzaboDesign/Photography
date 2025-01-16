module.exports = function(eleventyConfig) {
	// Passthrough copy for specific files and assets
	eleventyConfig.addPassthroughCopy("src/_redirects");
	eleventyConfig.addPassthroughCopy("src/favicon.ico");
	eleventyConfig.addPassthroughCopy("src/assets");
	eleventyConfig.addPassthroughCopy("src/assets/js");

	// Watch for CSS and JS changes
	eleventyConfig.addWatchTarget("src/assets/css");
	eleventyConfig.addWatchTarget("src/assets/js");

	// Quiet mode for cleaner output
	eleventyConfig.setQuietMode(true);

	// Custom collections
	eleventyConfig.addCollection('tagList', collections => {
		const tags = collections
			.getAll()
			.reduce((tags, item) => tags.concat(item.data.tags), [])
			.filter(tag => !!tag)
			.filter(tag => tag !== 'post')
			.sort();
		return Array.from(new Set(tags));
	});

	return {
		dir: {
			input: "src",
			output: "public",
			includes: "_includes"
		}
	};
};
