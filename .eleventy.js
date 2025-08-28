module.exports = function(eleventyConfig) {
  // Copy the 'css' and 'js' folders to the output folder '_site'.
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("js");

  return {
    dir: {
      input: "pages",
      includes: "../_includes",
      output: "_site"
    },
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk"
  };
};
