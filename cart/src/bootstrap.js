import faker from 'faker';

const mount = (el) => {
  const cartText = `<div>You have ${faker.random.number(10)} items in your cart</div>`;

  el.innerHTML = cartText;
}

// para ambientes de DEV, assumimos que teremos o seletor especificado
if (process.env.NODE_ENV === 'development') {
  const el = document.querySelector('#dev-cart')
  // assumindo que nosso container não possua um elemento com id 'dev-cart'
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