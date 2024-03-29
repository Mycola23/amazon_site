import { renderOrderSummary } from "../../../js/checkout/orderSummary.js";
import { cart, loadFromStorage } from "../../../data/cart.js";
describe("test suite : renderOrderSummary", () => {
    it("displays the car", () => {
        document.querySelector(".js-test-container").innerHTML = `
            <div class ="checkout__content"></div>
        `;
        spyOn(localStorage, "setItem");
        spyOn(localStorage, "getItem").and.callFake(() => {
            return JSON.stringify([
                {
                    productId: "e47638ce-6aa0-4b85-b27f-e1d07eb671d1",
                    quantity: 1,
                    price: 999,
                    deliveryOptionId: "1",
                },
                {
                    productId: "e47638ce-6aa0-4b85-b27f-e1d07eb671d2",
                    quantity: 6,
                    price: 999,
                    deliveryOptionId: "1",
                },
                {
                    productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
                    quantity: 3,
                    price: 999,
                    deliveryOptionId: "2",
                },
            ]);
        });
        loadFromStorage();
        renderOrderSummary();
    });
});
