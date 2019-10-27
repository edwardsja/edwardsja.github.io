var modifiedDate = "";
modifiedDate = document.lastModified;
document.getElementById("currentYear").innerHTML = new Date().getFullYear();
document.getElementById("lastModified").innerHTML = "Last Modified: " + modifiedDate;
document.getElementById("lastModified").style.fontSize = ".85em";
document.getElementById("lastModified").style.color = "#000000";

var day = new Date();

if (day.getDay() == 5) {
    document.getElementsByClassName("saturday")[0].classList.toggle("notice");
}

let currTemp = parseFloat(document.getElementById("fahrenheit").innerHTML);
let currWindSpeed = parseFloat(document.getElementById("windSpeed").innerHTML);

if (currTemp <= 50 && currWindSpeed >= 3) {
    var windChill = 35.74 +
                    (0.6215 * currTemp) -
                    (35.75 * Math.pow(currWindSpeed, 0.16)) +
                    (0.4275 * currTemp * Math.pow(currWindSpeed, 0.16));
    windChill = Math.round(windChill * 100) / 100;
    document.getElementById("calculatedWindChill").innerHTML = windChill + " &#176;F";
} else {
    document.getElementById("calculatedWindChill").innerHTML = "N/A";
}

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

function article() {
    document.write("Link currently not working! <br> Please refresh the page.")
}
