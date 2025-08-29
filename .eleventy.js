module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("js");
  eleventyConfig.addPassthroughCopy("img");

  // Add this line to create the 'limit' filter
  eleventyConfig.addFilter("limit", (arr, limit) => (arr || []).slice(0, limit));

  return {
    dir: {
      input: "pages",
      includes: "../_includes",
      output: "_site"
    },
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
    pathPrefix: process.env.ELEVENTY_ENV === "production" 
      ? "/Website-3.0/" 
      : "/"
  };
};