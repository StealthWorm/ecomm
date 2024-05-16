const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: 'development',
  devServer: {
    port: 8080,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    })
  ]
};

//* The "HtmlWebpackPlugin" simplifies creation of HTML files to serve your webpack bundles.
//* This is especially useful for webpack bundles that include a hash in the filename which changes every compilation.
