class Cart{
    cartItem = undefined;
    localStorageKey = undefined;

    constructor(){ // Constructor is a special method that gets called when an object is created
        this.cartItem = [];
        this.localStorageKey = 'cart';
        console.log('Cart created');
        console.log(this.addToCart('e43638ce-6aa0-4b85-b27f-e1d07eb678c6'));
        console.log(this.cartItem());
    }

    cartStorage(){
        localStorage.setItem(this.localStorageKey, JSON.stringify(this.cartItem));
}
addToCart(productId) {
    let match;
    let select = document.querySelector(`.js-quant-select-${productId}`);
    
    if (select) {
            const quantity = Number(select.value);
            match = this.cartItem.find(item => item.productId === productId);
            
            if (match) {
                match.quantity += Number(quantity);
                console.log(this.cartItem);
            } else {
                this.cartItem.push({
                    productId: productId,
                    quantity: quantity,
                    deliveryOption: 1
                })
                console.log(this.cartItem);          
              };
              cartStorage();
    } else {
        console.error(`Element with class .js-quant-select-${productId} not found.`);
    }
  }
  addCart(){
    let quant = 0;
          this.cartItem.forEach((item) => {
              quant += Number(item.quantity);
  })
    return quant;}
  
    cartUpdate(productId) {
        let quant = addCart(productId);
          this.cartItem.forEach(() => {
              document.querySelector('.cart-quantity').innerHTML = quant;
              document.querySelector(`.added-to-cart-${productId}`).innerHTML = '<img class="added" src="images/icons/checkmark.png"> Added';
    
          });
          setTimeout(() => {
            document.querySelector(`.added-to-cart-${productId}`).innerHTML = '';
          },2000);
  
        return quant;
        }

        delCart(productId) {
            let newCart = [];
          
            this.cartItem.forEach((item) => {
              if (item.productId !== productId) {
                newCart.push(item);
              }
            });
            this.cartItem = newCart;
            cartStorage();
          }
}

const cart = new Cart();
cart.localStorageKey = 'cart';

cart.cartStorage()
console.log(cart.cartItem);