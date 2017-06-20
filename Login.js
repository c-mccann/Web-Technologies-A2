// DT340A - Web Technologies - Assignment 2 - Carl McCann - C12508463
/**
 * Created by carlmccann2 on 06/04/2017.
 */


function login() {
    if(loginValidation()){
        loginCompareUsers();
    }
}

function loginCompareUsers() {
    // get data from form
    var username = document.getElementById('usernameInput').value;
    var password = document.getElementById('passwordInput').value;

    var uniqueCookieName = 'WebTechA2' + username;
    if(cookieExists(uniqueCookieName)){
        var jsonUser = Cookies.getJSON(uniqueCookieName);
        if( jsonUser.username == username){      // username exists
            if(jsonUser.password == password){   // password matches
                alert(('Welcome Back, ' + username + '!'));
                globalCurrentUser = jsonUser;    // set global current user
                successfulLogin(jsonUser);
            }
            else{                                   // password doesn't match
                alert('Incorrect Password!');
            }
        }
    }
    else{
        alert("Username not Found!");
    }
}

function successfulLogin(currentUser){
    // disable login button
    document.getElementById('loginInput').disabled = true;

    // add update button
    var update = document.createElement('input');
    update.type = 'button';
    update.id = 'updateInput';
    update.value = 'Update';
    update.onclick = function(){updateCookie()};
    document.getElementById('loginRegisterForm').removeChild(document.getElementById('registerInput'));
    document.getElementById('loginRegisterForm').appendChild(update);

    // get details from currently logged on user
    document.getElementById('emailInput').value = currentUser.email;
    document.getElementById('dateOfBirthInput').value = currentUser.dob;

    // update login count
    currentUser.views += 1;
    document.getElementById('hitCounter').innerHTML = String(currentUser.views);

    //// update cookie

    var cookieName = 'WebTechA2' + currentUser.username;

    // create with same name, updated views in jsonUser and the same expiry it was created with
    var expiry = new Date(currentUser.cookieExpiry);
    createCookie(cookieName, currentUser, expiry);

    //// End of update cookie

    // add forget me button
    var forgetMe = document.createElement('input');
    forgetMe.type = 'button';
    forgetMe.id = 'forgetMeInput';
    forgetMe.value = 'Forget Me';
    forgetMe.onclick = function(){forgetUser()};
    document.body.appendChild(forgetMe);
}