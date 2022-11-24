/*  function for the main index page */

function myFunction() {
    var x = document.getElementById("menu");
    if (x.className === "menu") {
        x.className += "responsive";
    } else {
        x.className = "menu";
    }
}

/*  function for the sign up page */

let name1 = document.querySelector("#fname");
let name2 = document.querySelector("#lname");
let username = document.querySelector("#username");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let finalUser = JSON.parse(localStorage.getItem("users"));

/* A function that would receive inputs and then push it
 into an array and finally save into local storage in my browser */

function addUser(e) {
    if (name1.value == "" || name2.value == "" || username.value == "" || email.value == "" || password.value == "") {
        alert("Kindly complete all fields");
        return false;
    }

    let allUsers = {
        firstname: name1.value,
        lastname: name2.value,
        usernameAll: username.value,
        emailAll: email.value,
        passwordAll: password.value,
    };

    let indUser = [];

    if (localStorage.getItem("users") == null) {
        indUser.push(allUsers);
        localStorage.setItem("users", JSON.stringify(indUser));
    } else {
        indUser = JSON.parse(localStorage.getItem("users"));
        indUser.push(allUsers);
        localStorage.setItem("users", JSON.stringify(indUser));
    }
    console.log(indUser);
    alert("Registration completed");
    window.location.href = "login.html";

    e.preventDefault();
}
function already(e){
    if (localStorage.getItem("users") != null) {
         alert("You are already logged in");
         window.location.href = "Profile.html";
    }
    else{
        alert("You are Not logged in, log in or sign up If You Dont Have An Account")
    }
}