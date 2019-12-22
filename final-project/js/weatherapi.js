// provo 4047656

// dc 4369976

// fort collins 5577147

// san diego 5391811

for (var y = 0; y < 4; y++) {
    if (y == 0) {
        var apiURL = 'https://api.openweathermap.org/data/2.5/forecast?id=4047656&APPID=d345613b2f121766616eda886275049d&units=imperial';
        fetch(apiURL)
        .then((response) => response.json())
        .then((jsObject) => {
        console.log(jsObject);
        document.getElementById('weather1').innerHTML = jsObject.list[0].weather[0].description;
        document.getElementById('temp1').innerHTML = jsObject.list[0].main.temp + " &deg;F";
        document.getElementById('wind1').innerHTML = jsObject.list[0].wind.speed + " mph";
        document.getElementById('humid1').innerHTML = jsObject.list[0].main.humidity + "%";
    });
    } else if (y == 1) {
        var apiURL = 'https://api.openweathermap.org/data/2.5/forecast?id=4369976&APPID=d345613b2f121766616eda886275049d&units=imperial';
        fetch(apiURL)
        .then((response) => response.json())
        .then((jsObject) => {
        console.log(jsObject);
        document.getElementById('weather2').innerHTML = jsObject.list[0].weather[0].description;
        document.getElementById('temp2').innerHTML = jsObject.list[0].main.temp;
        document.getElementById('wind2').innerHTML = jsObject.list[0].wind.speed;
        document.getElementById('humid2').innerHTML = jsObject.list[0].main.humidity + "%";
    });
    } else if (y == 2) {
        var apiURL = 'https://api.openweathermap.org/data/2.5/forecast?id=5577147&APPID=d345613b2f121766616eda886275049d&units=imperial';
        fetch(apiURL)
        .then((response) => response.json())
        .then((jsObject) => {
        console.log(jsObject);
        document.getElementById('weather3').innerHTML = jsObject.list[0].weather[0].description;
        document.getElementById('temp3').innerHTML = jsObject.list[0].main.temp;
        document.getElementById('wind3').innerHTML = jsObject.list[0].wind.speed;
        document.getElementById('humid3').innerHTML = jsObject.list[0].main.humidity + "%";
    });
    } else {
        var apiURL = 'https://api.openweathermap.org/data/2.5/forecast?id=5391811&APPID=d345613b2f121766616eda886275049d&units=imperial';
        fetch(apiURL)
        .then((response) => response.json())
        .then((jsObject) => {
        console.log(jsObject);
        document.getElementById('weather4').innerHTML = jsObject.list[0].weather[0].description;
        document.getElementById('temp4').innerHTML = jsObject.list[0].main.temp;
        document.getElementById('wind4').innerHTML = jsObject.list[0].wind.speed;
        document.getElementById('humid4').innerHTML = jsObject.list[0].main.humidity + "%";
    });
    }
}