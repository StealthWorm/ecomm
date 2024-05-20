const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
  mode: 'development',
  devServer: {
    port: 8082,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new ModuleFederationPlugin({
      //para "Remotes", é preciso setar um nome, que será utilizado para idetificar a conexão no "Host" -> 'products@http://localhost:8081/remoteEntry.js', se fosse "productsApp", ficaria "productsApp@http..."
      name: 'cart',
      filename: 'remoteEntry.js', // nome do arquivo de manifesto, que conterá as instruções para carregar os arquivos deste projeto no Host
      exposes: {
        './CartShow': './src/bootstrap' // "CartIndex" é o alias para o arquivo exposto
      },
      // especifica para o "ModuleFederation" que ele deve compartilhar esse módulo, ou seja, vai tentar verificar se 
      // existem outros projetos "Remotes" que utilizam esse recurso, de modo que ele inclua esse indice apenas uma vez
      // no Host, ao invés de uma vez por projeto

      shared: ['faker'],
      // shared: {
      //   faker: {
      // esse tipo de sintaxe, em forma de objeto, define que sempre criará apenas uma cópia do faker, não importa se tiver versões ou configs diferentes por projeto, poderá gerar warnings no console
      // singleton: true
      // }
      // },
    })
  ]
};

//* The "HtmlWebpackPlugin" simplifies creation of HTML files to serve your webpack bundles.
//* This is especially useful for webpack bundles that include a hash in the filename which changes every compilation.
