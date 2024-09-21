module.exports = function (eleventyConfig) {
    return {
        dir: {
            input: "src",
            output: "public",
        },
        markdownTemplateEngine: 'njk',
        dataTemplateEngine: 'njk',
        htmlTemplateEngine: 'njk',
    };
};
