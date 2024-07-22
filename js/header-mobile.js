let menu = document.getElementById("nav");

function showMenu(action) {
    if(action=="show") {
        menu.style.display = "flex";
        menu.style.left = "0";
        menu.style.transition = "1s";
    }
    else {
        menu.style.left = "-100%";
        menu.style.transition = "1s"
    }
}