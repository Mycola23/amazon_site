import { renderOrderSummary } from "../../../js/checkout/orderSummary.js";
import { cart, loadFromStorage } from "../../../data/cart.js";
import { renderPaymentSummary } from "../../checkout/paymentSummary.js";
import { loadProductsFetch } from "../../../data/data.js";
describe("test suite : renderOrderSummary", () => {
    const productId1 = "e43638ce-6aa0-4b85-b27f-e1d07eb678c6";
    const productId2 = "15b6fc6f-327a-4ec4-896f-486349e85a3d";
    beforeAll(async () => {
        await loadProductsFetch(); // it`s used instead of done()
    });
    beforeEach(() => {
        document.querySelector(".js-test-container").innerHTML = `
            <div class ="checkout__content">
                <div class ="checkout__order order"></div>
                <div class ="order-payment__info"></div>
            </div>
        `;
        // let cartItems = document.querySelector(".checkout__order");
        // let contentBox = document.querySelector(".checkout__content");
        spyOn(localStorage, "setItem");
        spyOn(localStorage, "getItem").and.callFake(() => {
            return JSON.stringify([
                {
                    productId: productId1,
                    quantity: 1,
                    deliveryOptionId: "1",
                },
                {
                    productId: productId2,
                    quantity: 6,
                    deliveryOptionId: "1",
                },
            ]);
        });
        loadFromStorage();
        renderOrderSummary(1);
    });
    it("displays the cart", () => {
        expect(document.querySelectorAll(".order__cart").length).toEqual(2);
        // test for 1 product
        expect(document.querySelector(`.jstest-product-quantity-${productId1}`).innerText).toContain("Quantity: 1"); //jstest-product-name-${matchingProduct.id}
        expect(document.querySelector(`.jstest-product-name-${productId1}`).innerText).toContain("Black and Gray Athletic Cotton Socks - 6 Pairs");
        expect(document.querySelector(`.jstest-product-price-${productId1}`).innerText).toContain("$10.90");
        // test for 2 product
        expect(document.querySelector(`.jstest-product-price-${productId2}`).innerText).toContain("$20.95");
        expect(document.querySelector(`.jstest-product-name-${productId2}`).innerText).toContain("Intermediate Size Basketball");
        expect(document.querySelector(`.jstest-product-quantity-${productId2}`).innerText).toContain("Quantity: 6");
    });
    it("removes the product", () => {
        //console.log("hi you hi");

        document.querySelector(`.jstest-btn-delete-${productId1}`).click(); // todo it not work,but it need start in small scale in other project to check
        //console.log(document.querySelector(`.jstest-btn-delete-${productId1}`)); // it not works
        expect(document.querySelectorAll(".order__cart").length).toEqual(1);
        expect(document.querySelector(`.jstest-btn-delete-${productId1}`)).toEqual(null);
        expect(document.querySelector(`.jstest-btn-delete-${productId2}`)).not.toEqual(null);

        //expect(cart[0].productId).toEqual(productId2); // todo не можливо перевірити оскільки eventListener стоїть на на кнопці, а на всьому головному блокові і ми рендероме не функціональну сторінку

        /*коррче  в мене викликається .click() , але після цього 0 реакції на цей виклик , оскільки в початковому коді AddEventLisytener присваюється до блоку а не докжної окремої кнопки тому маємо такі трабли  */
    });
    it("updating deliveryOptions", () => {
        const radioBtn = document.querySelector(".delivery-options > .delivery-option:nth-of-type(3) > input");
        console.log(radioBtn);
        radioBtn.click();

        expect(radioBtn.checked).toEqual(true);
        expect(cart.length).toEqual(2);
        console.log(radioBtn.getAttribute(`data-jstest-delivery-option-${productId1}`));
        expect(radioBtn.getAttribute(`data-jstest-delivery-product-${productId1}`)).toEqual(productId1);
        expect(radioBtn.getAttribute(`data-jstest-delivery-option-${productId1}`)).toEqual("3");
        const priceOfShippingHanding = document.querySelector(".jstest-orderpayment-shipping-handling").innerText;
        console.log(priceOfShippingHanding);
        const OrderTotalPrice = document.querySelector(".jstest-orderpayment-ordertotal").innerText;
        expect(priceOfShippingHanding).toContain("$9.99");
        expect(OrderTotalPrice).toContain("$161.25");

        //document.querySelector("cart>delivery");
        //console.log(document.querySelector(".delivery-options > .delivery-option:nth-of-type(3)"));
    });
    // clean dom
    afterEach(() => {
        document.querySelector(".js-test-container").innerHTML = ``;
    });
});
