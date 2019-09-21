var modifiedDate = "";
function getModifiedDate() {
    var modifiedDate = document.lastModified;
    document.getElementById("lastModified").innerHTML = "Last Modified: " + modifiedDate;
    document.getElementById("lastModified").style.fontSize = ".85em";
}

//window.onload = getModifiedDate;  