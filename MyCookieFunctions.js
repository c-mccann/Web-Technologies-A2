// DT340A - Web Technologies - Assignment 2 - Carl McCann - C12508463
/**
 * Created by carlmccann2 on 06/04/2017.
 */

function createCookie(name, data, expiry){
    Cookies.set(name, data, {expires: expiry});
}
function deleteCookie(name){
    Cookies.remove(name);
}
function cookieExists(name){
    if(Cookies.get(name) == undefined) return false;
    else return true;
}