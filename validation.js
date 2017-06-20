// DT340A - Web Technologies - Assignment 2 - Carl McCann - C12508463


function usernameValidation(realTime){      // realTime is a boolean that allows this function to apply style changes
    var username = document.getElementById('usernameInput').value;
    var list = document.getElementById('usernameList');

    while(list.hasChildNodes()) list.removeChild(list.lastChild);

    if(username.match(/\s/) || username.length == 0){
        if(realTime){
            var spaceConstraint = document.createElement('li');
            spaceConstraint.appendChild(document.createTextNode('Must have length > 0 and not contain any space.'));
            list.appendChild(spaceConstraint);
        }
        return false;
    }
    return true;
}

function passwordValidation(realTime){      // realTime is a boolean that allows this function to apply style changes
    var valid = true;
    var password = document.getElementById('passwordInput').value;
    var list = document.getElementById('passwordList');

    while(list.hasChildNodes()) list.removeChild(list.lastChild);

    // written on rubular.com
    if(!password.match(/\d+/)){      // must contain a digit
        if(realTime){
            var digitConstraint = document.createElement('li');
            digitConstraint.appendChild(document.createTextNode('Must Contain at least 1 digit.'));
            list.appendChild(digitConstraint);
        }
        valid = false;
    }
    if(!password.match(/[A-Z]+/)){   // must contain a uppercase letter
        if(realTime){
            var uppercaseConstraint = document.createElement('li');
            uppercaseConstraint.appendChild(document.createTextNode('Must Contain at least 1 uppercase letter.'));
            list.appendChild(uppercaseConstraint);
        }
        valid = false;
    }

    if(!password.match(/\W+/)){
        if(realTime){
            var specialCharacterConstraint = document.createElement('li');
            specialCharacterConstraint.appendChild((document.createTextNode('Must contain a special character such as ! or ?')))
            list.appendChild(specialCharacterConstraint);
        }
        valid = false;
    }

    if(!password.match(/.{8,}/)){   // must be at least 8 characters long
        if(realTime){
            var lengthConstraint = document.createElement('li');
            lengthConstraint.appendChild(document.createTextNode('Must be at least 8 characters long.'));
            list.appendChild(lengthConstraint);
        }
        valid = false;
    }


    return valid;

}

function emailValidation(realTime){ // realTime is a boolean that allows this function to apply style changes
    var email = document.getElementById('emailInput').value;
    // written on rubular.com with these five cases: 'carlmccann2@gmail.com', 'asf',
    // '@gmail.com', 'sadfsadf@.com', 'carl@gmal'


    if(email.match(/^((\w)+\.(\w)+|(\w)+)@(\w)+\.(\w)+$/)){  //matches one period mid local part of email
        // if(email.match(/^((\w)+\.*(\w)+)@(\w)+\.(\w)+$/)){    // matches multiple simultaneous periods mid local part of email

        if(realTime) document.getElementById('emailInput').style.color = 'black';
        return true;
    }

    if(realTime) document.getElementById('emailInput').style.color = 'red';
    return false;
}

function dateOfBirthValidation(realTime){ // realTime is a boolean that allows this function to apply style changes
    var dob = document.getElementById('dateOfBirthInput').value;
    var split = dob.split('/');

    var day, month, year;
    if(split.length == 3) {
        day = parseInt(split[0]);
        month = parseInt(split[1]);
        year = parseInt(split[2]);

        if(isNaN(day) || isNaN(month) || isNaN(year)){  // basic check for numbers
            if (realTime) document.getElementById('dateOfBirthInput').style.color = 'red';
            return false;
        }

        var date = new Date();

        // future proofing
        if (year >= date.getFullYear()) {               // the future can be in the this year
            if( year > date.getFullYear()){
                return false;
            }
            if (month >= (date.getMonth() + 1)) {       // the future can be in the this month
                if(month > (date.getMonth() + 1)){
                    return false;
                }
                if (day > date.getDate()) {             // but the future can't be today
                    if (realTime) document.getElementById('dateOfBirthInput').style.color = 'red';
                    return false;
                }
            }
        }

        // check for impossible months
        if(month > 12 || month < 1){
            if (realTime) document.getElementById('dateOfBirthInput').style.color = 'red';
            return false;
        }
        // days and months validation
        if(month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12){
            if(day < 1 || day > 31){
                if (realTime) document.getElementById('dateOfBirthInput').style.color = 'red';
                return false;
            }

        }

        if(month == 4 || month == 6 || month == 9 || month == 11){
            if(day < 1 || day > 30){
                if (realTime) document.getElementById('dateOfBirthInput').style.color = 'red';
                return false;
            }
        }

        if(month == 2 ){
            if(year % 4 == 0){
                if(day < 1 || day > 29){
                    if (realTime) document.getElementById('dateOfBirthInput').style.color = 'red';
                    return false;
                }     // leap year
            }
            else{
                if(day < 1 || day > 28){
                    if (realTime) document.getElementById('dateOfBirthInput').style.color = 'red';
                    return false;
                }
            }
        }
        if (realTime) document.getElementById('dateOfBirthInput').style.color = 'black';
        return true;
    }
    if (realTime) document.getElementById('dateOfBirthInput').style.color = 'red';
    return false;
}

// facade for the validators
function formValidation(){
    var errorString = "";

    var u = usernameValidation();
    var p = passwordValidation();
    var e = emailValidation();
    var d = dateOfBirthValidation();

    if(!u) errorString += 'username validation: ' + u + "\n";
    if(!p) errorString += "password validation: " + p + "\n";
    if(!e) errorString += "email validation: " + e + "\n";
    if(!d) errorString += "dob validation: " + d + "\n";


    if(errorString != "") alert(errorString);
    return u && p && e && d;
}

function loginValidation(){
    var errorString = "";

    var u = usernameValidation();
    var p = passwordValidation();

    if(!u) errorString += 'username validation: ' + u + "\n";
    if(!p) errorString += "password validation: " + p + "\n";

    if(errorString != "") alert(errorString);
    return u && p;
}

function updateValidation(){
    var errorString = "";

    var p = passwordValidation();
    var e = emailValidation();
    var d = dateOfBirthValidation();

    if(!p) errorString += "password validation: " + p + "\n";
    if(!e) errorString += "email validation: " + e + "\n";
    if(!d) errorString += "dob validation: " + d + "\n";


    if(errorString != "") alert(errorString);
    return p && e && d;

}