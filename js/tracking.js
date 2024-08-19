"use strict";
import { loadProductsFetch, products } from "../data/data";
// get our orderID & productID
const url = new URL(window.location.href);
const orderId = url.searchParams.get("orderId");
const productId = url.searchParams.get("productId");

loadProductsFetch().then(() => {});

export function CreateTrackPackageHtml(orderId, productId) {
    let trackPackageHtml = "";
    products.forEach((product) => {
        if (product.id === productId) {
            trackPackageHtml = `
             <div class="js-order-tracking order-tracking">
                <a class="back-to-orders-link link-primary" href="orders.html">
                  View all orders
                </a>

            <div class="delivery-date" data-testid="delivery-date-message">
              Arriving on Tuesday, August 13 
            </div>

            <div class="product-info" data-testid="product-name">
              Black and Gray Athletic Cotton Socks - 6 Pairs
            </div>

            <div class="product-info">
              Quantity: 2
            </div>

            <img class="product-image" src="images/products/athletic-cotton-socks-6-pairs.jpg">

            <div class="progress-labels-container">
              <div class="progress-label
                current-status-label" data-testid="current-status">
                Preparing
              </div>
              <div class="progress-label
                ">
                Shipped
              </div>
              <div class="progress-label
                ">
                Delivered
              </div>
            </div>

            <div class="progress-bar-container">
              <div class="js-progress-bar progress-bar" data-testid="progress-bar" style="width: 5%;"></div>
            </div>
          </div>
      `;
        }
    });
}
