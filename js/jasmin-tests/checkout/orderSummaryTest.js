import { renderOrderSummary } from "../../../js/checkout/orderSummary.js";
import { cart, loadFromStorage } from "../../../data/cart.js";
import { renderPaymentSummary } from "../../checkout/paymentSummary.js";
describe("test suite : renderOrderSummary", () => {
    const productId1 = "e47638ce-6aa0-4b85-b27f-e1d07eb671d1";
    const productId2 = "e47638ce-6aa0-4b85-b27f-e1d07eb671d2";
    beforeEach(() => {
        document.querySelector(".js-test-container").innerHTML = `
            <div class ="checkout__content">
                <div class ="checkout__order order"></div>
                <div class ="order-payment__info"></div>
            </div>
        `;
        let cartItems = document.querySelector(".checkout__order");
        let contentBox = document.querySelector(".checkout__content");
        //console.log(cartItems);
        //console.log(contentBox);
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
            ]);
        });
        loadFromStorage();
        renderOrderSummary(1);
    });
    it("displays the cart", () => {
        // test for 1 product
        expect(document.querySelectorAll(".order__cart").length).toEqual(2);
        expect(document.querySelector(`.jstest-product-quantity-${productId1}`).innerText).toContain("Quantity: 1");
        // test for 2 product
        expect(document.querySelector(`.jstest-product-quantity-${productId2}`).innerText).toContain("Quantity: 6");
        document.querySelector(".js-test-container").innerHTML = ``;
    });
    it("removes the product", () => {
        //console.log("hi you hi");
        document.querySelector(`.jstest-btn-delete-${productId1}`).click(); // todo it not work,but it need start in small scale in other project to check
        //console.log(document.querySelector(`.jstest-btn-delete-${productId1}`)); // it not works
        expect(document.querySelectorAll(".order__cart").length).toEqual(1);
        expect(document.querySelector(`.jstest-btn-delete-${productId1}`)).toEqual(null);
        expect(document.querySelector(`.jstest-btn-delete-${productId2}`)).not.toEqual(null);
        //expect(cart[0].productId).toEqual(productId2); // todo не можливо перевірити оскільки eventListener стоїть на на кнопці, а на всьому головному блокові і ми рендероме не функціональну сторінку
        //document.querySelector(".js-test-container").innerHTML = ``;
        /*коррче  в мене викликається .click() , але після цього 0 реакції на цей виклик , оскільки в початковому коді AddEventLisytener присваюється до блоку а не докжної окремої кнопки тому маємо такі трабли  */
    });
});
