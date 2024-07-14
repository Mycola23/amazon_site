"use strict";
import { formatMoneys } from "../js/utils/money.js";
import { createStars } from "../js/utils/stars.js";

export function getProduct(productId) {
    let matchingProduct;
    products.forEach((product) => {
        if (productId === product.id) {
            //console.log(productId);
            matchingProduct = product;
            //console.log(matchingProduct);
        }
    });
    return matchingProduct;
}

export class Product {
    id;
    img;
    name;
    rating;
    priceCents;
    constructor(productDetails) {
        this.id = productDetails.id;
        this.img = productDetails.img;
        this.name = productDetails.name;
        this.rating = productDetails.rating;
        this.priceCents = productDetails.priceCents;
    }

    createStars() {
        return createStars(this.rating.stars); //* completetodo make functon that will create stars because asiat`s method won`t work in my websie
    }
    getPrice() {
        return `$${formatMoneys(this.priceCents)}`;
    }
    extroInfoHtml() {
        return "";
    }
}

export class Clothing extends Product {
    sizeChartLink;
    constructor(productDetails) {
        super(productDetails);
        this.sizeChartLink = productDetails.sizeChartLink;
    }
    extroInfoHtml() {
        return `
        <li>
            <a href="${this.sizeChartLink}" target ="_blank"> sizeChartLink</a>
        </li>
        `;
    }
}
export class Appliance extends Product {
    instructionLink;
    warrantyLink;
    constructor(productDetails) {
        super(productDetails);
        this.instructionLink = productDetails.instructionLink;
        this.warrantyLink = productDetails.warrantyLink;
    }
    extroInfoHtml() {
        return `
        <li>
            <a href="${this.instructionLink}" target ="_blank"> instructionLink</a>
        </li>
        <li>
            <a href="${this.warrantyLink}" target ="_blank"> warrantyLink</a>
        </li>
       
        `;
    }
}

// const bggg = {
//     bg: "bggg",
//     ag: this,
// };
// console.log(bggg.ag);

/* const tshirt = new Clothing({
//     id: "83d4ca15-0f35-48f5-b7a3-1ea210004f2e",
//     img: "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
//     name: "Adults Plain Cotton T-Shirt - 2 Pack",
//     rating: {
//         stars: 4.5,
//         count: 56,
//     },
//     priceCents: 799,
//     keywords: ["tshirts", "apparel", "mens"],
//     type: "clothing",
//     sizeChartLink: "#",
// });
// console.log(tshirt);
// console.log(tshirt.getPrice());
*/
/*
// const someProduct = new Product({
//     id: "e47638ce-6aa0-4b85-b27f-e1d07eb671d2",
//     img: "https://images.unsplash.com/photo-1595861021888-e8192a7f774e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
//     name: "Basketball ball",
//     rating: {
//         stars: 4.5,
//         count: 56,
//     },
//     priceCents: 5035, // can delete this code
// });
//console.log(someProduct);
*/

/*
// const myProducts = [
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
// ];
*/
export let products = [];

export function loadProductsFetch() {
    const promise = fetch("https://databse-amazon.vercel.app/js/data")
        .then((response) => {
            return response.json();
        })
        .then((productsData) => {
            products = productsData.map((productDetails) => {
                if (productDetails.type === `clothing`) {
                    // productDetails.sizeChartLink = "/img/clothing-size-chart.png";
                    return new Clothing(productDetails); //*complete todo  add stylse to link
                } else if (productDetails.type === `appliance`) {
                    //productDetails.warrantyLink = "/img/appliance-warranty.png";
                    //productDetails.instructionLink = "/img/appliance-instructions.png";
                    return new Appliance(productDetails);
                }
                return new Product(productDetails);
            });
        });
    return promise;
}
// loadProductsFetch().then(()=>{
//just for practise
// })

// export function loadProducts(fun) {
//     const xhr = new XMLHttpRequest();
//     xhr.addEventListener("load", () => {
//         // todo прогнати цей array with map to change src of img and add my products
//         products = JSON.parse(xhr.response).map((productDetails) => {
//             productsImg.forEach((elm) => {
//                 if (productDetails.id === elm.id) {
//                     productDetails.img = elm.img;
//                 }
//                 //todo frankeschtein function (add code above additional check where we wil give type "appliance " to some products ,searching will be by name with ternal operator || )
//             });
//             // if (productDetails.id === "e43638ce-6aa0-4b85-b27f-e1d07eb678c6") {
//             //     productDetails.img =
//             //         "https://images.unsplash.com/photo-1631180543602-727e1197619d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80";
//             // }
//             if (productDetails.type === `clothing`) {
//                 productDetails.sizeChartLink = "/img/clothing-size-chart.png";
//                 return new Clothing(productDetails); //*complete todo  add stylse to link
//             } else if (productDetails.type === `appliance`) {
//                 productDetails.warrantyLink = "/img/appliance-warranty.png";
//                 productDetails.instructionLink = "/img/appliance-instructions.png";
//                 return new Appliance(productDetails);
//             }
//             return new Product(productDetails);
//         });
//         fun(products);
//         console.log(products);
//     });
//     xhr.open("GET", "https://supersimplebackend.dev/products");
//     xhr.send();
// }
//loadProducts(); //* it was great start code of requests to server , but we need to become clever

/*products.map((productDetails) => {
    if (productDetails.type === `clothing`) {
        return new Clothing(productDetails); //*complete todo  add stylse to link
    } else if (productDetails.type === `appliance`) {
        return new Appliance(productDetails);
    }
    return new Product(productDetails);
}); */

/*
<svg height="64px" width="64px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 47.94 47.94" xml:space="preserve" fill="#ffffff" stroke="#000000" stroke-width="1.9175999999999997">

    <g id="SVGRepo_bgCarrier" stroke-width="0"/>
    
    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.47939999999999994"/>
    
    <g id="SVGRepo_iconCarrier"> <path style="fill:#f38507;" d="M26.285,2.486l5.407,10.956c0.376,0.762,1.103,1.29,1.944,1.412l12.091,1.757 c2.118,0.308,2.963,2.91,1.431,4.403l-8.749,8.528c-0.608,0.593-0.886,1.448-0.742,2.285l2.065,12.042 c0.362,2.109-1.852,3.717-3.746,2.722l-10.814-5.685c-0.752-0.395-1.651-0.395-2.403,0l-10.814,5.685 c-1.894,0.996-4.108-0.613-3.746-2.722l2.065-12.042c0.144-0.837-0.134-1.692-0.742-2.285l-8.749-8.528 c-1.532-1.494-0.687-4.096,1.431-4.403l12.091-1.757c0.841-0.122,1.568-0.65,1.944-1.412l5.407-10.956 C22.602,0.567,25.338,0.567,26.285,2.486z"/> </g>
                    
</svg>
*/
