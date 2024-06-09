"use strict";
import { cart, removeFromCart, updateQuantity, saveToStorage, updateDeliveryOption } from "../../data/cart.js";
import { products, getProduct } from "../../data/data.js";
import { formatMoneys } from "../utils/money.js";
import dayjs from "https://unpkg.com/dayjs@1.11.10/esm/index.js";
import { deliveryOptions, getDeliveryOption } from "../../data/deliveryOptions.js";

let orderPayment = document.querySelector(".order-payment__info");

export function renderPaymentSummary(test) {
    let productPriceCents = 0;
    let shippingPriceCents = 0;

    cart.forEach((cartItem) => {
        // calc productPriceCents
        const product = getProduct(cartItem.productId);
        productPriceCents += Number(cartItem.quantity) * Number(product.priceCents);

        // calc shippingPriceCents
        const deliveryOption = getDeliveryOption(cartItem.deliveryOptionId);
        shippingPriceCents += deliveryOption.priceCents;
    });

    const totalBeforeTaxCents = productPriceCents + shippingPriceCents;
    const taxCents = totalBeforeTaxCents * 0.1;
    const totalCents = totalBeforeTaxCents + taxCents;
    console.log(productPriceCents, shippingPriceCents);

    const paymentSummaryHtml = `
            <h3 class="order-payment__title">Order Summary</h3>
            <div class="order-payment__row">
                <div>items(${JSON.parse(localStorage.getItem("cart-quantity"))})</div>
                <div class="order-payment__money jstest-orderpayment-price">$${formatMoneys(productPriceCents)}</div>
            </div>
            <div class="order-payment__row ">
                <div>Shipping & handling:</div>
                <div class="order-payment__money jstest-orderpayment-shipping-handling">$${formatMoneys(shippingPriceCents)}</div>
            </div>
            <div class="order-payment__row">
                <div>Total before tax:</div>
                <div class="order-payment__money">$${formatMoneys(totalBeforeTaxCents)}</div>
            </div>
            <div class="order-payment__row">
                <div>Estimated tax (10%):</div>
                <div class="order-payment__money jstest-orderpayment-tax">$${formatMoneys(taxCents)}</div>
            </div>
            <div class="order-payment__row ">
                <div>Order total</div>
                <div class="order-payment__money jstest-orderpayment-ordertotal">$${formatMoneys(totalCents)}</div>
            </div>
        `;
    if (test === 1) {
        document.querySelector(".order-payment__info").innerHTML = paymentSummaryHtml;
    } else {
        //let orderPaymentContainer = document.createElement("div");
        //orderPaymentContainer.innerHTML = paymentSummaryHtml;      // ? нащо мені ті строчки коду, з'ясувати
        orderPayment.innerHTML = paymentSummaryHtml; //!return
    }

    //console.log(orderPayment);
}
/* old not work code of renderPaymentSummary
function countOrderSum(cart) {
    const tax = 10;
    let totalSum = 0;
    let sumPrices = 0;
    let shippingSum = 0; //* it works
    let totalSumBeforeTax = 0;
    let orderTax = 0;
    cart.forEach((product) => {
        //console.log(product);
        let productQuantity = Number(product.quantity);
        let productPrice = Number(product.price);
        shippingSum += Number(product["delivery-price"]);
        //console.log(shippingSum);
        //console.log(Number(product["delivery-price"]));
        sumPrices += productQuantity * productPrice;
    });

    orderTax = sumPrices * (tax / 100);
    totalSum = orderTax + sumPrices + shippingSum;
    totalSumBeforeTax = totalSum - orderTax;
    //Agjgj               //todo start function FormatMoney when we`ll change html
    // return { totalSum, sumPrices, shippingSum, totalSumBeforeTax, orderTax };
}*/
