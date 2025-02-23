module.exports = function (context, options) {
  return {
    name: "docusaurus-postcss-plugin",
    configurePostCss(postcssOptions) {
      postcssOptions.plugins.push(require("@tailwindcss/postcss"));
      return postcssOptions;
    },
  };
};
