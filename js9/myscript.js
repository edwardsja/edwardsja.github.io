var modifiedDate = "";
modifiedDate = document.lastModified;
document.getElementById("currentYear").innerHTML = new Date().getFullYear();
document.getElementById("lastModified").innerHTML = "Last Modified: " + modifiedDate;
document.getElementById("lastModified").style.fontSize = ".85em";
document.getElementById("lastModified").style.color = "#000000";

var i = 0;
function toggleMenu() {
    document.getElementsByClassName("navigation")[0].classList.toggle("responsive");

    if (i == 0) {
    document.getElementById("button").innerHTML = "X";
    i -= 1;
    }
    else {
        document.getElementById("button").innerHTML = "&#9776; Menu";
    i += 1;
    }
}
