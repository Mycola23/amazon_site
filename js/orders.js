import { ObserveBurgerMenu, backToTop } from "../js/utils/linkfunc.js";
//--------------
ObserveBurgerMenu();
backToTop();
//------------------------
export const orders = JSON.parse(localStorage.getItem("orders")) || [];

export function addOrder(order) {
    orders.unshift(order);
    saveOrderToStorage();
}
function saveOrderToStorage(order) {
    localStorage.setItem("orders", JSON.stringify(orders));
}
