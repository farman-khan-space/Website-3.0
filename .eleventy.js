module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("js");
  eleventyConfig.addPassthroughCopy("img");

  eleventyConfig.addFilter("limit", (arr, limit) => (arr || []).slice(0, limit));

  // Create a collection for posts
  eleventyConfig.addCollection("posts", function(collectionApi) {
    return collectionApi.getFilteredByTags("posts").reverse();
  });

  // Create a collection for projects
  eleventyConfig.addCollection("projects", function(collectionApi) {
    return collectionApi.getFilteredByTags("projects").reverse();
  });

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