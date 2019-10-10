var modifiedDate = "";
var modifiedDate = document.lastModified;
document.getElementById("currentYear").innerHTML = new Date().getFullYear();
document.getElementById("lastModified").innerHTML = "Last Modified: " + modifiedDate;
document.getElementById("lastModified").style.fontSize = ".85em";
document.getElementById("lastModified").style.color = "#000000";