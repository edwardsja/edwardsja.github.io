const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject); // temporary checking for valid response and data parsing
        const towns = jsonObject['towns'];
        for (let i = 0; i < towns.length; i++) {
            let card = document.createElement('section');
            let span = document.createElement('span');
            let h2 = document.createElement('h2');
            let h4 = document.createElement('h4');
            let p = document.createElement('p');
            let image = document.createElement('img');


            //Check city name, then create city information in a span
            if (towns[i].name == 'Fish Haven' ||
                towns[i].name == 'Preston' ||
                towns[i].name == 'Soda Springs') {
                span.innerHTML = '<h2>' + towns[i].name + '</h2>' +
                                 '<h4>' + towns[i].motto + '</h4>' +
                                 '<p>' + 'Year Founded: ' + towns[i].yearFounded + '</br>' + 'Current Population: ' + towns[i].currentPopulation + '</br>' + 'Annual Rain Fall: ' + towns[i].averageRainfall + ' inches</p>';

                if (towns[i].name == 'Fish Haven') {
                    image.setAttribute('src', 'images/fishhaven.jpg');
                } else if (towns[i].name == 'Preston') {
                    image.setAttribute('src', 'images/preston.jpg');
                } else {
                    image.setAttribute('src', 'images/sodasprings.jpg');
                }


                card.appendChild(span);
                card.appendChild(image);

                document.querySelector('div.cards').appendChild(card);
            }
        }
    });