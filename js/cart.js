let productsInCart = localStorage.getItem("productsInCart");
let productsCart = document.querySelector(".cart");

let item = JSON.parse(productsInCart);
if (productsInCart) {
  drawCartProducts(item);
  //data in localStorage is string not objec because we convert it ----> JSON.stringfy(...)
  //and now we need to convert it to object to deal with it ---- JSON.parse(...)
}

function drawCartProducts(products) {
  // We will intalize variable to travarse on the array of the objects that is above
  let y = products.map((item, index) => {
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
                </div>
                <p class="card-text">${item.discription}</p>
                <button href="" class="btn btn-danger addToCartBtn" onClick="removeFromCart(${index})">Remove from Cart</button>
            </div>
        </div>
        `;
  });
  productsCart.innerHTML = y;
}

// var element = document.getElementById(`${item.id}`);
// element.parentNode.removeChild(element);

function removeFromCart(index) {
  //move products names to chopping cart icon
  item.splice(index, 1);
  localStorage.setItem("productsInCart", JSON.stringify(item));
  drawCartProducts(item);
}
