// docs: https://www.11ty.io/docs/config/

module.exports = function (eleventyConfig) {
  // eleventyConfig.addFilter( "myFilter", function() {});
  eleventyConfig.addCollection("tagList", require("./_11ty/get-tag-list"));

  eleventyConfig.addPassthroughCopy("img");

  eleventyConfig.addCollection("featuredWork", function (collection) {
    return collection
      .getAll()
      .filter(function (item) {
        return item.data.order !== undefined && item.data.tags.includes("work");
      })
      .sort(function (a, b) {
        return a.data.order - b.data.order;
      });
  });

  eleventyConfig.addCollection("furtherWork", function (collection) {
    return collection
      .getAll()
      .filter(function (item) {
        return (
          item.data.order !== undefined &&
          item.data.tags.includes("furtherwork")
        );
      })
      .sort(function (a, b) {
        return a.data.order - b.data.order;
      });
  });

  return {
    templateFormats: ["md", "njk", "html"],

    markdownTemplateEngine: "liquid",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
    passthroughFileCopy: true,
    dir: {
      input: "src",
      output: "_site",
    },
  };
};
