import { cart,delCart,addCart, cartStorage } from "../data/cart.js";
import { products,loadProduct } from "../data/products.js";
import { money } from "./util/price.js"; //single dot means current directory
import dayjs from "https://unpkg.com/dayjs@1.11.10/esm/index.js";
import {updateQuery} from "./util/queries.js";
import {delivery} from "../data/deleivery.js";

new Promise((resolve)=>{
  loadProduct(()=>{
    resolve();
  })
}).then(()=>{
  cart.forEach((item) => {
    let product = item.productId;
    deliveryDate(product);
    date_change();
  })
  totalPrice();
  totalUpdate();
  itemUpdate();
  updateQuery(cart);

  chec();
  
})
let ShippingCost = {}

function match_product(product) {
  return products.find((prod) => prod.id === product);
}

function totalPrice(){
  let total = 0;
  cart.forEach((item) => {
    const product = item.productId;
    let match = match_product(product);
    total += Number(match.priceCents * item.quantity);
  });
  return (total/100).toFixed(2);
}

export function itemUpdate(){
  document.querySelector('.js-total').innerHTML = `
  <div>Items (${addCart()})</div>
  <div class="payment-summary-money">$${Number(totalPrice())}</div>
  `
}

export function totalUpdate(){
  let tax = (totalPrice() * 0.1).toFixed(2);
  let total = (Number(totalPrice()) + Number(tax) + Number(costCal(ShippingCost))).toFixed(2);
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
  document.querySelector('.js-shipping').innerHTML = `
      <div>Shipping &amp; handling:</div>
      <div class="payment-summary-money">$${Number(costCal(ShippingCost))}</div>
    `
}

function chec(){
  let newHtml = '';
  cart.forEach((item) => {
      const product = item.productId;
      let match = match_product(product);
      document.querySelector('.checkout-header-middle-section').innerHTML = `Checkout (${addCart()})`;

      const deliveryId = item.deliveryOption;
      let deliveryOption;
      delivery.forEach((item) => {
          if (item.id === deliveryId) {
              deliveryOption = item;
          }
      });
      let today = deliveryOption ? dayjs().add(deliveryOption.delivery, 'day').format('dddd, MMMM D') : 'N/A';

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
}


document.querySelectorAll('.delete-quantity-link').forEach((link) => {
    link.addEventListener('click', () => {
        const productId = link.getAttribute('data-product-id');
        //delete cart[cart.findIndex((item) => item.productId === productId)]; no idea why this doesn't work
        delCart(productId);
        document.querySelector('.js-del-' + productId).remove();
        document.querySelector('.checkout-header-middle-section').innerHTML = `Checkout (${addCart()})`;
        itemUpdate();
        totalUpdate()
    });
});

function deliveryDate(product) {
  let newHtml = `
    <div class="delivery-options-header">
      Delivery options
    </div>
  `;

  delivery.forEach((item) => {
    const today = dayjs().add(item.delivery, 'day').format('dddd, MMMM D');
    const price = item.price === 0 ? 'FREE Shipping' : `$${item.price} - Shipping`;
    let check = '';
    cart.forEach((items) => {
      if (items.productId === product) {
        items.deliveryOption = items.deliveryOption ? items.deliveryOption : 1;
        check = item.id === items.deliveryOption ? 'checked' : '';
      }
    });

    newHtml += `       
    <div class="delivery-option" data-option-id="${item.id}">            
      <input type="radio" ${check}  
        class="delivery-option-input"
        name="delivery-${product}"
        data-product-id="${product}"
        data-option-id="${item.id}">
      <div>
        <div class="delivery-option-date">
          ${today}
        </div>
        <div class="delivery-option-price">
          ${price}
        </div>
      </div>
    </div>
  `;
  });
  return newHtml;
}

function date_change(){
  document.querySelectorAll('.delivery-option-input').forEach((input) => {
    input.addEventListener('change', () => {
      const productId = input.getAttribute('data-product-id');
      const optionId = input.getAttribute('data-option-id');
      cart.forEach((item) => {
        if (item.productId === productId) {
          item.deliveryOption = parseInt(optionId);
        }
      });
      const deliveryOption = delivery.find((item) => item.id === parseInt(optionId));
      const newDate = deliveryOption ? dayjs().add(deliveryOption.delivery, 'day').format('dddd, MMMM D') : 'N/A';
      ShippingCost[productId] = deliveryOption.price;   
      document.querySelector(`.js-del-${productId} .delivery-date`).innerText = `Delivery date: ${newDate}`;
      document.querySelector('.js-shipping').innerHTML = `<div>Shipping &amp; handling:</div>
              <div class="payment-summary-money">$${Number(costCal(ShippingCost))}</div>`
      updateQuery(cart);
      itemUpdate();
      totalUpdate();
      cartStorage();
    });
  });
}

function costCal(ShippingCost){
  let x = 0
  for(let [key,value] of Object.entries(ShippingCost)){
    x = x + value;
}
return Number(x.toFixed(2));
}
