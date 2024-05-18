// * esse arquivo serve para o Webpack entender que é preciso carregar conteudos do módulo de Produtos antes de rodar o index.js do projeto em si
// * permite ao Webpack de resgatar JS adicional, garantindo que teremos o projeto de Produtos ou o Faker.js prontos, antes de usarmos eles
import('./bootstrap');