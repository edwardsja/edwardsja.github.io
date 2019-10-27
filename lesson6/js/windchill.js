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