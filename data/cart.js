export const cart = []

export function cartUpdate(productId) {
    let quant = 0;
        cart.forEach((item) => {
            quant += item.quantity;
            document.querySelector('.cart-quantity').innerHTML = quant;
            document.querySelector(`.added-to-cart-${productId}`).innerHTML = '<img class="added" src="images/icons/checkmark.png"> Added';
  
        });
        setTimeout(() => {
          document.querySelector(`.added-to-cart-${productId}`).innerHTML = '';
        },2000)
  }