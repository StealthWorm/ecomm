//"ProductsIndex" is the exposed index from the products remote webpack
// a key "products" deve coincidir com a chave declarada dentro do objeto de "remotes" do webpack.config
// webpack vai tentar encontrar o "ProductsIndex" dentro do aqruivo de manifesto "remoteEntry"
import 'products/ProductsIndex';

console.log('container')