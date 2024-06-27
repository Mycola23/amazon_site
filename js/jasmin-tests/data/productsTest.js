"use strict";
import { Product, Clothing, Appliance } from "../../../data/data.js";
describe("test case: data.js - classes ", () => {
    const productId = "e47638ce-6aa0-4b85-b27f-e1d07eb671d2";
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
    it("displays correct properties and methods of Product", () => {
        expect(product.name).toEqual("Basketball ball");
        expect(product.getPrice()).toEqual("$50.35");
        expect(product.id).toEqual(`${productId}`);
        expect(product.extroInfoHtml()).toEqual("");
        expect(product.extroInfoHtml()).toEqual(``);
        expect(product.createStars()).toEqual(
            '<li class = "stars__star"><img src = "img/icons/star22.svg" alt = "star"></li><li class = "stars__star"><img src = "img/icons/star22.svg" alt = "star"></li><li class = "stars__star"><img src = "img/icons/star22.svg" alt = "star"></li><li class = "stars__star"><img src = "img/icons/star22.svg" alt = "star"></li><li class = "stars__star last-star data-with = "0.5"><img src = "img/icons/star22.svg" alt = "star"></li>'
        );
    });
    it("display corect properties and methods of Clothing", () => {
        const clothing = new Clothing({
            id: "83d4ca15-0f35-48f5-b7a3-1ea210004f2e",
            img: "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
            name: "Adults Plain Cotton T-Shirt - 2 Pack",
            rating: {
                stars: 4.5,
                count: 56,
            },
            priceCents: 799,
            keywords: ["tshirts", "apparel", "mens"],
            type: "clothing",
            sizeChartLink: "/img/clothing-size-chart.png",
        });
        expect(clothing.name).toEqual("Adults Plain Cotton T-Shirt - 2 Pack");
        expect(clothing.sizeChartLink).toEqual("/img/clothing-size-chart.png");
        expect(clothing.id).toEqual("83d4ca15-0f35-48f5-b7a3-1ea210004f2e");
        expect(clothing.img).toEqual(
            "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
        );
        expect(clothing.priceCents).toEqual(799);
    });
    it("display corect properties and methods of Appliance", () => {
        const appliance = new Appliance({
            id: "54e0eccd-8f36-462b-b68a-8182611d9add",
            img: "https://images.unsplash.com/photo-1613221699807-4940ba9b83f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1985&q=80",
            name: "2 Slot Toaster - Black",
            rating: {
                stars: 5,
                count: 2197,
            },
            priceCents: 1899,
            keywords: ["toaster", "kitchen", "appliances"],
            type: "appliance",
            instructionLink: "/img/appliance-instructions.png",
            warrantyLink: "/img/appliance-warranty.png",
        });
        expect(appliance.name).toEqual("2 Slot Toaster - Black");
        expect(appliance.instructionLink).toEqual("/img/appliance-instructions.png");
        expect(appliance.warrantyLink).toEqual("/img/appliance-warranty.png");
        expect(appliance.id).toEqual("54e0eccd-8f36-462b-b68a-8182611d9add");
        expect(appliance.img).toEqual(
            "https://images.unsplash.com/photo-1613221699807-4940ba9b83f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1985&q=80"
        );
        expect(appliance.priceCents).toEqual(1899);
    });
});
