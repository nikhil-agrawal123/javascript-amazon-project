import { cart,delCart,addCart, cartStorage } from "../data/cart.js";
import { products } from "../data/products.js";
import { money } from "./util/price.js"; //single dot means current directory

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

function itemUpdate(){
  document.querySelector('.payment-summary-money').innerHTML = `
  <div>Items (${addCart()})</div>`
}

function totalUpdate(){
  document.querySelector('.subtotal-row').innerHTML = `
      <div>Total before tax:</div>
      <div class="payment-summary-money">$${totalPrice()}</div>`

  document.querySelector('.js-tax').innerHTML = `
      <div>Estimated tax (10%):</div>
      <div class="payment-summary-money">$${(totalPrice() * 0.1).toFixed(2)}</div>`;
  
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


      newHtml += `          
          <div class="cart-item-container js-del-${product}">
              <div class="delivery-date">
                Delivery date: Tuesday, June 21
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
                  <div class="delivery-options-title">
                    Choose a delivery option:
                  </div>
                  <div class="delivery-option">
                    <input type="radio" checked
                      class="delivery-option-input"
                      name="delivery-${product}">
                    <div>
                      <div class="delivery-option-date">
                        ${dayjs().add(5, 'day').format('dddd, MMMM D')}
                      </div>
                      <div class="delivery-option-price">
                        FREE Shipping
                      </div>
                    </div>
                  </div>
                  <div class="delivery-option">
                    <input type="radio"
                      class="delivery-option-input"
                      name="delivery-${product}">
                    <div>
                      <div class="delivery-option-date">
                        ${dayjs().add(3, 'day').format('dddd, MMMM D')}
                      </div>
                      <div class="delivery-option-price">
                        $4.99 - Shipping
                      </div>
                    </div>
                  </div>
                  <div class="delivery-option">
                    <input type="radio"
                      class="delivery-option-input"
                      name="delivery-${product}">
                    <div>
                      <div class="delivery-option-date">
                        ${dayjs().add(1, 'day').format('dddd, MMMM D')}
                      </div>
                      <div class="delivery-option-price">
                        $9.99 - Shipping
                      </div>
                    </div>
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


function updateQuery(){
  document.querySelectorAll('.update-quantity-link').forEach((link) => {
    link.addEventListener('click', () => {
      const productId = link.getAttribute('data-product-id');
      const quantity = document.querySelector('.quantity-label').innerHTML;
      document.querySelector('.product-quantity').innerHTML = `
      <span>
        Quantity: <span class="quantity-label">${quantity}</span>
      </span>
      <input type="number" class="quantity-input" value="${quantity}">
      <span class="save-quantity-link link-primary" data-product-Id = "${productId}">
        Save
      </span>
      <span class="delete-quantity-link link-primary" data-product-Id = "${productId}">
        Delete
      </span>`

      saveQuery();
    })
  })
}

function saveQuery(){
  document.querySelectorAll('.save-quantity-link').forEach((link) => {
    link.addEventListener('click', () => {
        const productId = link.getAttribute('data-product-id');
        const quantity = document.querySelector('.quantity-input').value;
        cart.forEach((item) => {
            if (item.productId === productId) {
                item.quantity = quantity;
            }
        });
        document.querySelector('.quantity-label').innerHTML = quantity;
        document.querySelector('.checkout-header-middle-section').innerHTML = `Checkout (${addCart()})`
        document.querySelector('.product-quantity').innerHTML = `
          <span>
            Quantity: <span class="quantity-label">${quantity}</span>
          </span>
          <span class="update-quantity-link link-primary" data-product-Id = "${productId}">
            Update
          </span>
          <span class="delete-quantity-link link-primary" data-product-Id = "${productId}">
            Delete
          </span>
          `
        itemUpdate();
        totalUpdate();
        cartStorage(productId,quantity);
        updateQuery();
    });
  });
}

updateQuery();
itemUpdate();
totalUpdate();