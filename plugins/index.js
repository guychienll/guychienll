module.exports = function (context, options) {
  return {
    name: "docusaurus-plugin",
    configurePostCss(postcssOptions) {
      postcssOptions.plugins.push(require("@tailwindcss/postcss"));
      return postcssOptions;
    },
  };
};
