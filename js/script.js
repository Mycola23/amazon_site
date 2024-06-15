"use strict";
// import
import { cart, addToCart } from "../data/cart.js";
import { products } from "../data/data.js";
//import {addToOrder,contentBox} from './checkout.js';
import { formatMoneys } from "./utils/money.js";
export const counter = document.querySelector(".link__counter");
let item = document.createElement("div");
item.className = "cards";

//top
const searchInput = document.querySelector(".search__input");
const burgerMenu = document.querySelector(".header__burger");
const menu = document.querySelector(".nav-header-right");

const linkCart = document.querySelector(".link-cart");
//const cartBtn = document.querySelector('.link-cart');
//main
const page = document.querySelector(".page");
const mainContainer = document.querySelector(".main__container");
const messagesAdd = document.querySelectorAll(".card__message");
const cards = document.querySelector(".cards");
let startPageEvents = null;
//bottom
const back = document.querySelector(".footer__btn"); // maybe not need us

//* Don`t forget repair my code and learn  writing tests for js

//---------  add eventlistener to Burgermenu --------------------------
burgerMenu.addEventListener("click", () => {
    burgerMenu.classList.toggle("__active");
    menu.classList.toggle("__active");
});
//--------------------------------------------------------

// renderProductsHtml
renderProductsHtml(products);
function renderProductsHtml(products) {
    // top
    document.addEventListener("click", (e) => {
        if (e.target.closest(".search__input")) {
            searchInput.parentElement.classList.add("__active");
        } else if (e.target.closest(".footer__btn")) {
            backToTop(); // можна винести у окремий файл і тоді б можно було використовувати по всьому сайту
        } else if (e.target.closest(".search__btn")) {
            console.log(e.target);
            e.preventDefault();
            searchingItem(searchInput, startPageEvents);
        } else {
            searchInput.parentElement.classList.remove("__active"); // todo ще одну проверку на кокой єто странице
        }
    });

    counter.innerHTML = `${JSON.parse(localStorage.getItem("cart-quantity")) || 0}`; // todo create file with function save quantity of cart щоб обійти перевірку файлу scripts.js

    // main page

    let productsHtml = "";
    products.forEach((product) => {
        productsHtml += ` 
            <div class="card">
                <div class="card__img">
                    <img src=${product.img} alt="">
                </div>
                <div class="card__content">
                    <div class="card__text">
                        ${product.name}
                    </div>
                    <div class="card__rating rating">
                        <div class="rating__stars">

                            <li class="rating__star">
                                ${product.rating.stars}
                            </li>
                            <li class="rating__star">
                                <img src= " ${product.getStarUrl()}" alt="">
                            </li>
                        </div>
                        <div class="rating__votes">
                            ${product.rating.count}
                        </div>
                    </div>
                    <div class="card__price">$${formatMoneys(product.priceCents)}</div>
                    <select class="card__quality">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                    <div class="card__message">
                        <img src="img/icons/complete.svg" alt="">
                        <span>Added</span>
                    </div>
                </div>
                <button class="card__btn" data-product-name ="${product.name}" data-product-id ="${product.id}" data-product-price = "${product.priceCents}"> Add to list</button>
            </div>`;
    });

    /*
    <div class="rating__stars">                  
        <li class="rating__star">
            ${product.rating.stars}
        </li>
        <li class="rating__star">
            <img src="img/icons/star.svg" alt="">
        </li>
    </div>
    
    */
    //if (productsHtml) {
    item.innerHTML = productsHtml;
    mainContainer.append(item);

    function updateCartQuantity() {
        let cartQuantity = 0; //JSON.parse(localStorage.getItem("cart-quantity"))
        // todo local storage   work that code don`t repeat number двічі
        cart.forEach((item) => {
            cartQuantity += item.quantity;
        });
        if (cartQuantity > 100) {
            counter.style.top = "-5px";
            counter.style.left = "calc(50% + 7px)";
        }
        localStorage.setItem("cart-quantity", JSON.stringify(cartQuantity));
        counter.innerHTML = `${JSON.parse(localStorage.getItem("cart-quantity"))}`;
    }

    // page events
    startPageEvents = function (e) {
        let target = e.target;
        if (target.closest(".card__btn")) {
            target.previousElementSibling.lastElementChild.classList.add("__active");
            //const productName = target.dataset.productName;
            const productId = target.dataset.productId;
            const productprice = target.dataset.productPrice;
            addToCart(productId, productprice);
            updateCartQuantity();
            //addToOrder();  // needs update

            //--------------------------------------------------------------------

            setTimeout(() => {
                target.previousElementSibling.lastElementChild.classList.remove("__active");
            }, 1.3 * 1000);
        }
    };

    page.addEventListener("click", startPageEvents);

    /// bottom

    /*back.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    });
});*/

    function backToTop() {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        });
    }

    // tests

    linkCart.addEventListener("click", () => {
        linkCart.classList.toggle("__active");
    });

    // lazy loading

    const cardsOnPage = document.querySelectorAll(".card");

    const observer = new IntersectionObserver(
        (entries) => {
            // IntersectionObserver - спостерігач перехресть чи перехрещюється видимий простір(в даному випадку екран спостерігача) з контентом
            entries.forEach((entry) => {
                entry.target.classList.toggle("show", entry.isIntersecting);
                if (entry.isIntersecting) {
                    observer.unobserve(entry.target);
                }
            });
            //console.log(entries);
        },
        {
            rootMargin: "0px",
        }
    );
    cardsOnPage.forEach((card) => {
        observer.observe(card);
    });
}

// todo переробити це таким чином щоб лише змінювалися список продуктів а не вся сторінка
// ------- searchingItem ----------------------------
function searchingItem(item, removefunc) {
    let newProductsList = [];
    let searchingItem = item.value;

    products.forEach((product) => {
        if (product.name.toLowerCase().includes(searchingItem.toLowerCase())) {
            console.log(product.name.toLowerCase());
            newProductsList.push(product);
        }
    });
    page.removeEventListener("click", removefunc);
    renderProductsHtml(newProductsList); // повинно лише перезавантажити сторінку  і перегенурувати HTML а воно визиває всю
    console.log(searchingItem);
    console.log(newProductsList);

    // todo cycle foreach for products аюи порівняти наше слово з зі словом із списком
}
