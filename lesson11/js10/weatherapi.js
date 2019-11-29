const apiURL = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&APPID=d345613b2f121766616eda886275049d&units=imperial';
fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        document.getElementById('weatherType').innerHTML = jsObject.list[0].weather[0].description;
        document.getElementById('fahrenheit').innerHTML = jsObject.list[0].main.temp;
        document.getElementById('windSpeed').innerHTML = jsObject.list[0].wind.speed;
        document.getElementById('humidity').innerHTML = jsObject.list[0].main.humidity + "%";
        document.getElementById('calculatedWindChill').innerHTML = windChill();
        let successes = 0;
        for (let i = 0; jsObject.list.length; i++) {
            if (jsObject.list[i].dt_txt.includes("18:00:00")) {
                successes++;
                let day = new Date(jsObject.list[i].dt_txt);
                let weekday = ['Sun', 'Mon', 'Tues', 'Wed', 'Thu', 'Fri', 'Sat'];
                let dayNum = day.getDay();
                let dayOfWeek = weekday[dayNum];

                document.getElementById('day' + successes).innerHTML = dayOfWeek;

                const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.list[i].weather[0].icon + '.png';
                const desc = jsObject.list[i].weather[0].description;
                document.getElementById('img' + successes).setAttribute('src', imagesrc);
                document.getElementById('img' + successes).setAttribute('alt', desc);
                document.getElementById('weather' + successes).innerHTML = Math.round(jsObject.list[i].main.temp) + " &deg;F";
            }
        }
    });