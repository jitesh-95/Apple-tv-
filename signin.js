document.querySelector("form").addEventListener("submit", signin);
var regdUsers = JSON.parse(localStorage.getItem("userdata"));
console.log(regdUsers);

function signin() {
  event.preventDefault();
  var enteredEmail = document.querySelector("#inputemail").value;
  //console.log(email);

<<<<<<< HEAD
  for (var i = 0; i < regdUsers.length; i++) {
    console.log(regdUsers[i]);
    if (
      regdUsers[i].email == enteredEmail
    ) {
        //console.log( regdUsers[i].email);
      alert("login success");
      window.location.href = "index.html";
      break;
    } else if(regdUsers[i].email != enteredEmail){
      alert("login failed");
      
=======
function signin(){
    event.preventDefault();

    var appleId = document.querySelector("#inputemail").value;

    console.log(appleId);
    for(var i = 0; i<usersignin.length; i++){
        
        if(usersignin[i].email == appleId){
            alert("Login Successfull");
            window.location.href = "index.html";
            break;
        }
        else{
            alert("Login failed");
        }
>>>>>>> 42bd4c6beb3847d24b550717697931c061e8b1b5
    }
  }
}
