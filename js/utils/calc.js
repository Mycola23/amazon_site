import { cart, removeFromCart, updateQuantity } from "../data/cart.js";
import { products } from "../data/data.js";
import { formatMoneys } from "./utils/money.js";

// let itemsQuantity = JSON.parse(localStorage.getItem("cart-quantity"));  //* it isn`t necessarily

//* 1. i have to create a SumOFShipping == sum of (shipping and handling) ,
/*  2.  //*  totalSum  without tax, SumOFShipping ,

    3.  calc totalSum  without sum of (shipping and handling) ,
    4. calc totalSum with all parametres
    
    */
function Calc(params) {}
