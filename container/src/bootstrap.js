//"ProductsIndex" is the exposed index from the products remote webpack
// a key "products" deve coincidir com a chave declarada dentro do objeto de "remotes" do webpack.config
// webpack vai tentar encontrar o "ProductsIndex" dentro do arquivo de manifesto "remoteEntry"
// permite ao webpack carregar JS adicional de forma assincrona
import { mount as productsMount } from 'products/ProductsIndex';
import { mount as cartMount } from 'cart/CartShow';

console.log('container');

productsMount(document.querySelector('#products-list'));
cartMount(document.querySelector('#my-cart'));