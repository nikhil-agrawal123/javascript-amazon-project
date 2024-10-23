import { delCart,addCart , cartStorage} from "../../data/cart.js";
import {itemUpdate,totalUpdate} from '../checkout.js'

export function updateQuery(cart){
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
  
        saveQuery(cart);
      })
    })
  }
  
  function saveQuery(cart){
    document.querySelectorAll('.save-quantity-link').forEach((link) => {
      link.addEventListener('click', () => {
          const productId = link.getAttribute('data-product-id');
          const quantity = Number(document.querySelector('.quantity-input').value);

          if (quantity <= 0) {
              delCart(productId);
              document.querySelector('.js-del-' + productId).remove();
              document.querySelector('.checkout-header-middle-section').innerHTML = `Checkout (${addCart()})`;
              itemUpdate();
              totalUpdate();
              return;
          }else{
            cart.forEach((item) => {
              if (item.productId === productId) {
                  item.quantity = quantity;
              }
          })
          
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
          updateQuery(cart);
          }
      });
    });
  }
