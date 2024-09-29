module.exports = function (eleventyConfig) {
    // Allow passthrough copy
    eleventyConfig.addPassthroughCopy("src/assets/fonts");
    eleventyConfig.addPassthroughCopy("src/assets/images");
    eleventyConfig.addPassthroughCopy("src/assets/js");

    // Change eleventy defaults
    return {
        dir: {
            input:              "src",
            output:             "public",
            data:               "_data",
            includes:           "_includes",
			layouts:            "_includes/layouts",
        },
    };
};
