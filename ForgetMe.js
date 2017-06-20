// DT340A - Web Technologies - Assignment 2 - Carl McCann - C12508463
function forgetUser(){
    // TODO
    var uniqueCookieName = "WebTechA2" + globalCurrentUser.username;
    deleteCookie(uniqueCookieName);
    if(cookieExists(uniqueCookieName)) alert("Gone, but not forgotten (Page will be reloaded)");
    else alert("Forgotten, but not gone (Page will be reloaded)");
    window.location.reload();
}