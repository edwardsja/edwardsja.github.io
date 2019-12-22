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

var modifiedDate = "";
modifiedDate = document.lastModified;
document.getElementById("currentYear").innerHTML = new Date().getFullYear();

function reservation() {
    location.href = "reservation.html";
};