export let cart = JSON.parse(localStorage.getItem('cart')) || [];

export function cartStorage(){
  localStorage.setItem('cart', JSON.stringify(cart));
}

export function addToCart(productId) {
  let match;
  let select = document.querySelector(`.js-quant-select-${productId}`);
  
  if (select) {
          const quantity = Number(select.value);
          match = cart.find(item => item.productId === productId);
          
          if (match) {
              match.quantity += quantity;
              console.log(cart);
          } else {
              cart.push({
                  productId: productId,
                  quantity: quantity,
                  deliveryOption: 1
              })
              console.log(cart);          
            };
            cartStorage();
  } else {
      console.error(`Element with class .js-quant-select-${productId} not found.`);
  }
}

export function addCart(){
  let quant = 0;
        cart.forEach((item) => {
            quant += Number(item.quantity);
})
  return quant;}

export function cartUpdate(productId) {
      let quant = addCart(productId);
        cart.forEach(() => {
            document.querySelector('.cart-quantity').innerHTML = quant;
            document.querySelector(`.added-to-cart-${productId}`).innerHTML = '<img class="added" src="images/icons/checkmark.png"> Added';
  
        });
        setTimeout(() => {
          document.querySelector(`.added-to-cart-${productId}`).innerHTML = '';
        },2000);

      return quant;
      }

export function delCart(productId) {
  let newCart = [];

  cart.forEach((item) => {
    if (item.productId !== productId) {
      newCart.push(item);
    }
  });
  cart = newCart;
  cartStorage();
}
