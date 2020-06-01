module.exports = function(eleventyConfig) {
    eleventyConfig.setTemplateFormats([
      "md",
      "njk",
      "html",
      "css"
    ]);
    eleventyConfig.addPassthroughCopy('images');
    eleventyConfig.addPassthroughCopy('tarteaucitron');
    eleventyConfig.addPassthroughCopy('main.js');
  };