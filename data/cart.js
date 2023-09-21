"use strict";

export const cart = [
];
export function addToCart(productId){
    // check id ------------------------------------------------- 
    let savedId ;
    cart.forEach((item)=>{
        if(productId === item.productId){ // chehk if array cart has the same element if yes => save it and quantity++ , else just add this product to cart
            savedId = item;
        }  
    });
    if(savedId){
        savedId.quantity++;
    }else{
        cart.push({
            productId: productId,
            quantity: 1,
        });
    }
}