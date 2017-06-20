// DT340A - Web Technologies - Assignment 2 - Carl McCann - C12508463

var globalCurrentUser;

function showHidePassword(){
    var passwordInput = document.getElementById('passwordInput');
    if(passwordInput.getAttribute('type') == 'password') passwordInput.setAttribute('type','text');
    else passwordInput.setAttribute('type','password');
}







