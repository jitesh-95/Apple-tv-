document.querySelector("form").addEventListener("submit", signin);
var regdUsers = JSON.parse(localStorage.getItem("userdata"));
// console.log(regdUsers);

function signin() {
  event.preventDefault();
  var enteredEmail = document.querySelector("#inputemail").value;
  //console.log(email);

  for (var i = 0; i < regdUsers.length; i++){
    //console.log(regdUsers[i]);
    if (regdUsers[i].email == enteredEmail){
        //console.log( regdUsers[i].email);
      alert("login success");
      window.location.href = "index.html";
      break;
    } else{
      alert("login failed");
    }
  }
}
