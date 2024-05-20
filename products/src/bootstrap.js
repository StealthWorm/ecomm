import faker from 'faker';

const mount = (el) => {
  let products = '';

  for (let i = 0; i < 5; i++) {
    const name = faker.commerce.productName();
    products += `<div>${name}</div>`
  }

  el.innerHTML = products
}

// para ambientes de DEV, assumimos que teremos o seletor especificado
if (process.env.NODE_ENV === 'development') {
  const el = document.querySelector('#dev-products');
  // assumindo que nosso container não possua um elemento com id 'dev-products'
  if (el) {
    // provavelmente estamos rodando no projeto isolado
    mount(el);
  }
}

/* como não temos garantia de que o container vai possuir um elemento com o ID necessário para renderizar,
   exportamos uma função que realiza essa renderização, de forma que o container decida como e quando vai montar 
   o app de produtos
*/
export { mount }