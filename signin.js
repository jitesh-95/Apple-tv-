document.querySelector("form").addEventListener("submit", signin);
var regdUsers = JSON.parse(localStorage.getItem("userdata"));
//console.log(regdUsers);

function signin() {
  event.preventDefault();
  var enteredEmail = document.querySelector("#inputemail").value;
  console.log(email);

  for (var i = 0; i < regdUsers.length; i++) {
    console.log(regdUsers[i]);
    if (
      regdUsers[i].email == enteredEmail
    ) {
      alert("login success");
      window.location.href = "mens.html";
      break;
    } else {
      console.log("login failed");
    }
  }
}