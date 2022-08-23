module.exports = function(eleventyConfig) {
	eleventyConfig.addPassthroughCopy("src/_redirects");
	eleventyConfig.addPassthroughCopy("src/assets");
	eleventyConfig.addWatchTarget("src/assets/css");
	eleventyConfig.setQuietMode(true);

	eleventyConfig.addCollection('tagList', collections => {
		const tags = collections
			.getAll()
			.reduce((tags, item) => tags.concat(item.data.tags), [])
			.filter(tag => !!tag)
			.filter(tag => tag !== 'post')
			.sort();
		return Array.from(new Set(tags))
	});

	return {
		dir: {
			input: "src",
			output: "public",
			includes: "_includes"
		}
	};
};
