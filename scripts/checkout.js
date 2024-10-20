import { cart,delCart,addCart, cartStorage } from "../data/cart.js";
import { products } from "../data/products.js";
import { money } from "./util/price.js"; //single dot means current directory
import dayjs from "https://unpkg.com/dayjs@1.11.10/esm/index.js";
import {updateQuery} from "./util/queries.js";
import {delivery} from "../data/deleivery.js";

function totalPrice(){
  let total = 0;
  cart.forEach((item) => {
    const product = item.productId;
    let match;
    products.forEach((prod) => {
      if (prod.id === product) {
        match = prod;
      }
    });
    total += Number(match.priceCents * item.quantity);
  });
  return (total/100).toFixed(2);
}

export function itemUpdate(){
  document.querySelector('.payment-summary-money').innerHTML = `
  <div>Items (${addCart()})</div>`
}

export function totalUpdate(){
  let tax = (totalPrice() * 0.1).toFixed(2);
  let total = (Number(totalPrice()) + Number(tax)).toFixed(2);
  document.querySelector('.subtotal-row').innerHTML = `
      <div>Total before tax:</div>
      <div class="payment-summary-money">$${totalPrice()}</div>`

  document.querySelector('.js-tax').innerHTML = `
      <div>Estimated tax (10%):</div>
      <div class="payment-summary-money">$${tax}</div>`;
  document.querySelector('.total-row').innerHTML = `
      <div>Order total:</div>
      <div class="payment-summary-money">$${total}</div>
    `

}

  let newHtml = '';
  cart.forEach((item) => {
      const product = item.productId;
      let match;
      products.forEach((prod) => {
          if (prod.id === product) {
              match = prod;
          }
      });
      document.querySelector('.checkout-header-middle-section').innerHTML = `Checkout (${addCart()})`;

      const deliveryId = item.deliveryOption;
      let deliveryOption;
      delivery.forEach((item) => {
          if (item.id === deliveryId) {
              deliveryOption = item;
          }
      });
      const today = dayjs().add(deliveryOption.delivery, 'day').format('dddd, MMMM D');

      newHtml += `          
          <div class="cart-item-container js-del-${product}">
              <div class="delivery-date">
                Delivery date: ${today}
              </div>

              <div class="cart-item-details-grid">
                <img class="product-image"
                  src="${match.image}">

                <div class="cart-item-details">
                  <div class="product-name">
                    ${match.name}
                  </div>
                  <div class="product-price">
                      $${money(match.priceCents)}
                  </div>
                  <div class="product-quantity">
                    <span>
                      Quantity: <span class="quantity-label">${item.quantity}</span>
                    </span>
                    <span class="update-quantity-link link-primary" data-product-Id = "${product}">
                      Update
                    </span>
                    <span class="delete-quantity-link link-primary" data-product-Id = "${product}">
                      Delete
                    </span>
                  </div>
                </div>

                <div class="delivery-options">
                  ${deliveryDate(product,item.deliveryOption)}
                  </div>
                </div>
              </div>
            </div>`

  })

  document.querySelector('.order-summary').innerHTML = newHtml;

document.querySelectorAll('.delete-quantity-link').forEach((link) => {
    link.addEventListener('click', () => {
        const productId = link.getAttribute('data-product-id');
        //delete cart[cart.findIndex((item) => item.productId === productId)]; no idea why this doesn't work
        delCart(productId);
        document.querySelector('.js-del-' + productId).remove();
        document.querySelector('.checkout-header-middle-section').innerHTML = `Checkout (${addCart()})`;
        itemUpdate();
        totalUpdate();
    });
});

function deliveryDate(product) {
  let newHtml = `
    <div class="delivery-options-header">
      Delivery options
    </div>
  `;

  delivery.forEach((item,option) => {
    const today = dayjs().add(item.delivery, 'day').format('dddd, MMMM D');
    const price = item.price === 0 ? 'FREE Shipping' : `$${item.price} - Shipping`;
    const check = item.id === 1 ? 'checked' : '';

    newHtml += `       
    <div class="delivery-option">            
      <input type="radio" ${check}  
        class="delivery-option-input"
        name="delivery-${product}">
      <div>
        <div class="delivery-option-date">
          ${today}
        </div>
        <div class="delivery-option-price">
          ${price}
        </div>
      </div>
    </div>
  `
  });
  totalUpdate();
  itemUpdate();
  return newHtml;
}

function completeTotal(){
  
}

updateQuery(cart);
itemUpdate();
totalUpdate();
completeTotal();