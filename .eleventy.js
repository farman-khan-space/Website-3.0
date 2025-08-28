module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("js");

  return {
    dir: {
      input: "pages",
      includes: "../_includes",  // go up one level from pages/
      output: "_site"
    },
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
    pathPrefix: process.env.ELEVENTY_ENV === "production" 
      ? "/Website-3.0/" 
      : "/"   // keep localhost clean
  };
};
