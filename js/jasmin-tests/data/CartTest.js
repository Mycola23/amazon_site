import { addToCart, cart, loadFromStorage, removeFromCart, updateDeliveryOption } from "../../../data/cart.js";
import { renderOrderSummary } from "../../../js/checkout/orderSummary.js"; // ?
const productId1 = "e47638ce-6aa0-4b85-b27f-e1d07eb671d1";
const productId2 = "e47638ce-6aa0-4b85-b27f-e1d07eb671d2";
describe("test suite: addToCart", () => {
    beforeEach(() => {
        spyOn(localStorage, "setItem");
    });
    it("adds an exicting product to the cart", () => {
        spyOn(localStorage, "getItem").and.callFake(() => {
            return JSON.stringify([
                {
                    productId: productId1,
                    quantity: 1,
                    price: 999,
                    deliveryOptionId: "1",
                },
            ]);
        });
        loadFromStorage();

        addToCart(productId1);
        expect(localStorage.setItem).toHaveBeenCalledWith(
            "cart",
            JSON.stringify([
                {
                    productId: productId1,
                    quantity: 2,
                    price: 999,
                    deliveryOptionId: "1",
                },
            ])
        ); // it checks if  setItem recieved correct valuse
        expect(cart.length).toEqual(1);
        expect(localStorage.setItem).toHaveBeenCalledTimes(1);
        expect(cart[0].productId).toEqual("e47638ce-6aa0-4b85-b27f-e1d07eb671d1");
        expect(cart[0].quantity).toEqual(2);
    });
    it("adds a new product to the cart", () => {
        spyOn(localStorage, "getItem").and.callFake(() => {
            return JSON.stringify([]);
        });
        loadFromStorage();
        console.log(localStorage.getItem("cart"));

        addToCart("e47638ce-6aa0-4b85-b27f-e1d07eb671d1");
        expect(localStorage.setItem).toHaveBeenCalledWith(
            "cart",
            JSON.stringify([
                {
                    productId: productId1,
                    quantity: 1,
                    deliveryOptionId: "1",
                },
            ])
        ); // it checks if  setItem recieved correct valuse
        expect(cart.length).toEqual(1);
        expect(localStorage.setItem).toHaveBeenCalledTimes(1);
        expect(cart[0].productId).toEqual("e47638ce-6aa0-4b85-b27f-e1d07eb671d1");
        expect(cart[0].quantity).toEqual(1); // flaky  test that sometimes passes and sometimes failes
    });
});
describe("test suite : removeFromCart", () => {
    beforeEach(() => {
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
    });
    it("remove elm in the cart", () => {
        removeFromCart(productId1);
        expect(cart.length).toEqual(1);
        console.log(cart.length);
        expect(localStorage.setItem).toHaveBeenCalledTimes(1);
        expect(cart[0].productId).toEqual("e47638ce-6aa0-4b85-b27f-e1d07eb671d2");
    }); //* it works correct
    it("remove non-existent elm in the cart", () => {
        removeFromCart("gggg");
        expect(cart.length).toEqual(2);
        console.log(cart.length);
        expect(localStorage.setItem).toHaveBeenCalledTimes(1);
        expect(cart[0].productId).toEqual(productId1);
        expect(cart[1].productId).toEqual(productId2);
    });
});

describe("test suite: updateDeliveryoption", () => {
    beforeEach(() => {
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
    });
    it("update the delivery option of a product in the cart ", () => {
        updateDeliveryOption(productId1, "3");
        expect(cart[0].deliveryOptionId).toEqual("3");
        expect(localStorage.setItem).toHaveBeenCalledTimes(1);
    });
    it("update the delivery option of a productId that is not in the cart ", () => {
        updateDeliveryOption("hhh", "3");
        // first
        expect(cart[0].productId).toEqual(productId1);
        expect(cart[0].deliveryOptionId).toEqual("1");
        console.log(cart.length);
        expect(cart.length).toEqual(2);
        // second product in the cart
        expect(cart[1].productId).toEqual(productId2);
        expect(cart[1].deliveryOptionId).toEqual("1");
        expect(localStorage.setItem).toHaveBeenCalledTimes(0);
    });
    it("use a deliveryOptionId that doesn`t exist", () => {
        updateDeliveryOption(productId1, 4);
        // first
        expect(cart[0].productId).toEqual(productId1);
        expect(cart[0].deliveryOptionId).toEqual("1");

        expect(cart.length).toEqual(2);
        // second product in the cart
        expect(cart[1].productId).toEqual(productId2);
        expect(cart[1].deliveryOptionId).toEqual("1");
        expect(localStorage.setItem).toHaveBeenCalledTimes(0);
    });
});
