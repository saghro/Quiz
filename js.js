let usernameRegex = /^[a-z0-9_-]{3,15}$/
let emailRegex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/
let password = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/ 

function validationEmail(){
    if(emailRegex.test(document.getElementById('e-mail').value)){
        document.getElementById('alert-email').innerText = 'good';
    }else {
        document.getElementById('alert-email').innerText = 'email invalide';
    }
}

function validationUsername(){
    if(usernameRegex.test(document.getElementById('name').value)){
        document.getElementById('alert-username').innerText = 'good';
        document.getElementById('alert-username').style.background-color:green;
    }else {
        document.getElementById('alert-username').innerText = 'username invalide';
    }
}

function validationPasword(){
    if(password.test(document.getElementById('psswrd').value)){
        document.getElementById('alert-password').innerText = 'good';
    }else {
        document.getElementById('alert-password').innerText = 'Make your password a combination of uppercase and lowercase letters and numbers';
    }
}

function showpassword(){
    let passwordInput = document.getElementById('psswrd');

    if(passwordInput.type == 'password'){
        passwordInput.type = 'text';
    }
    else{
        passwordInput.type = 'password';
    }
}