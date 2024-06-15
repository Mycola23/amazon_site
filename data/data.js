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

class Product {
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

    getStarUrl() {
        return `img/icons/star.svg`; //todo make functon that will create stars because asiat`s method won`t work in my websie
    }
}
const someProduct = new Product({
    id: "e47638ce-6aa0-4b85-b27f-e1d07eb671d2",
    img: "https://images.unsplash.com/photo-1595861021888-e8192a7f774e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    name: "Basketball ball",
    rating: {
        stars: 4.5,
        count: 56,
    },
    priceCents: 5035, // can delete this code
});
//console.log(someProduct);

export const products = [
    {
        id: "e47638ce-6aa0-4b85-b27f-e1d07eb671d2",
        img: "https://images.unsplash.com/photo-1595861021888-e8192a7f774e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
        name: "Basketball ball",
        rating: {
            stars: 4.5,
            count: 56,
        },
        priceCents: 5035,
    },
    //Men's Full-Zip Hooded Fleece Sweatshirt
    {
        id: "e47638ce-6aa0-4b85-b27f-e1d07eb671d1",
        img: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        name: "Gravel",
        rating: {
            stars: 4.7,
            count: 135,
        },
        priceCents: 67790,
    },
    {
        id: "e47638ce-6aa0-4b85-b27f-e1d07eb678c9",
        img: "https://plus.unsplash.com/premium_photo-1684952850099-396e7183bc6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1931&q=80",
        name: "White socks with rainbow lines",
        rating: {
            stars: 4.0,
            count: 215,
        },
        priceCents: 985,
    },
    {
        id: "e47638ce-6aa0-4b85-b27f-e1d07eb678c8",
        img: "https://images.unsplash.com/photo-1539870113056-c6d7439045ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2132&q=80",
        name: "Rainbow paper clips",
        rating: {
            stars: 3.8,
            count: 73,
        },
        priceCents: 20,
    },
    {
        id: "e47638ce-6aa0-4b85-b27f-e1d07eb678c7",
        img: "https://plus.unsplash.com/premium_photo-1663036970563-99624abc950e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        name: "Washing machine",
        rating: {
            stars: 3.5,
            count: 737,
        },
        priceCents: 31045,
    },
    {
        id: "e47638ce-6aa0-4b85-b27f-e1d07eb678c6",
        img: "https://images.unsplash.com/photo-1514651029128-173d2e6ea851?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1970&q=80",
        name: "Glass for luxury drink",
        rating: {
            stars: 3.5,
            count: 45,
        },
        priceCents: 2199,
    },
    {
        id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
        img: "https://images.unsplash.com/photo-1631180543602-727e1197619d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80",
        name: "Black and Gray Athletic Cotton Socks - 6 Pairs",
        rating: {
            stars: 4.5,
            count: 87,
        },
        priceCents: 1090,
        keywords: ["socks", "sports", "apparel"],
    },
    {
        id: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
        img: "https://images.unsplash.com/photo-1518989229647-6377f907a0b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
        name: "Intermediate Size Basketball",
        rating: {
            stars: 4,
            count: 127,
        },
        priceCents: 2095,
        keywords: ["sports", "basketballs"],
    },
    {
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
        sizeChartLink: "#",
    },
    {
        id: "54e0eccd-8f36-462b-b68a-8182611d9add",
        img: "https://images.unsplash.com/photo-1613221699807-4940ba9b83f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1985&q=80",
        name: "2 Slot Toaster - Black",
        rating: {
            stars: 5,
            count: 2197,
        },
        priceCents: 1899,
        keywords: ["toaster", "kitchen", "appliances"],
    },
    {
        id: "3ebe75dc-64d2-4137-8860-1f5a963e534b",
        img: "https://plus.unsplash.com/premium_photo-1672208149331-b415e5a7a83e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80",
        name: "6 Piece White Dinner Plate Set",
        rating: {
            stars: 4,
            count: 37,
        },
        priceCents: 2067,
        keywords: ["plates", "kitchen", "dining"],
    },
    {
        id: "8c9c52b5-5a19-4bcb-a5d1-158a74287c53",
        img: "https://images.unsplash.com/photo-1565357253897-79d691886a73?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        name: "6-Piece Nonstick, Carbon Steel Oven Bakeware Baking Set",
        rating: {
            stars: 4.5,
            count: 175,
        },
        priceCents: 3499,
        keywords: ["kitchen", "cookware"],
    },
    {
        id: "dd82ca78-a18b-4e2a-9250-31e67412f98d",
        img: "https://images.unsplash.com/photo-1685328403783-00925c2a4301?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1931&q=80",
        name: "Plain Hooded Fleece Sweatshirt",
        rating: {
            stars: 4.5,
            count: 317,
        },
        priceCents: 2400,
        keywords: ["hoodies", "sweaters", "apparel"],
    },
    {
        id: "77919bbe-0e56-475b-adde-4f24dfed3a04",
        img: "https://media.istockphoto.com/id/1306464218/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%BE%D0%BA%D0%BD%D0%BE-%D0%BC%D0%B0%D0%B3%D0%B0%D0%B7%D0%B8%D0%BD%D0%B0-%D1%81-%D0%B0%D0%BA%D0%BA%D1%83%D1%80%D0%B0%D1%82%D0%BD%D0%BE-%D1%81%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%BD%D1%8B%D0%BC%D0%B8-%D0%BF%D0%BE%D0%BB%D0%BE%D1%82%D0%B5%D0%BD%D1%86%D0%B0%D0%BC%D0%B8-%D0%BD%D0%B0-%D0%BF%D0%BE%D0%BB%D0%BA%D0%B0%D1%85-%D0%B2-%D0%BD%D0%B0%D1%82%D1%83%D1%80%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D1%85-%D1%86%D0%B2%D0%B5%D1%82%D0%B0%D1%85.webp?b=1&s=170667a&w=0&k=20&c=k3Xq4S1mFrv104kHdMtsiVOsWKJj2wMCsKGOei_rssg=",
        name: "Luxury towel set",
        rating: {
            stars: 4.5,
            count: 144,
        },
        priceCents: 3599,
        keywords: ["bathroom", "washroom", "restroom", "towels", "bath towels"],
    },
    {
        id: "3fdfe8d6-9a15-4979-b459-585b0d0545b9",
        img: "https://plus.unsplash.com/premium_photo-1664443944738-357d3f7d1c42?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1988&q=80",
        name: "Liquid Laundry Detergent, 110 Loads, 82.5 Fl Oz",
        rating: {
            stars: 4.5,
            count: 305,
        },
        priceCents: 2899,
        keywords: ["bathroom", "cleaning"],
    },
    {
        id: "58b4fc92-e98c-42aa-8c55-b6b79996769a",
        img: "https://media.istockphoto.com/id/1401814210/photo/one-grey-sport-shoe.webp?b=1&s=170667a&w=0&k=20&c=WYVn3Pkb4enZTWU696aNHPKcggO17RULS6X6GmU4sOY=",
        name: "Waterproof Knit Athletic Sneakers - Gray",
        rating: {
            stars: 4,
            count: 89,
        },
        priceCents: 3390,
        keywords: ["shoes", "running shoes", "footwear"],
    },
    {
        id: "5968897c-4d27-4872-89f6-5bcb052746d7",
        img: "https://media.istockphoto.com/id/947261308/photo/stylish-summer-woman-in-one-piece-baiting-suit-wearing-kimono-cover-up.webp?b=1&s=170667a&w=0&k=20&c=yKguytWVdSWYNaX09YhYF6ROR1jB3DUJNPHYx_bZ64I=",
        name: "Women's Chiffon Beachwear Cover Up - Black",
        rating: {
            stars: 4.5,
            count: 235,
        },
        priceCents: 2070,
        keywords: ["robe", "swimsuit", "swimming", "bathing", "apparel"],
        type: "clothing",
        sizeChartLink: "#",
    },
    {
        id: "aad29d11-ea98-41ee-9285-b916638cac4a",
        img: "https://media.istockphoto.com/id/1251968161/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%B1%D1%80%D0%B0%D1%83%D0%BD-%D1%81%D1%82%D1%80%D0%B8%D1%82-%D1%81%D1%82%D0%B8%D0%BB%D1%8C-%D1%81%D0%BE%D0%BB%D0%BD%D1%86%D0%B5%D0%B7%D0%B0%D1%89%D0%B8%D1%82%D0%BD%D1%8B%D0%B5-%D0%BE%D1%87%D0%BA%D0%B8-%D0%B8%D0%B7%D0%BE%D0%BB%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D1%8B-%D0%BD%D0%B0-%D0%B1%D0%B5%D0%BB%D0%BE%D0%BC.webp?b=1&s=170667a&w=0&k=20&c=-3JEFqRJaErv54408MJiggW0Y01KH2z-i4uCaXEP3fk=",
        name: "Round Sunglasses",
        rating: {
            stars: 4.5,
            count: 30,
        },
        priceCents: 1560,
        keywords: ["accessories", "shades"],
    },
    {
        id: "04701903-bc79-49c6-bc11-1af7e3651358",
        img: "https://media.istockphoto.com/id/1198926250/photo/close-up-shot-of-two-females-feet.webp?b=1&s=170667a&w=0&k=20&c=rg_YE6MCjHsateeC5fVEbs0xIX8KzRBe6LqmFxMvzZ4=",
        name: "Women's Two Strap Buckle Sandals - Tan",
        rating: {
            stars: 4.5,
            count: 562,
        },
        priceCents: 2499,
        keywords: ["footwear", "sandals", "womens", "beach", "summer"],
    },
    {
        id: "901eb2ca-386d-432e-82f0-6fb1ee7bf969",
        img: "https://media.istockphoto.com/id/1317904546/ru/%D1%84%D0%BE%D1%82%D0%BE/%D1%80%D1%83%D0%BA%D0%B0-%D0%B6%D0%B5%D0%BD%D1%89%D0%B8%D0%BD%D1%8B-%D1%82%D1%80%D0%BE%D0%B3%D0%B0%D1%82%D0%B5%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9-%D0%B7%D0%B0%D0%BD%D0%B0%D0%B2%D0%B5%D1%81-%D1%81%D0%B5%D1%80%D0%B0%D1%8F-%D1%82%D0%BA%D0%B0%D0%BD%D1%8C-%D0%B7%D0%B0%D1%82%D0%B5%D0%BC%D0%BD%D0%B5%D0%BD%D0%B8%D1%8F-%D1%81%D0%B2%D0%B5%D1%82%D0%BE-%D0%B1%D0%BB%D0%BE%D0%BA%D0%B8%D1%80%D1%83%D1%8F-%D1%82%D0%BA%D0%B0%D0%BD%D1%8C.webp?b=1&s=170667a&w=0&k=20&c=or8tvaEIzjCEGpkvV7OJ-QkmQJ0X82JhXKkpWH7Wbu8=",
        name: "..curtains",
        rating: {
            stars: 4.5,
            count: 232,
        },
        priceCents: 4599,
        keywords: ["bedroom", "curtains", "home"],
    },
    {
        id: "82bb68d7-ebc9-476a-989c-c78a40ee5cd9",
        img: "https://media.istockphoto.com/id/1457115117/photo/pleased-african-american-guy-standing-alone-outside.webp?b=1&s=170667a&w=0&k=20&c=Eh8S0x7f0Mj02xs02YoaHW5p_2sjnvdQ2cTIKIHKfYA=",
        name: "Men's Slim-Fit Summer Shorts",
        rating: {
            stars: 4,
            count: 160,
        },
        priceCents: 1699,
        keywords: ["shorts", "apparel", "mens"],
    },
    {
        id: "c2a82c5e-aff4-435f-9975-517cfaba2ece",
        img: "https://media.istockphoto.com/id/1300879783/photo/electric-kettle.webp?b=1&s=170667a&w=0&k=20&c=t-Yh1Z9vXuaAUN5VzBHVZI3buGvpOqkzOiDjPWI2awY=",
        name: "Electric Glass and Steel Hot Tea Water Kettle 1.7 Liter",
        rating: {
            stars: 5,
            count: 846,
        },
        priceCents: 3074,
        keywords: ["water boiler", "appliances", "kitchen"],
    },
    {
        id: "6b07d4e7-f540-454e-8a1e-363f25dbae7d",
        img: "https://media.istockphoto.com/id/1443903402/ru/%D1%84%D0%BE%D1%82%D0%BE/%D1%81%D0%B2%D0%B5%D1%82%D0%BB%D1%8B%D0%B9-%D1%86%D0%B2%D0%B5%D1%82-%D1%81%D0%B0%D0%BB%D1%84%D0%B5%D1%82%D0%BA%D0%B8-%D1%82%D0%BA%D0%B0%D0%BD%D0%B5%D0%B2%D0%BE%D0%B9-%D0%BA%D0%BE%D1%80%D0%BE%D0%B1%D0%BA%D0%B8-%D0%BD%D0%B0-%D0%B1%D0%B5%D0%BB%D0%BE%D0%BC-%D1%84%D0%BE%D0%BD%D0%B5-%D0%BA%D0%BE%D0%BD%D1%86%D0%B5%D0%BF%D1%86%D0%B8%D1%8F-%D0%BF%D1%80%D0%BE%D1%81%D1%82%D1%83%D0%B4%D1%8B-%D0%B8-%D0%B3%D1%80%D0%B8%D0%BF%D0%BF%D0%B0.webp?b=1&s=170667a&w=0&k=20&c=DsdLz-QZcgq7r3K2lRVvMXhCWlDHlt8HvcrWlz-KdSg=",
        name: "Ultra Soft Tissue 2-Ply - 18 Box",
        rating: {
            stars: 4,
            count: 99,
        },
        priceCents: 2374,
        keywords: ["kleenex", "tissues", "kitchen", "tissues box", "napkins"],
    },
    {
        id: "a82c6bac-3067-4e68-a5ba-d827ac0be010",
        img: "https://media.istockphoto.com/id/1485385630/ru/%D1%84%D0%BE%D1%82%D0%BE/%D1%81%D1%87%D0%B0%D1%81%D1%82%D0%BB%D0%B8%D0%B2%D1%8B%D0%B9-%D1%83%D0%BB%D1%8B%D0%B1%D0%B0%D1%8E%D1%89%D0%B8%D0%B9%D1%81%D1%8F-%D0%BC%D1%83%D0%B6%D1%87%D0%B8%D0%BD%D0%B0-%D0%BD%D0%B0-%D0%BE%D1%82%D0%B4%D1%8B%D1%85%D0%B5-%D0%BD%D0%B0-%D0%BF%D0%BB%D1%8F%D0%B6%D0%B5-%D0%B4%D0%B5%D0%BB%D0%B0%D0%B5%D1%82-%D1%81%D0%B5%D0%BB%D1%84%D0%B8-%D0%BA%D1%80%D0%B0%D1%81%D0%B8%D0%B2%D1%8B%D0%B9-%D0%BF%D0%B0%D1%80%D0%B5%D0%BD%D1%8C-%D0%B2-%D0%B1%D0%B5%D0%BB%D0%BE%D0%B9-%D0%BB%D0%B5%D1%82%D0%BD%D0%B5%D0%B9.webp?b=1&s=170667a&w=0&k=20&c=_K0XnAYTxYfPVJF4AXbTHsapfvhlKOnaR9THABDYvug=",
        name: "Straw Lifeguard Sun Hat",
        rating: {
            stars: 4,
            count: 215,
        },
        priceCents: 2200,
        keywords: ["hats", "straw hats", "summer", "apparel"],
    },
    {
        id: "e4f64a65-1377-42bc-89a5-e572d19252e2",
        img: "https://media.istockphoto.com/id/1486221043/ru/%D1%84%D0%BE%D1%82%D0%BE/%D1%81%D0%B5%D1%80%D1%8C%D0%B3%D0%B8-%D0%B3%D0%B2%D0%BE%D0%B7%D0%B4%D0%B8%D0%BA%D0%B8-%D0%B8%D0%B7-%D0%BE%D0%BA%D1%81%D0%B8%D0%B4%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%BD%D0%BE%D0%B3%D0%BE-%D1%81%D0%B5%D1%80%D0%B5%D0%B1%D1%80%D0%B0-925-%D0%BF%D1%80%D0%BE%D0%B1%D1%8B.webp?b=1&s=170667a&w=0&k=20&c=ZUFSbtSvB9eDluMu1umCFNU8qI1NSR4oHG8-wq-E5Mk=",
        name: "Sterling Silver Sky Flower Stud Earrings",
        rating: {
            stars: 4.5,
            count: 52,
        },
        priceCents: 1799,
        keywords: ["jewelry", "accessories", "womens"],
    },
    {
        id: "b0f17cc5-8b40-4ca5-9142-b61fe3d98c85",
        img: "https://images.unsplash.com/photo-1576226565048-f377166d7e7f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8V29tZW4ncyUyMFN0cmV0Y2glMjBQb3BvdmVyJTIwSG9vZGllfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
        name: "Women's Stretch Popover Hoodie",
        rating: {
            stars: 4.5,
            count: 2465,
        },
        priceCents: 1374,
        keywords: ["hooded", "hoodies", "sweaters", "womens", "apparel"],
        type: "clothing",
        sizeChartLink: "images/clothing-size-chart.png",
    },
    {
        id: "a93a101d-79ef-4cf3-a6cf-6dbe532a1b4a",
        img: "https://media.istockphoto.com/id/1291433567/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%BC%D1%8F%D0%B3%D0%BA%D0%B8%D0%B5-%D0%BA%D0%BE%D0%B2%D1%80%D0%B8%D0%BA%D0%B8-%D0%B4%D0%BB%D1%8F-%D0%B2%D0%B0%D0%BD%D0%BD.webp?b=1&s=170667a&w=0&k=20&c=4xcNdEnzav1yMlT6L7MjTTItFKA8FLW4ACXA2V4l0wQ=",
        name: "Bathroom Bath Rug Mat 20 x 31 Inch - Grey",
        rating: {
            stars: 4.5,
            count: 119,
        },
        priceCents: 1250,
        keywords: ["bathmat", "bathroom", "home"],
    },
    {
        id: "4f4fbcc2-4e72-45cc-935c-9e13d79cc57f",
        img: "https://media.istockphoto.com/id/1457680908/uk/%D1%84%D0%BE%D1%82%D0%BE/%D0%B4%D1%96%D0%B2%D1%87%D0%B8%D0%BD%D0%B0-%D0%B7-%D0%BA%D1%80%D0%B0%D1%81%D0%B8%D0%B2%D0%BE-%D1%83%D0%BA%D0%BB%D0%B0%D0%B4%D0%B5%D0%BD%D0%B8%D0%BC-%D0%B2%D0%BE%D0%BB%D0%BE%D1%81%D1%81%D1%8F%D0%BC-%D0%B2-%D0%B1%D1%96%D0%BB%D0%BE%D0%BC%D1%83-%D1%81%D0%B2%D0%B5%D1%82%D1%80%D1%96-%D1%81%D0%BF%D0%BE%D0%BA%D1%96%D0%B9%D0%BD%D0%BE-%D1%81%D1%82%D0%BE%D1%97%D1%82%D1%8C-%D0%BF%D1%80%D0%B8%D0%BA%D1%80%D0%B8%D0%B2%D0%B0%D1%8E%D1%87%D0%B8-%D0%BE%D0%B4%D0%BD%D0%B5-%D0%BE%D0%BA%D0%BE.jpg?s=612x612&w=0&k=20&c=4cJcq-I5tsA6GOYHHFDuVqBLuFy5SFTih3uKq5GY3JE=",
        name: "Women's Knit Ballet Flat",
        rating: {
            stars: 4,
            count: 326,
        },
        priceCents: 2640,
        keywords: ["shoes", "flats", "womens", "footwear"],
    },
    {
        id: "8b5a2ee1-6055-422a-a666-b34ba28b76d4",
        img: "https://images.unsplash.com/photo-1492447166138-50c3889fccb1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TWVuJ3MlMjBSZWd1bGFyJTIwRml0JTIwUXVpY2slMjBEcnklMjBHb2xmJTIwUG9sbyUyMFNoaXJ0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
        name: "Men's Regular-Fit Quick-Dry Golf Polo Shirt",
        rating: {
            stars: 4.5,
            count: 2556,
        },
        priceCents: 1599,
        keywords: ["tshirts", "shirts", "apparel", "mens"],
        type: "clothing",
        sizeChartLink: "#",
    },
    {
        id: "b86ddc8b-3501-4b17-9889-a3bad6fb585f",
        img: "https://media.istockphoto.com/id/1153754020/photo/stainless-steel-trash-can.webp?b=1&s=170667a&w=0&k=20&c=CD9J5lR_0Ved6GiS1TnsjNda5QHgu_6WzZ15SJO_YF4=",
        name: "Trash Can with Foot Pedal - Brushed Stainless Steel",
        rating: {
            stars: 4.5,
            count: 2286,
        },
        priceCents: 8300,
        keywords: ["garbage", "bins", "cans", "kitchen"],
    },
    {
        id: "19c6a64a-5463-4d45-9af8-e41140a4100c",
        img: "https://media.istockphoto.com/id/942993390/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%BA%D1%80%D1%8B%D1%88%D0%BA%D0%B0-bolster-%D0%B8-zipper-%D0%BD%D0%B0-%D0%BA%D1%80%D0%BE%D0%B2%D0%B0%D1%82%D0%B8-%D0%B2-%D1%81%D0%BF%D0%B0%D0%BB%D1%8C%D0%BD%D0%B5-%D0%B4%D0%BB%D1%8F-%D0%B0%D0%BB%D0%BB%D0%B5%D1%80%D0%B3%D0%B8%D0%B8-%D0%BF%D1%80%D0%B5%D0%B4%D0%BE%D1%85%D1%80%D0%B0%D0%BD%D0%B5%D0%BD%D0%B8%D1%8F.webp?b=1&s=170667a&w=0&k=20&c=S-l158VHTVKHX4CzvPAOL8_bt96rYksVNV05Y8b50vs=",
        name: "Duvet Cover Set with Zipper Closure",
        rating: {
            stars: 4,
            count: 456,
        },
        priceCents: 2399,
        keywords: ["bedroom", "bed sheets", "sheets", "covers", "home"],
    },
    {
        id: "d2785924-743d-49b3-8f03-ec258e640503",
        img: "https://images.unsplash.com/photo-1419179755747-14e631575162?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8V29tZW4ncyUyMENodW5reSUyMENhYmxlJTIwQmVhbmllJTIwR3JheXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
        name: "Women's Chunky Cable Beanie - Gray",
        rating: {
            stars: 5,
            count: 83,
        },
        priceCents: 1250,
        keywords: ["hats", "winter hats", "beanies", "tuques", "apparel", "womens"],
    },
    {
        id: "ee1f7c56-f977-40a4-9642-12ba5072e2b0",
        img: "https://media.istockphoto.com/id/518179436/photo/trousers.webp?b=1&s=170667a&w=0&k=20&c=ifi5a6v0q4C4gIbAMNNLAX3_KW1X3ANVZDOYmyZLo_Q=",
        name: "Men's Classic-fit Pleated Chino Pants",
        rating: {
            stars: 4.5,
            count: 9017,
        },
        priceCents: 2290,
        keywords: ["pants", "apparel", "mens"],
    },
    {
        id: "1c079479-8586-494f-ab53-219325432536",
        img: "https://media.istockphoto.com/id/496719837/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%BC%D0%BE%D1%82%D0%B8%D0%B2%D0%B0%D1%86%D0%B8%D1%8F-%D1%82%D0%BE%D0%BF%D0%BB%D0%B8%D0%B2%D0%B0-%D0%B4%D0%B2%D0%B8%D0%B3%D0%B0%D1%82%D0%B5%D0%BB%D0%B5%D0%BC-%D1%87%D0%B5%D0%BB%D0%BE%D0%B2%D0%B5%D0%BA%D0%B0.webp?b=1&s=170667a&w=0&k=20&c=SrxLVxQp4gSMdfM803COB_LDOj0NEyR21pULLNFR6-Y=",
        name: "Men's Athletic Sneaker",
        rating: {
            stars: 4,
            count: 229,
        },
        priceCents: 3890,
        keywords: ["shoes", "running shoes", "footwear", "mens"],
    },
    {
        id: "4df68c27-fd59-4a6a-bbd1-e754ddb6d53c",
        img: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8TWVuJ3MlMjBOYXZpZ2F0b3IlMjBTdW5nbGFzc2VzJTIwUGlsb3R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
        name: "Men's Navigator Sunglasses Pilot",
        rating: {
            stars: 3.5,
            count: 42,
        },
        priceCents: 1690,
        keywords: ["sunglasses", "glasses", "accessories", "shades"],
    },
    {
        id: "4e37dd03-3b23-4bc6-9ff8-44e112a92c64",
        img: "https://images.unsplash.com/photo-1604762433261-a046add6fc11?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bmFtZSUzQSUyMCUyMk5vbiUyMFN0aWNrJTIwQ29va3dhcmUlMjBTZXQlMkMlMjBQb3RzJTJDJTIwUGFucyUyMGFuZCUyMFV0ZW5zaWxzJTIwJTIwJTIwMTUlMjBQaWVjZXMlMjIlMkN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
        name: "Non-Stick Cookware Set, Pots, Pans and Utensils - 15 Pieces",
        rating: {
            stars: 4.5,
            count: 511,
        },
        priceCents: 6797,
        keywords: ["cooking set", "kitchen"],
    },
    {
        id: "a434b69f-1bc1-482d-9ce7-cd7f4a66ce8d",
        img: "https://images.unsplash.com/photo-1519577918463-484ce33e1ecb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8VmFuaXR5JTIwTWlycm9yJTIwd2l0aCUyMEhlYXZ5JTIwQmFzZSUyMCUyMCUyMENocm9tZSUyMnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
        name: "Vanity Mirror with Heavy Base - Chrome",
        rating: {
            stars: 4.5,
            count: 130,
        },
        priceCents: 1649,
        keywords: ["bathroom", "washroom", "mirrors", "home"],
    },
    {
        id: "a45cfa0a-66d6-4dc7-9475-e2b01595f7d7",
        img: "https://media.istockphoto.com/id/1449531857/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%BC%D0%BE%D0%BB%D0%BE%D0%B4%D0%B0%D1%8F-%D1%81%D0%BF%D0%BE%D1%80%D1%82%D1%81%D0%BC%D0%B5%D0%BD%D0%BA%D0%B0-%D0%B4%D0%B5%D0%BB%D0%B0%D0%B5%D1%82-%D1%80%D0%B0%D1%81%D1%82%D1%8F%D0%B6%D0%BA%D1%83-%D0%BF%D0%B5%D1%80%D0%B5%D0%B4-%D0%B1%D0%B5%D0%B3%D0%BE%D0%BC.webp?b=1&s=170667a&w=0&k=20&c=dOAq-A-1JnfcAnfV8K9Jru6y3Z6YNvmlpQu3I5fUcLg=",
        name: "Women's Fleece Jogger Sweatpant",
        rating: {
            stars: 4.5,
            count: 248,
        },
        priceCents: 2400,
        keywords: ["pants", "sweatpants", "jogging", "apparel", "womens"],
    },
    {
        id: "d339adf3-e004-4c20-a120-40e8874c66cb",
        img: "https://images.unsplash.com/photo-1653083150294-071be29d3da0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8V2lyZSUyMEVhcnJpbmdzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
        name: "Double Oval Twist French Wire Earrings - Gold",
        rating: {
            stars: 4.5,
            count: 117,
        },
        priceCents: 2400,
        keywords: ["accessories", "womens"],
    },
    {
        id: "d37a651a-d501-483b-aae6-a9659b0757a0",
        img: "https://media.istockphoto.com/id/1169331939/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%BA%D1%83%D0%B1%D0%B8%D0%BA%D0%B8-%D1%81%D0%B0%D1%85%D0%B0%D1%80%D0%B0-%D0%BA%D0%BE%D1%84%D0%B5-%D0%B8-%D1%87%D0%B0%D1%8F.webp?b=1&s=170667a&w=0&k=20&c=ylA9dMyHbwrxCSsAKCJCq9ay4XvcyKNyfTCT-cBnUiA=",
        name: "Round Airtight Food Storage Containers - 5 Piece",
        rating: {
            stars: 4,
            count: 126,
        },
        priceCents: 2899,
        keywords: ["boxes", "food containers", "kitchen"],
    },
    {
        id: "0d7f9afa-2efe-4fd9-b0fd-ba5663e0a524",
        img: "https://media.istockphoto.com/id/1494309125/ru/%D1%84%D0%BE%D1%82%D0%BE/%D1%87%D0%B5%D1%80%D0%BD%D0%B0%D1%8F-%D0%BF%D0%BB%D0%B0%D1%81%D1%82%D0%B8%D0%BA%D0%BE%D0%B2%D0%B0%D1%8F-%D0%B8-%D1%81%D1%82%D0%B5%D0%BA%D0%BB%D1%8F%D0%BD%D0%BD%D0%B0%D1%8F-%D0%B0%D0%B2%D1%82%D0%BE%D0%BC%D0%B0%D1%82%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B0%D1%8F-%D1%8D%D1%81%D0%BF%D1%80%D0%B5%D1%81%D1%81%D0%BE-%D0%BC%D0%B0%D1%88%D0%B8%D0%BD%D0%B0-%D0%B8%D0%BB%D0%B8-%D0%BA%D0%BE%D1%84%D0%B5%D0%B2%D0%B0%D1%80%D0%BA%D0%B0-%D0%B2%D0%B8%D0%B4-%D1%81%D0%B2%D0%B5%D1%80%D1%85%D1%83.webp?b=1&s=170667a&w=0&k=20&c=KqURQ4rU8Nke7CKIquOEa_tBemtge4yyNK5vv4MzDdw=",
        name: "Coffeemaker with Glass Carafe and Reusable Filter - 25 Oz, Black",
        rating: {
            stars: 4.5,
            count: 1211,
        },
        priceCents: 2250,
        keywords: ["coffeemakers", "kitchen", "appliances"],
    },
    {
        id: "02e3a47e-dd68-467e-9f71-8bf6f723fdae",
        img: "https://images.unsplash.com/photo-1485942878383-8dd4fc9bab2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8QmxhY2tvdXQlMjBDdXJ0YWluc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
        name: "Blackout Curtains Set 42 x 84-Inch - Black, 2 Panels",
        rating: {
            stars: 4.5,
            count: 363,
        },
        priceCents: 3099,
        keywords: ["bedroom", "home"],
    },
    {
        id: "8a53b080-6d40-4a65-ab26-b24ecf700bce",
        img: "https://images.unsplash.com/photo-1684248655527-46bee8e79029?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Q290dG9uJTIwQmF0aCUyMFRvd2Vsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
        name: "100% Cotton Bath Towels - 2 Pack, Light Teal",
        rating: {
            stars: 4.5,
            count: 93,
        },
        priceCents: 2110,
        keywords: ["bathroom", "home", "towels"],
    },
    {
        id: "10ed8504-57db-433c-b0a3-fc71a35c88a1",
        img: "https://media.istockphoto.com/id/1147381752/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%B6%D0%B5%D0%BD%D1%89%D0%B8%D0%BD%D0%B0-%D0%BF%D1%80%D0%B5%D0%B4%D1%81%D1%82%D0%B0%D0%B2%D0%BB%D1%8F%D1%8F-%D0%BE%D0%B1%D1%83%D0%B2%D1%8C-%D1%82%D1%80%D0%B5%D0%BD%D0%B5%D1%80%D0%BE%D0%B2-%D1%81%D0%BF%D0%BE%D1%80%D1%82%D0%B8%D0%B2%D0%BD%D0%BE%D0%B9-%D0%BE%D0%B4%D0%B5%D0%B6%D0%B4%D1%8B.webp?b=1&s=170667a&w=0&k=20&c=IaqAtyiauPqxfHzUndvwoTJZBDvmug1HvkkzCGdp5Kg=",
        name: "Waterproof Knit Athletic Sneakers - Pink",
        rating: {
            stars: 4,
            count: 89,
        },
        priceCents: 3390,
        keywords: ["shoes", "running shoes", "footwear", "womens"],
    },
    {
        id: "77a845b1-16ed-4eac-bdf9-5b591882113d",
        img: "https://media.istockphoto.com/id/512979895/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%B2%D0%BF%D0%B5%D1%87%D0%B0%D1%82%D0%BB%D0%B5%D0%BD%D0%BD%D0%B0%D1%8F-%D1%81%D0%B2%D0%BE%D0%B8-%D0%BA%D1%83%D0%BB%D0%B8%D0%BD%D0%B0%D1%80%D0%BD%D1%8B%D0%B5-%D0%BD%D0%B0%D0%B2%D1%8B%D0%BA%D0%B8.webp?b=1&s=170667a&w=0&k=20&c=w-7a_ze5u30FhwVWIxt7qIsLJYgY07pc3cO-EGn22fw=",
        name: "Countertop Blender - 64oz, 1400 Watts",
        rating: {
            stars: 4,
            count: 3,
        },
        priceCents: 10747,
        keywords: ["food blenders", "kitchen", "appliances"],
    },
    {
        id: "36c64692-677f-4f58-b5ec-0dc2cf109e27",
        img: "https://plus.unsplash.com/premium_photo-1663840190867-2fd7a2f4f27d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8TWl4aW5nJTIwQm93bHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
        name: "10-Piece Mixing Bowl Set with Lids - Floral",
        rating: {
            stars: 5,
            count: 679,
        },
        priceCents: 3899,
        keywords: ["mixing bowls", "baking", "cookware", "kitchen"],
    },
    {
        id: "aaa65ef3-8d6f-4eb3-bc9b-a6ea49047d8f",
        img: "https://media.istockphoto.com/id/1308495311/ru/%D1%84%D0%BE%D1%82%D0%BE/%D1%80%D1%83%D0%BB%D0%BE%D0%BD-%D0%B1%D1%83%D0%BC%D0%B0%D0%B6%D0%BD%D1%8B%D1%85-%D0%BF%D0%BE%D0%BB%D0%BE%D1%82%D0%B5%D0%BD%D0%B5%D1%86-%D0%B2-%D0%B4%D0%B5%D1%80%D0%B5%D0%B2%D1%8F%D0%BD%D0%BD%D0%BE%D0%B9-%D0%BA%D0%BE%D1%80%D0%BE%D0%B1%D0%BA%D0%B5.webp?b=1&s=170667a&w=0&k=20&c=DkhwjnYZ2csJf4rFOL5vlaMiVx_OPaKeNFuu_38sDQ4=",
        name: "2-Ply Kitchen Paper Towels - 30 Pack",
        rating: {
            stars: 4.5,
            count: 1045,
        },
        priceCents: 5799,
        keywords: ["kitchen", "kitchen towels", "tissues"],
    },
    {
        id: "bc2847e9-5323-403f-b7cf-57fde044a955",
        img: "https://media.istockphoto.com/id/1200902086/photo/mockup-black-blank-hoodie-on-a-young-guy-for-design-presentation.webp?b=1&s=170667a&w=0&k=20&c=yq7EkqVe2PPlLUiuCjLz4zsAEQPIe9KZcp7jMD4Fz5c=",
        name: "Men's Full-Zip Hooded Fleece Sweatshirt",
        rating: {
            stars: 4.5,
            count: 3157,
        },
        priceCents: 2400,
        keywords: ["sweaters", "hoodies", "apparel", "mens"],
    },
].map((productDetails) => {
    return new Product(productDetails);
});
console.log(products);
