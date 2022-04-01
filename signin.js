document.querySelector("form").addEventListener("submit", loginFun);
var regdUsers = JSON.parse(localStorage.getItem("userdata"));
//console.log(regdUsers);

function loginFun() {
  event.preventDefault();
  var enteredEmail = document.querySelector("#inputemail").value;

  //console.log(email);

  for (var i = 0; i < regdUsers.length; i++) {
    console.log(regdUsers[i]);
    if (
      regdUsers[i].email == enteredEmail
   
    ) {
      alert("login success");
      window.location.href = "index.html";
      break;
    } else {
      console.log("login failed");
    }
  }
}