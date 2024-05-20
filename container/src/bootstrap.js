//"ProductsIndex" is the exposed index from the products remote webpack
// a key "products" deve coincidir com a chave declarada dentro do objeto de "remotes" do webpack.config
// webpack vai tentar encontrar o "ProductsIndex" dentro do arquivo de manifesto "remoteEntry"
// permite ao webpack carregar JS adicional de forma assincrona
import 'products/ProductsIndex';
import 'cart/CartShow';

console.log('container')