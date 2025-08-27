module.exports = function(eleventyConfig) {
  // Tell Eleventy to copy the 'css' folder to the output folder '_site'.
  eleventyConfig.addPassthroughCopy("css");

  return {
    // The directory where your page templates are located.
    dir: {
      input: "pages",
      includes: "../_includes", // Relative to input directory
      output: "_site"
    },
    // This is the fix: Set Nunjucks as the template engine for HTML files.
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk"
  };
};
