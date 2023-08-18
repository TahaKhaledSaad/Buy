// // localStorage.setItem('key', "value");
// // the station that the data of users exit, to do(chick, compare, any operation)
// // key--> should named as variables.

// // setItem --> to add new item of data
// localStorage.setItem('std1', "Taha");
// localStorage.setItem('std2', "Khaled");

// // getItem --> to git an item of data
// console.log(localStorage.getItem("std1"));
// console.log(localStorage.getItem("std2"));

// // removeItem --> to remove an item of data
// localStorage.removeItem("std2");

// // clear() --> to clear all items in local storage finally
// localStorage.clear();

////////////////////////////////////////////////////////////////////////////

let userInfo = document.querySelector("#user_info");
let userData = document.querySelector("#user");
let links = document.querySelector("#links");

if (localStorage.getItem("username")) {
  // i want to remove (sign in/up) icons to put user data
  links.remove();
  // userInfo has been taken (display:none;) i want to appear it
  userInfo.style.display = "flex";
  // go to localStorage and git the user name
  userData.innerHTML = localStorage.getItem("username");
}

let logOutBtn = document.querySelector("#logout");
let hideIcon = document.querySelector(".shopping_cart");
if (!localStorage.getItem("username")) {
  // i want to remove (sign in/up) icons to put user data
  logOutBtn.remove();
  hideIcon.remove();
}
logOutBtn.addEventListener("click", () => {
  localStorage.clear();
  setTimeout(() => {
    window.location = "login.html";
  }, 1500);
});
/**
 * Doxygen documentation extensions
 *
 *
 */

////////////////////////////////////////////////////////////////////////////

let allProducts = document.querySelector(".products");
let products = [
  {
    id: 1,
    name: "Strawberry, Fruit",
    imageUrl: "images/product-01.jpg",
    discription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, atque.",
  },
  {
    id: 2,
    name: "Olive oil",
    imageUrl: "images/product-02.jpg",
    discription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, atque.",
  },
  {
    id: 3,
    name: "Honey, Beekeeper",
    imageUrl: "images/product-03.jpg",
    discription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, atque.",
  },
  {
    id: 4,
    name: "Nuts, Walnuts",
    imageUrl: "images/product-04.jpg",
    discription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, atque.",
  },
  {
    id: 5,
    name: "Churros, Bakery",
    imageUrl: "images/product-05.jpg",
    discription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, atque.",
  },
  {
    id: 5,
    name: "Currants, Berry,",
    imageUrl: "images/product-06.jpg",
    discription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, atque?",
  },
];

// to draw your data in shape on website you will use this way always
// هنعمل الشكل الأساسي اللي هيطبع على اساسه كل العناصر إن شاء الله
var starsNumber = 345;

function drawItems() {
  // We will intalize variable to travarse on the array of the objects that is above
  let y = products.map((item) => {
    return `
        <!-- item-n  -->
        <div class="shadow product_item">
            <div class= "image">
                <img src="${item.imageUrl}" alt="">
            </div>
            <div class="info">
                <h3>${item.name}</h3>
                <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star-half-alt"></i>
                <span>+${(starsNumber += 15)}</span>
                </div>
                <p>${item.discription}</p>
                <button href="" class="btn btn-primary addToCartBtn" onClick="addToCart(${
                  item.id
                })">Add to Cart</button>
                
            </div>
        </div>
        `;
  });
  allProducts.innerHTML = y;
}

//function that above does not work untill invoke it(trigger, call)
drawItems();

/** steps :-
 * 1: design first product template in html file and make it ready to be shawn.
 * 2: copy the html code of first project and put it in back taks ``.
 * 3: search the dynamic code as image change every time and name of the product ...ect.
 * 4: put products in it default place as ---> allProducts.innerHTML= y;
 */

////////////////////////////////////////////////////////////////////////////

let cartBtn = document.querySelector(".addToCartBtn");
var counter = document.querySelector(".counter");
var cartProductDiv = document.querySelector(".cart_products div");
var counterX = 0;

// var addItem = [];
var addItem = localStorage.getItem("productsInCart")
  ? JSON.parse(localStorage.getItem("productsInCart"))
  : [];

if (addItem) {
  addItem.map((item) => {
    cartProductDiv.innerHTML += `<p>${++counterX}. ${item.name}</p><hr>`;
  });

  counter.innerHTML = addItem.length;
  counter.style.display = "flex";
}

// we will chick that localStorage have data or none
if ((localStorage.getItem = "username")) {
  function addToCart(id) {
    //move products names to chopping cart icon
    let choosenItem = products.find((item) => item.id === id);
    cartProductDiv.innerHTML += `
      <div>
      <p>${choosenItem.id}. ${choosenItem.name}</p>
      <hr>
      </div>
    `;
    //*******

    //move products to localStorage to move it to chopping cart page later.
    addItem = [...addItem, choosenItem];
    localStorage.setItem("productsInCart", JSON.stringify(addItem));
    //*******

    //counter
    counter.innerHTML = addItem.length;
    counter.style.display = "flex";
    //*******
  }
} else {
  window.location = "login.html"; // TODO This case dont work !!!
}

////////////////////////////////////////////////////////////////////////////

let cartIcon = document.querySelector(".cartIcon");
let cart_products = document.querySelector(".cart_products");

cartIcon.addEventListener("click", () => {
  if (cart_products.style.display == "block")
    cart_products.style.display = "none";
  else cart_products.style.display = "block";
});
document.addEventListener("scroll", () => {
  cart_products.style.display = "none";
});

////////////////////////////////////////////////////////////////////////////

// to move data from page to another page you should use --------> LocalStorage

// go to cart.js
