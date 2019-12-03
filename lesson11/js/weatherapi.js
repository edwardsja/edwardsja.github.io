const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject); // temporary checking for valid response and data parsing
        const towns = jsonObject['towns'];
        //creates events box in each town page
        for (let i = 0; successfulRun != 1; i++) {
            if (towns[i].name == "Fish Haven" ||
                towns[i].name == "Preston" ||
                towns[i].name == "Soda Springs") {
                if (document.getElementById("city_name").innerHTML.includes("Fish Haven") ||
                    document.getElementById("city_name").innerHTML.includes("Preston") ||
                    document.getElementById("city_name").innerHTML.includes("Soda Springs")) {
                    
                    var town = towns[i].name + ', Idaho';

                    var page = document.getElementById("city_name").textContent;
                    if (town == page) {
                        let eventsBox = document.createElement('section');
                        let eventsTitle = document.createElement('h3');
                        let eventList = document.createElement('p');

                        eventsTitle.innerHTML = 'Upcoming Events';

                        let eventsLength = towns[i].events.length;
                        for (let x = 0; x < eventsLength; x++) {
                            eventList.innerHTML += towns[i].events[x] + '</br>';
                        }

                        eventsBox.appendChild(eventsTitle);
                        eventsBox.appendChild(eventList);
                        eventsBox.setAttribute('class', 'events_box')
                        document.querySelector('div.town_events').appendChild(eventsBox);

                        var successfulRun = 0;
                        successfulRun++;
                    }
                }
            }
        }
    });

if (document.getElementById("city_name").innerHTML.includes("Preston")) {
    var apiURL = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&APPID=d345613b2f121766616eda886275049d&units=imperial';
} else if (document.getElementById("city_name").innerHTML.includes("Soda Springs")) {
    var apiURL = 'https://api.openweathermap.org/data/2.5/forecast?id=5678757&APPID=d345613b2f121766616eda886275049d&units=imperial';
} else {
    var apiURL = 'https://api.openweathermap.org/data/2.5/forecast?lat=42.037563&lon=-111.395895&APPID=d345613b2f121766616eda886275049d&units=imperial';
}
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