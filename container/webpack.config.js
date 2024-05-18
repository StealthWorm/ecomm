const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
  mode: 'development',
  devServer: {
    port: 8080,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new ModuleFederationPlugin({
      name: 'container', // não é necessário para o "Host", apenas para os "Remotes"
      remotes: { //Lista os projetos que o container pode procurar por código adicional
        products: 'products@http://localhost:8081/remoteEntry.js'
      }
    })
  ]
};

//* The "HtmlWebpackPlugin" simplifies creation of HTML files to serve your webpack bundles.
//* This is especially useful for webpack bundles that include a hash in the filename which changes every compilation.
