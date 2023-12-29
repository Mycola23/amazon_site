"use strict";
import { cart, removeFromCart, updateQuantity, saveToStorage, updateDeliveryOption } from "../../data/cart.js";
import { products } from "../../data/data.js";
import { formatMoneys } from "../utils/money.js";
import dayjs from "https://unpkg.com/dayjs@1.11.10/esm/index.js";
import { deliveryOptions } from "../../data/deliveryOptions.js";

function addDeliveryPrice(deliveryOption) {
    let deliveryPrice = deliveryOption.value;
    let product_Id = deliveryOption.name.replace("delivery-option-", "");
    cart.forEach((item) => {
        const productId = item.productId;
        if (productId === product_Id) {
            item["delivery-price"] = deliveryPrice;
        }
    });
    saveToStorage();
    showOrder(cart);
}

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
    return { totalSum, sumPrices, shippingSum, totalSumBeforeTax, orderTax };
}

function showOrder(cart) {
    // todo in work version of program

    const numbers = countOrderSum(cart);
    //console.log(numbers);
    let orderHtml = `
            <h3 class="order-payment__title">Order Summary</h3>
            <div class="order-payment__row">
                <div>items(${JSON.parse(localStorage.getItem("cart-quantity"))})</div>
                <div class="order-payment__money">$${formatMoneys(numbers.sumPrices)}</div>
            </div>
            <div class="order-payment__row">
                <div>Shipping & handling:</div>
                <div class="order-payment__money">$${formatMoneys(numbers.shippingSum)}</div>
            </div>
            <div class="order-payment__row">
                <div>Total before tax:</div>
                <div class="order-payment__money">$${formatMoneys(numbers.totalSumBeforeTax)}</div>
            </div>
            <div class="order-payment__row">
                <div>Estimated tax (10%):</div>
                <div class="order-payment__money">$${formatMoneys(numbers.orderTax)}</div>
            </div>
            <div class="order-payment__row">
                <div>Order total</div>
                <div class="order-payment__money">$${formatMoneys(numbers.totalSum)}</div>
            </div>
        `;

    let orderPaymentContainer = document.createElement("div");
    //orderPaymentContainer.innerHTML = orderHtml;
    orderPayment.innerHTML = orderHtml;
    //console.log(orderPayment);
}
showOrder(cart);
