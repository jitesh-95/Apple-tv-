document.querySelector("form").addEventListener("submit",signin);

var usersignin = JSON.parse(localStorage.getItem("userdata"));
console.log(usersignin);

function signin(){
    event.preventDefault();

    var appleId = document.querySelector("#inputemail").value;

    console.log(appleId);
    for(var i = 0; i<usersignin; i++){

        if(usersignin[i] == appleId){
            alert("Login Successfull");
            window.location.href = "index.html";
            break;
        }
        else{
            alert("Login failed");
        }
    }
}