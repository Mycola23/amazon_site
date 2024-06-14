"use strict";

import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import "../data/cart-class.js";
renderOrderSummary();
renderPaymentSummary();

/* MVC = model view controller first we get data, next we use this data to display it to user,
  next we use controllers like addEventListeners to change our data and again show it to user
*/

// bottom

//*complete  зразу після завантаження сторінки повинно показувати результат немовби користувач вибрав безкооставку,

//* not nessessory
// todo  checkout must save user`s activiti to localStotorage and then use it to load all complete page
// todo if cart = 0 {quantity of products} => show block with (message over button and has text = ' Your cart is empty',button that is a link on main page, has text = ' Go Shopping!'

/*
 <div class="cart__delivery-options delivery-options">
                <h3 class="delivery-options__title">Choose a delivery option</h3>
                <div class="delivery-option">
                    <input type="radio" class="delivery-option__check" checked name="delivery-option-${matchingProduct.id}" value="${DeleveriPrices[1]}" id = "delivery-option-${matchingProduct.id}-${DeleveriPrices[1]}">
                    <div class ='delivery-option__content'>
                        <div class="delivery-option__date">
                            Saturday, September 30
                        </div>
                        <label for="delivery-option-${matchingProduct.id}-${DeleveriPrices[1]}" class="delivery-option__price">
                            Free - Shipping
                        </label>
                    </div>
                </div>
                <div class="delivery-option">
                    <input type="radio" class="delivery-option__check" name="delivery-option-${matchingProduct.id}" value="${DeleveriPrices[2]}" id = "delivery-option-${matchingProduct.id}-${DeleveriPrices[2]}">
                    <div class ='delivery-option__content'>
                        <div class="delivery-option__date">
                            Thursday, September 28
                        </div>
                        <label for="delivery-option-${matchingProduct.id}-${DeleveriPrices[2]}" class="delivery-option__price">
                            $4.99 - Shipping
                        </label>
                    </div>
                </div>
                <div class="delivery-option">
                    <input type="radio" class="delivery-option__check" name="delivery-option-${matchingProduct.id}" value="${DeleveriPrices[3]}" id = "delivery-option-${matchingProduct.id}-${DeleveriPrices[3]}">
                    <div class ='delivery-option__content'>
                        <div class="delivery-option__date">
                            Tuesday, September 26 
                        </div>
                        <label for="delivery-option-${matchingProduct.id}-${DeleveriPrices[3]}" class="delivery-option__price">
                            $7.99 - Shipping
                        </label>
                    </div>
                </div>
            </div>

*/
