// docs: https://www.11ty.io/docs/config/

module.exports = function(eleventyConfig) {
  // eleventyConfig.addFilter( "myFilter", function() {});
  eleventyConfig.addCollection("tagList", require("./_11ty/get-tag-list"));

  eleventyConfig.addPassthroughCopy("img");

  return {
    templateFormats: ["md", "njk", "html"],

    markdownTemplateEngine: "liquid",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
    passthroughFileCopy: true,
    dir: {
      input: "src",
      output: "_site"
    }
  };
};
