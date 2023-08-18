let username = document.querySelector("#username");
let password = document.querySelector("#password");
let loginBtn = document.querySelector("#sign_in");

// first we want to cantact with data that in local storage
let getUsername = localStorage.getItem("username");
let getPassword = localStorage.getItem("password");

loginBtn.addEventListener("click", function (e) {
  e.preventDefault();

  if (username.value === "" || password.value === "") {
    alert("Please, fill all filds.");
  } else {
    // we use trim() ---> to delete spaces before and after the user name.
    if (
      getUsername &&
      getUsername.trim() === username.value.trim() &&
      getPassword === password.value
    ) {
      setTimeout(() => {
        window.location = "products.html";
      }, 1500);
    } else {
      alert("Invalid Password or Email.");
    }
  }
});
