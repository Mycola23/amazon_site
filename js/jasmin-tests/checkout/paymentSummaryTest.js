import { cart, loadFromStorage } from "../../../data/cart.js";
import { renderPaymentSummary } from "../../checkout/paymentSummary.js";
describe("test suite  : renderPaymentSummary", () => {
    const productId1 = "e47638ce-6aa0-4b85-b27f-e1d07eb671d1";
    const productId2 = "e47638ce-6aa0-4b85-b27f-e1d07eb671d2";
    beforeEach(() => {
        document.querySelector(".js-test-container").innerHTML = `
            
                <div class ="order-payment__info"></div>
        
        `;
        // let cartItems = document.querySelector(".checkout__order");
        // let contentBox = document.querySelector(".checkout__content");
        spyOn(localStorage, "setItem");
        spyOn(localStorage, "getItem").and.callFake(() => {
            return JSON.stringify([
                {
                    productId: productId1,
                    quantity: 1,
                    //price: 100,
                    deliveryOptionId: "2",
                },
                {
                    productId: productId2,
                    quantity: 6,
                    //price: 100,  //*it string has no sence because we always connects with main dataBase where we find out price of some products
                    deliveryOptionId: "3",
                },
            ]);
        });
        loadFromStorage();
        renderPaymentSummary(1);
    });
    it("displays the Order Summary", () => {
        const productsonlyPrice = document.querySelector(".jstest-orderpayment-price");
        const ShippingAndHanding = document.querySelector(".jstest-orderpayment-shipping-handling");
        const tax = document.querySelector(".jstest-orderpayment-tax");
        const totalSum = document.querySelector(".jstest-orderpayment-ordertotal");
        expect(productsonlyPrice.innerText).toContain("$980.00");
        expect(ShippingAndHanding.innerText).toContain("$14.98");
        expect(tax.innerText).toContain("$99.50");
        expect(totalSum.innerText).toContain("$1094.48");
    });
    afterEach(() => {
        document.querySelector(".js-test-container").innerHTML = ``;
    });
});
