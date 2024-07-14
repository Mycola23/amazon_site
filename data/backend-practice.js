// import { Product, Clothing, Appliance } from "../data/data.js";
// const xhr = new XMLHttpRequest();
// xhr.addEventListener("load", () => console.log(xhr.response));
// xhr.open("GET", "https://supersimplebackend.dev/products");
// xhr.send();
// export let products = [];
// export function loadProducts() {
//     const xhr = new XMLHttpRequest();
//     xhr.addEventListener("load", () => {
//         // todo прогнати цей array with map to change src of img and add my products
//         products = JSON.parse(xhr.response).map((productDetails) => {
//             productsImg.forEach((elm) => {
//                 if (productDetails.id === elm.id) {
//                     productDetails.img = elm.img;
//                 } else {
//                     productDetails.img = "";
//                 }
//             });
//             // if (productDetails.id === "e43638ce-6aa0-4b85-b27f-e1d07eb678c6") {
//             //     productDetails.img =
//             //         "https://images.unsplash.com/photo-1631180543602-727e1197619d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80";
//             // }
//             if (productDetails.type === `clothing`) {
//                 return new Clothing(productDetails); //*complete todo  add stylse to link
//             } else if (productDetails.type === `appliance`) {
//                 return new Appliance(productDetails);
//             }
//             return new Product(productDetails);
//         });
//         console.log(products);
//     });
//     xhr.open("GET", "https://supersimplebackend.dev/products");
//     xhr.send();
// }
// loadProducts();
// export const productsImg = [
//     {
//         id: "e47638ce-6aa0-4b85-b27f-e1d07eb671d2",
//         img: "https://images.unsplash.com/photo-1595861021888-e8192a7f774e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
//         name: "Basketball ball",
//         rating: {
//             stars: 4.5,
//             count: 56,
//         },
//         priceCents: 5035,
//     },
//     //Men's Full-Zip Hooded Fleece Sweatshirt
//     {
//         id: "e47638ce-6aa0-4b85-b27f-e1d07eb671d1",
//         img: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
//         name: "Gravel",
//         rating: {
//             stars: 4.7,
//             count: 135,
//         },
//         priceCents: 67790,
//     },
//     {
//         id: "e47638ce-6aa0-4b85-b27f-e1d07eb678c9",
//         img: "https://plus.unsplash.com/premium_photo-1684952850099-396e7183bc6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1931&q=80",
//         name: "White socks with rainbow lines",
//         rating: {
//             stars: 4.0,
//             count: 215,
//         },
//         priceCents: 985,
//     },
//     {
//         id: "e47638ce-6aa0-4b85-b27f-e1d07eb678c8",
//         img: "https://images.unsplash.com/photo-1539870113056-c6d7439045ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2132&q=80",
//         name: "Rainbow paper clips",
//         rating: {
//             stars: 3.8,
//             count: 73,
//         },
//         priceCents: 20,
//     },
//     {
//         id: "e47638ce-6aa0-4b85-b27f-e1d07eb678c7",
//         img: "https://plus.unsplash.com/premium_photo-1663036970563-99624abc950e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
//         name: "Washing machine",
//         rating: {
//             stars: 3.5,
//             count: 737,
//         },
//         priceCents: 31045,
//     },
//     {
//         id: "e47638ce-6aa0-4b85-b27f-e1d07eb678c6",
//         img: "https://images.unsplash.com/photo-1514651029128-173d2e6ea851?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1970&q=80",
//         name: "Glass for luxury drink",
//         rating: {
//             stars: 3.5,
//             count: 45,
//         },
//         priceCents: 2199,
//     },
//     {
//         id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
//         img: "https://images.unsplash.com/photo-1631180543602-727e1197619d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80",
//     },
// ];

// ? цей supersimplebackend return data witrhout type appliance => what need  i do to return this string in my small amazon (as varaiant create frankeschtein function that will give some this type and special properties)
//? or do nothing with it or return to previous version of code(the worst variant)

function loadTestdata() {
    fetch("https://cors-anywhere.herokuapp.com/https://databse-amazon-5vjj0rm0t-d-ds-projects-64e3b4df.vercel.app/js/data").then((response) => {
        console.log(response);
    });
}
loadTestdata();
