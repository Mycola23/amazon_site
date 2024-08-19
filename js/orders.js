import { basicSettings } from "../js/utils/linkfunc.js";
import { formatMoneys } from "./utils/money.js";
import { products, loadProductsFetch } from "../data/data.js";
//import { orderHtml } from "./checkout/paymentSummary.js";
//--------------
basicSettings();
//------------------------
let ourData = [];

loadProductsFetch().then(() => {
    ourData = products;
    renderOrderHtml(orders); // todo just fix this func
});

export const orders = JSON.parse(sessionStorage.getItem("orders")) || [];

export function addOrder(order) {
    orders.unshift(order);
    saveOrderToStorage();
}
function saveOrderToStorage() {
    sessionStorage.setItem("orders", JSON.stringify(orders));
}
function removeOrderFromStorage() {
    sessionStorage.removeItem("orders");
}

export function createOrderHtml(orders) {
    let orderHtml = ""; // general html
    orders.forEach((order) => {
        let customHtml = ""; // html for each custtom
        let productsHtml = "";
        order.products.forEach((product) => {
            let imgsrc = "";
            let productName = "";
            //console.log(ourData);
            ourData.forEach((elm) => {
                if (product.productId === elm.id) {
                    imgsrc = elm.img;
                    productName = elm.name;
                    //console.log(imgsrc);
                    //console.log(productName);
                    // todo transform it
                }
            });

            productsHtml += `
               <div class="order__details product">
                    <div class="product__img">
                        <img 
                            src=${imgsrc}
                        />
                    </div>
                    <div class="product__details">
                        <div class="product__name">${productName}</div>
                        <div class="product__delivery-date">${new Date(product.estimatedDeliveryTime).toLocaleDateString()}</div>
                        <div class="product__quantity">Quantity: ${product.quantity}</div>
                        <button class="product__buy-again-btn btn buy-again-btn">
                            <img class="buy-again-btn__icon" src="img/buy-again-icon.svg" />
                            <span class="buy-again-btn__text">Buy it again</span>
                        </button>
                    </div>
                    <div class="product__actions">
                        <a href="tracking.html?orderId=${order.id}&productId=${product.productId}"> 
                            <button class="track-package-btn btn">Track package</button>
                        </a>
                    </div>
                </div>
            `;
        });
        //console.log(order.products);
        //console.log(order.id);
        console.log(productsHtml);
        customHtml += `
        <div class="orders__order order">
            <div class="order__title-body title-body">
                <!-- title-body__left-->
                <div class="title-body__left">
                    <div class="order__date-block date-block">
                        <h3 class="date-block__label ord-label">Order Placed:</h3>
                        <div class="date-block__date ord-text">${new Date(order.date).toLocaleDateString()}</div>
                    </div>
                    <div class="order__total total">
                        <h3 class="total__label ord-label">Total:</h3>
                        <div class="total__sum ord-text">$${formatMoneys(order.totalCostCents)}</div>
                    </div>
                </div>
                <!-- title-body__right-->
                <div class="title-body__right">
                    <div class="order__id id">
                        <h3 class="id__label ord-label">Order ID:</h3>
                        <div class="id__number ord-text">${order.id}</div>
                    </div>
                </div>
            </div>
            ${productsHtml}
        </div>`;
        console.log(customHtml);
        orderHtml += customHtml;
        console.log(orderHtml); //todo where details products foreach method to create all products of order
    });

    //console.log(orderHtml);
    return orderHtml;
}

function renderOrderHtml(orders) {
    const mainHeader = document.querySelector(".page__title");
    const ordersBlock = document.createElement("div");
    let orderHtml = createOrderHtml(orders);
    ordersBlock.className = "orders";
    ordersBlock.innerHTML = orderHtml;
    mainHeader.after(ordersBlock);
    console.log(orders);
    console.log(orderHtml);
}

/* new Promise((resolve) => {
    loadProductsFetch().then(() => {
        resolve();
    });
}).then(() => {
    renderOrderHtml();
}); */

/*
<div class="orders__order order">
    <div class="order__title-body title-body">
        <!-- title-body__left-->
        <div class="title-body__left">
            <div class="order__date-block date-block">
                <h3 class="date-block__label ord-label">Order Placed:</h3>
                <div class="date-block__date ord-text">15.08.2024</div>
            </div>
            <div class="order__total total">
                <h3 class="total__label ord-label">Total:</h3>
                <div class="total__sum ord-text">$25.94</div>
            </div>
        </div>
        <!-- title-body__right-->
        <div class="title-body__right">
            <div class="order__id id">
                <h3 class="id__label ord-label">Order ID:</h3>
                <div class="id__number ord-text">903f4a6a-0041-4e60-8e62-2a5ecebbec91</div>
            </div>
        </div>
    </div>        
    <div class="order__details product">
        <div class="product__img">
            <img
                src=https://images.unsplash.com/photo-1518989229647-6377f907a0b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80
            />
        </div>

        <div class="product__details">
            <div class="product__name">Intermediate Size Basketball</div>
            <div class="product__delivery-date">18.08.2024</div>
            <div class="product__quantity">Quantity: 1</div>
            <button class="product__buy-again-btn btn buy-again-btn">
                <img class="buy-again-btn__icon" src="img/buy-again-icon.svg" />
                <span class="buy-again-btn__text">Buy it again</span>
            </button>
        </div>
        <div class="product__actions">
            <a href="tracking.html?orderId=903f4a6a-0041-4e60-8e62-2a5ecebbec91&productId=undefined"> 
                <button class="track-package-btn btn">Track package</button>
            </a>
        </div>
    </div
</div> 


<div class="orders__order order">
    <div class="order__title-body title-body">
        <!-- title-body__left-->
        <div class="title-body__left">
            <div class="order__date-block date-block">
                <h3 class="date-block__label ord-label">Order Placed:</h3>
                <div class="date-block__date ord-text">15.08.2024</div>
            </div>
            <div class="order__total total">
                <h3 class="total__label ord-label">Total:</h3>
                <div class="total__sum ord-text">$25.94</div>
            </div>
        </div>
        <!-- title-body__right-->
        <div class="title-body__right">
            <div class="order__id id">
                <h3 class="id__label ord-label">Order ID:</h3>
                <div class="id__number ord-text">c18b879c-0fc3-4b8a-b3f4-663645ae641a</div>
            </div>
        </div>
    </div>
        <div class="order__details product">
            <div class="product__img">
                <img
                    src=https://images.unsplash.com/photo-1518989229647-6377f907a0b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80
                />
            </div>

        <div class="product__details">
            <div class="product__name">Intermediate Size Basketball</div>
            <div class="product__delivery-date">18.08.2024</div>
            <div class="product__quantity">Quantity: 1</div>
            <button class="product__buy-again-btn btn buy-again-btn">
                <img class="buy-again-btn__icon" src="img/buy-again-icon.svg" />
                <span class="buy-again-btn__text">Buy it again</span>
            </button>
        </div>
        <div class="product__actions">
            <a href="tracking.html?orderId=c18b879c-0fc3-4b8a-b3f4-663645ae641a&productId=undefined"> 
                <button class="track-package-btn btn">Track package</button>
            </a>
        </div>
</div> 

*/

/*
 <div class="orders__order order">
                            <div class="order__title-body title-body">
                                title-body__left
                                <div class="title-body__left">
                                    <div class="order__date-block date-block">
                                        <h3 class="date-block__label ord-label">Order Placed:</h3>
                                        <div class="date-block__date ord-text">August 12</div>
                                    </div>
                                    <div class="order__total total">
                                        <h3 class="total__label ord-label">Total:</h3>
                                        <div class="total__sum ord-text">$35.06</div>
                                    </div>
                                </div>
                                title-body__right
                                <div class="title-body__right">
                                    <div class="order__id id">
                                        <h3 class="id__label ord-label">Order ID:</h3>
                                        <div class="id__number ord-text">27cba69d-4c3d-4098-b42d-ac7fa62b7664</div>
                                    </div>
                                </div>
                            </div>
                            <div class="order__details product">
                                <div class="product__img">
                                    <img
                                        src="https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
                                    />
                                </div>

                                <div class="product__details">
                                    <div class="product__name">Black and Gray Athletic Cotton Socks - 6 Pairs</div>
                                    <div class="product__delivery-date">Arriving on: August 15</div>
                                    <div class="product__quantity">Quantity: 1</div>
                                    <button class="product__buy-again-btn btn buy-again-btn">
                                        <img class="buy-again-btn__icon" src="img/buy-again-icon.svg" />
                                        <span class="buy-again-btn__text">Buy it again</span>
                                    </button>
                                </div>

                                <div class="product__actions">
                                    <a href="tracking.html?orderId=123&productId=456">
                                        <button class="track-package-btn btn">Track package</button>
                                    </a>
                                </div>
                            </div> 
                        </div>
                        </div>

*/
