let username = document.querySelector("#username");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let registerBtn = document.querySelector("#sign_up");

registerBtn.addEventListener("click", function (e) {
  e.preventDefault();
  // <input type= "submit"> ---> from it proberity that it do refresh to all page when click it
  // So, here not go to login.html until we stop the defualt by this syntax

  if (username.value === "" || email.value === "" || password.value === "") {
    alert("Please Enter the Values ...");
  } else {
    localStorage.setItem("username", username.value);
    localStorage.setItem("email", email.value);
    localStorage.setItem("password", password.value);

    setTimeout(() => {
      // to go to another place.
      window.location = "login.html";
    }, 1500); //after 1.5 second
  }
});
