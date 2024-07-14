import { cart, loadFromStorage } from "../../../data/cart.js";
import { renderPaymentSummary } from "../../checkout/paymentSummary.js";
import { loadProductsFetch } from "../../../data/data.js";
describe("test suite  : renderPaymentSummary", () => {
    const productId1 = "e43638ce-6aa0-4b85-b27f-e1d07eb678c6"; //e47638ce-6aa0-4b85-b27f-e1d07eb671d1 not exist yet
    const productId2 = "15b6fc6f-327a-4ec4-896f-486349e85a3d"; //todo  e47638ce-6aa0-4b85-b27f-e1d07eb671d2 not exist yet i need to  connect my own server with it
    beforeAll((done) => {
        loadProductsFetch().then(() => {
            done();
        });
    });
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
        expect(productsonlyPrice.innerText).toContain("$136.60");
        expect(ShippingAndHanding.innerText).toContain("$14.98");
        expect(tax.innerText).toContain("$15.16");
        expect(totalSum.innerText).toContain("$166.74");
    });
    afterEach(() => {
        document.querySelector(".js-test-container").innerHTML = ``;
    });
});
