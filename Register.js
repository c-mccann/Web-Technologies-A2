// DT340A - Web Technologies - Assignment 2 - Carl McCann - C12508463

function register() {
    if(formValidation()){
        registerNewUser();
    }
}

function registerNewUser() {
    // pull info from form
    var username = document.getElementById('usernameInput').value;
    var password = document.getElementById('passwordInput').value;
    var email = document.getElementById('emailInput').value;
    var dob = document.getElementById('dateOfBirthInput').value;
    var views = 0;  // set counter to 0

    var myUser = new User(username,password,email,dob,views,new Date());   // create a user object
    var uniqueCookieName = "WebTechA2" + username;

    if(!cookieExists(uniqueCookieName)){
        myUser.cookieExpiry.setFullYear(myUser.cookieExpiry.getFullYear() + 1);
        createCookie(uniqueCookieName, myUser, myUser.cookieExpiry);
        alert(username + ', You have been registered!');
    }
    else{
        alert('User already exists!');
    }
}