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
//! fix the server to connect with it and get data
/*function loadTestdata() {
    fetch("https://databse-amazon.vercel.app/js/data")
        .then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then((data) => console.log(data))
        .catch((error) => console.error("Fetch error:", error));
}*/
//loadTestdata(); // * ITss WORK YA YA YA \|||4||||0||||||4||||- unbelievable

//*18a complete
/*
function loadGreeting() {
    const xhr = new XMLHttpRequest();
    xhr.addEventListener("load", () => {
        console.log(xhr.response);
    });
    xhr.open("GET", "https://supersimplebackend.dev/greeting"), xhr.send();
}
loadGreeting();

function loadSomeData(urlBase) {
    const xhr = new XMLHttpRequest();
    xhr.addEventListener("load", () => {
        const data = xhr.response;
        console.log(data);
    });
    xhr.open("GET", `${urlBase}`);
    xhr.send();
}
loadSomeData("https://supersimplebackend.dev/cart");
*/
//*complete 18b using fetch  instead XMLHttpRequest
/*function loadGreetingFetch() {
    fetch("https://supersimplebackend.dev/greeting")
        .then((response) => {
            return response.text();
        })
        .then((text) => {
            console.log(text);
        });
}
loadGreetingFetch();*/

//*complete 18c  async await
/* 
async function loadGreetingFetchA() {
    await fetch("https://supersimplebackend.dev/greeting")
        .then((res) => {
            return res.text();
        })
        .then((text) => {
            console.log(text);
        });
    console.log("Finish loading text");
}

loadGreetingFetchA(); */
//! shift + alt + a to comment code in this way /* */
//*complete 18d request to database with POST
/* function postRequest() {
    fetch("https://supersimplebackend.dev/greeting", {
        method: "POST",
        body: JSON.stringify({ name: "Tom" }),
        headers: {
            "Content-Type": "application/json",
        },
    })
        .then((res) => {
            return res.text();
        })
        .then((data) => {
            console.log(data);
        });
}
postRequest(); */
//*complete 18e try to request to real amazon => result CORS error
/* function requestToAmazon() {
    fetch("https://amazon.com")
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            console.log(data);
        });
}
requestToAmazon(); */

//*18f complete
/* async function requestToAmazon() {
    try {
        await fetch("https://amazon.com")
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                //console.log(data);
            });
    } catch (error) {
        console.log("unexpected error ");
    }
}
requestToAmazon(); */
//*18g //video stop 21.28.56 // complete erorr handing with try catch
/* async function loadGreetingFetchEr() {
    try {
        await fetch(`https://supersimplebackend.dev/greeting`, { method: "POST" })
            .then((res) => {
                if (res.status >= 400) {
                    throw res;
                }
                return res.text();
            })
            .then((data) => {
                console.log(data);
            });
    } catch (error) {
        if (error.status === 400) {
            const erorMessage = await error.json();
            console.log(erorMessage);
            console.log("Network error . try again later ");
        }
    }
}
loadGreetingFetchEr(); */
