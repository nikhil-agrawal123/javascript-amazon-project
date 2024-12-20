import {cartUpdate, addToCart} from '../data/cart.js';
import {products,loadProduct} from '../data/products.js';

new Promise((resolve)=>{
  loadProduct(()=>{
    resolve();
  })
}).then(()=>{
  console.log(products);
  main();
})

function main(){
  let productsHtml = '';
  products.forEach((product)=>{
      productsHtml += `
          <div class="product-container">
            <div class="product-image-container">
              <img class="product-image"
                src=${product.image}>
            </div>
  
            <div class="product-name limit-text-to-2-lines">
              ${product.name}
            </div>
  
            <div class="product-rating-container">
              <img class="product-rating-stars"
                src="${product.getStars()}">
              <div class="product-rating-count link-primary">
                ${product.rating.count}
              </div>
            </div>
  
            <div class="product-price">
              $${product.getPrice()}
            </div>
  
            <div class="product-quantity-container">
              <select class='js-quant-select-${product.id}'>
                <option selected value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
            </div>
  
            ${product.chart()}
  
            <div class="product-spacer"></div>
  
            <div class="added-to-cart-${product.id} added-to-cart">
            </div>
  
            <button class="add-to-cart-button button-primary js-add-to-cart-button"
            data-product-id = "${product.id}">
              Add to Cart
            </button>
          </div>
      `
  })
  
  
  document.querySelector('.products-grid').innerHTML = productsHtml;
  document.querySelectorAll('.js-add-to-cart-button').forEach((button) => {
    button.addEventListener('click', () => {
        const productId = button.dataset.productId; // dataset helps to get the data stored in the HTML and help to call it in the JS
        addToCart(productId);
        cartUpdate(productId);
        
    });
  });
  
}
