const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
  mode: 'development',
  devServer: {
    port: 8081,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new ModuleFederationPlugin({
      //para "Remotes", é preciso setar um nome, que será utilizado para idetificar a conexão no "Host" -> 'products@http://localhost:8081/remoteEntry.js', se fosse "productsApp", ficaria "productsApp@http..."
      name: 'products',
      filename: 'remoteEntry.js', // nome do arquivo de manifesto, que conterá as instruções para carregar os arquivos deste projeto no Host
      exposes: {
        './ProductsIndex': './src/index' // "ProductsIndex" é o alias para o arquivo exposto
      }
    })
  ]
};

//* The "HtmlWebpackPlugin" simplifies creation of HTML files to serve your webpack bundles.
//* This is especially useful for webpack bundles that include a hash in the filename which changes every compilation.
