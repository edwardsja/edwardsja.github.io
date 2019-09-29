var modifiedDate = "";
function getModifiedDate() {
    var modifiedDate = document.lastModified;
    document.getElementById("currentYear").innerHTML = new Date().getFullYear();
    document.getElementById("lastModified").innerHTML = "Last Modified: " + modifiedDate;
    document.getElementById("lastModified").style.fontSize = ".85em";
}

window.onload = getModifiedDate;  