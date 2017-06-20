// DT340A - Web Technologies - Assignment 2 - Carl McCann - C12508463
/**
 * Created by carlmccann2 on 06/04/2017.
 */

function updateCookie(){
    if(updateValidation()){
        var uniqueCookieName = "WebTechA2" + globalCurrentUser.username;
        var json;
        if(cookieExists(uniqueCookieName)){
            json = Cookies.getJSON(uniqueCookieName);
            json.password = document.getElementById('passwordInput').value;
            json.email = document.getElementById('emailInput').value;
            json.dob = document.getElementById('dateOfBirthInput').value;
            createCookie(uniqueCookieName, json, new Date(json.cookieExpiry));
            alert("Successfully Updated!");
        }
        else{
            alert("Update Unsuccessful!");
        }
    }
    else{
        alert("Update Unsuccessful!");
    }
}
