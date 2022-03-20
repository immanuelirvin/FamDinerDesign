var email = document.getElementById("input-email");
var password = document.getElementById("input-password");
var login = document.getElementById("submit-login");

login.addEventListener("click", function(){
    if(email.value == "" || email.value == null){
        alert("Email harus diisi");
    }
    if(password.value == "" || password.value == null){
        alert("Password harus diisi");
    }
})


