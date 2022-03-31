document.querySelector("form").addEventListener("submit",signup);

var userData = JSON.parse(localStorage.getItem("userdata")) || [];

function signup(){
    
    event.preventDefault();

    var userobj = {
        firstName : document.querySelector("#inputname").value,
        lastName : document.querySelector("#inputlastname").value,
        dob : document.querySelector("#inputbirthday").value,
        email : document.querySelector("#inputemail").value,
        password : document.querySelector("#inputpassword").value,
        checkbox : document.querySelector("#exampleCheck1").value,  
    };
    console.log(userobj);
    userData.push(userobj);
    alert("Sign Up success")
    window.location.href = "signin.html"
    localStorage.setItem("userdata", JSON.stringify(userData));
     
}