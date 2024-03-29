import { renderOrderSummary } from "../../../js/checkout/orderSummary.js";
import { cart, loadFromStorage } from "../../../data/cart.js";
describe("test suite : renderOrderSummary", () => {
    it("displays the cart", () => {
        let cartItems = document.createElement("div");
        cartItems.className = `checkout__order order`;
        document.querySelector(".js-test-container").innerHTML = `
            <div class ="checkout__content"></div>
        `;
        let contentBox = document.querySelector(".checkout__content");
        console.log(contentBox);
        const productId1 = "e47638ce-6aa0-4b85-b27f-e1d07eb671d1";
        const productId2 = "e47638ce-6aa0-4b85-b27f-e1d07eb671d2";
        spyOn(localStorage, "setItem");
        spyOn(localStorage, "getItem").and.callFake(() => {
            return JSON.stringify([
                {
                    productId: productId1,
                    quantity: 1,
                    price: 999,
                    deliveryOptionId: "1",
                },
                {
                    productId: productId2,
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
        renderOrderSummary(1);
        // test for 1 product
        expect(document.querySelectorAll(".order__cart").length).toEqual(3);
        expect(document.querySelector(`.jstest-product-quantity-${productId1}`).innerText).toContain("Quantity: 1");
        // test for 2 product
        expect(document.querySelector(`.jstest-product-quantity-${productId2}`).innerText).toContain("Quantity: 6");
    });
});
