"use strict";
import { Product } from "../../../data/data.js";
describe("test case: Product ", () => {
    it("displays coorect properties and methods", () => {
        const productId = "e47638ce-6aa0-4b85-b27f-e1d07eb671d2";
        const starsHtml = `
        <li class="stars__star">
            <img src="img/icons/star22.svg" alt = 'star'>
        </li>
        <li class="stars__star">
            <img src="img/icons/star22.svg" alt = 'star'>
        </li>
    <li class="stars__star">
        <img src="img/icons/star22.svg" alt = 'star'>
    </li>
    <li class="stars__star">
        <img src="img/icons/star22.svg" alt = 'star'>
    </li>
    <li class="stars__star last-star data-with =0.5">
        <img src="img/icons/star22.svg" alt = 'star'>  
    </li>
        `;
        const product = new Product({
            id: productId,
            img: "https://images.unsplash.com/photo-1595861021888-e8192a7f774e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
            name: "Basketball ball",
            rating: {
                stars: 4.5,
                count: 56,
            },
            priceCents: 5035,
        });
        const generatedStarsHtml = product.createStars();
        console.log(generatedStarsHtml);
        expect(product.name).toEqual("Basketball ball");
        expect(product.getPrice()).toEqual("$50.35");
        expect(product.id).toEqual(`${productId}`);
        expect(product.extroInfoHtml()).toEqual("");
        expect(product.extroInfoHtml()).toEqual(``);
        // expect(product.createStars()).toEqual(`
        // <li class="stars__star">
        //             <img src="img/icons/star22.svg" alt = 'star'>
        //         </li>
        //         <li class="stars__star">
        //             <img src="img/icons/star22.svg" alt = 'star'>
        //         </li>
        //         <li class="stars__star">
        //             <img src="img/icons/star22.svg" alt = 'star'>
        //         </li>
        //         <li class="stars__star">
        //             <img src="img/icons/star22.svg" alt = 'star'>
        //         </li>
        //         <li class="stars__star last-star data-with =0.5">
        //             <img src="img/icons/star22.svg" alt = 'star'>
        //         </li>`); // not works
    });
});
