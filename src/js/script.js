var checkCreate = document.getElementById("checkForCreate");
var checkLogin = document.getElementById("checkForLogin");
var screenCreate = document.getElementById("screenFormCreate");
var screenLogin = document.getElementById("screenFormLogin");

checkCreate.addEventListener("click", () => {
    screenCreate.style.animation = "opcTransition 1s";
    screenCreate.style.display = "flex";
    screenLogin.style.display = "none";
})

checkLogin.addEventListener("click", () => {
    screenLogin.style.animation = "opcTransition 1s";
    screenLogin.style.display = "flex";
    screenCreate.style.display = "none";
    
})