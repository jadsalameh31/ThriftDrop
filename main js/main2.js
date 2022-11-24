/* Login Authentication */

    const newUsername = document.getElementById("username"); 

    const newPassword = document.getElementById("password");

    let signIn = document.getElementById("login"); 

 

    function mynextfunction(e){
    

    const filArr = finalUser.filter(user =>
    user.usernameAll == newUsername.value && user.passwordAll == newPassword.value)

    // window.location.href = "log.html"
    console.log(filArr)

    if(filArr.length > 0){
    alert (`Welcome, you are now logged in`);
    window.open('Profile.html')

    }
     else {
     alert('username or password incorrect');
    }
}

/*  logging out */

     function deleteUser(){

  let text = "Are You Sure you want to log out?";
  if (confirm(text) == true) {
    window.localStorage.removeItem('users');
     window.localStorage.removeItem('loggedin');
     alert("Logged out")
     window.location.href = "login.html";
  } else {
    alert("logging out aborted");
  }

}

/* Redirect to shop */

function tocart(e) {
    window.location.href = "cartpage.html"
}
function toshop(e) {
    window.location.href = "shop.html"
}
/* Contacting the Foundeers */
function contactMaya(e){
    window.location.href = "mailto:mayahamadi143@gmail.com";
}
function contactJad(e){
    window.location.href = "mailto:jadsalameh1800@gmail.com";
}