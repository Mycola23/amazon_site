"use strict";
import { loadProductsFetch, products } from "../data/data.js";
import { formatMoneys } from "./utils/money.js";
import { basicSettings, counter } from "../js/utils/linkfunc.js";

const orders = JSON.parse(sessionStorage.getItem("orders")) || [];
// get our orderID & productID
const url = new URL(window.location.href);
const orderId = url.searchParams.get("orderId");
const productID = url.searchParams.get("productId");
let ourData = "";
loadProductsFetch().then(() => {
    ourData = products;

    basicSettings();
    renderTrackPackageHtml();
});

/* function CreateTrackPackageHtml(orderId, productId, orders) {
    let trackPackageHtml = "";
    orders.forEach((order) => {
        if (orderId === order.id) {
            let productName = ``;
            let productImg = ``;
            order.products.forEach((product) => {
                if (productID === productId) {
                    ourData.forEach((elm) => {
                        if (product.productId === elm.id) {
                            productImg = elm.img;
                            productName = elm.name;
                            // todo transform it
                        }
                    });
                    trackPackageHtml += `
                        <div class="tracking-info"> 
                            <div class="product-id">
                                <span>${orderId}</span>
                            </div>
                            <div class="product-name" data-testid="product-name">
                                <h3 class="text-grey">Product name</h3>
                                <span>${productName}</span>
                            </div>
                            <div class="delivery-date">
                                <img src="img/icons/calendar.svg" alt="calendar" />
                                <span> ${new Date(product.estimatedDeliveryTime)}</span>
                            </div>
                            <div class="product-quantity">Quantity: 2</div>
                            <img class="product-img" src="${productImg}" />
                            <div class="tracking-progress">
                                <div class="tracking-progress__labels">
                                    <div class="tracking-progress__label" data-testid="current-status">Preparing</div>
                                    <!--current-status-label it we mark in js file-->
                                    <div class="tracking-progress__label">Shipped</div>
                                    <div class="tracking-progress__label">Delivered</div>
                                </div>
                                <div class="tracking-progress__bar">
                                    <div class="progress-bar__line" data-testid="progress-bar"></div>
                                </div>
                            </div>
                        </div>
                    `;
                    console.log(trackPackageHtml);
                }
            });
            console.log(trackPackageHtml);
            return trackPackageHtml;
            // i use product-id instead of using order-id because of scss
        } /* else {
            return (trackPackageHtml = "Eror sir ,what did with our site, it was awwesome . Please contact with our support team");
        } 
    });
} */
function CreateTrackPackageHtml(orderId, productId, orders) {
    let trackPackageHtml = "";
    for (const order of orders) {
        if (orderId === order.id) {
            let productName = ``;
            let productImg = ``;
            for (const product of order.products) {
                console.log(order.products, productID);
                if (productID === productId) {
                    console.log(productID === productId);
                    for (const elm of ourData) {
                        if (product.productId === elm.id) {
                            productImg = elm.img;
                            productName = elm.name;
                            const productTime = new Date(product.estimatedDeliveryTime);
                            trackPackageHtml += `
                                <div class="product-id">
                                    <span>${orderId}</span>
                                </div>
                                <div class="product-name" data-testid="product-name">
                                    <h3 class="text-grey">Product name</h3>
                                    <span>${productName}</span>
                                </div>
                                <div class="delivery-date">
                                    
                                    <img src="img/icons/calendar.svg" alt="calendar" />
                                    <span class = "text"> ${productTime.toLocaleDateString()}</span>
                                </div>
                                <div class="product-quantity">Quantity: 2</div>
                                <div class ="product-img-block">
                                    <img class="product-img-block__img" src="${productImg}" />
                                </div>
                                <div class="tracking-progress">
                                    <div class="tracking-progress__labels">
                                        <div class="tracking-progress__label" data-testid="current-status">Preparing</div>
                                        <!--current-status-label it we mark in js file-->
                                        <div class="tracking-progress__label">Shipped</div>
                                        <div class="tracking-progress__label">Delivered</div>
                                    </div>
                                    <div class="tracking-progress__bar">
                                        <div class="progress-bar__line" data-testid="progress-bar"></div>
                                    </div>
                                </div>
                            `;
                            return trackPackageHtml;
                        }
                    }
                }
            }
            // Return immediately after building the HTML
        }
    }
    return (trackPackageHtml = "Eror sir ,what did with our site, it was awwesome . Please contact with our support team");
}
async function renderTrackPackageHtml() {
    let trackingInfoHTML = CreateTrackPackageHtml(orderId, productID, orders);
    const orderTrackingMap = document.querySelector(".order-tracking__map");
    //console.log(orderTrackingblock);
    const orderTrackingInfo = document.createElement("div");
    orderTrackingInfo.className = "tracking-info";
    //console.log(CreateTrackPackageHtml(orderId, productId, orders));//!error in functional of this function , not in data from out
    console.log(trackingInfoHTML);
    orderTrackingInfo.innerHTML = trackingInfoHTML;
    orderTrackingMap.before(orderTrackingInfo);
}
// CreateTrackPackageHtml(orderId, productId, orders);
