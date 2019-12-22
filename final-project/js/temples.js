const requestURL = 'js/temples.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject); // temporary checking for valid response and data parsing
        const temples = jsonObject['temples'];
        for(var i = 0; i < temples.length; i++) {
            let closureLength = temples[i].closures.length;
            var closureParagraph = '';
            for (let x = 0; x < closureLength; x++) {
                closureParagraph += temples[i].closures[x] + ' </br>';
            }
            if (i == 0) {
                document.getElementById('closure_schedule1').innerHTML = closureParagraph;
            } else if (i == 1) {
                document.getElementById('closure_schedule2').innerHTML = closureParagraph;
            } else if (i == 2) {
                document.getElementById('closure_schedule3').innerHTML = closureParagraph;
            } else {
                document.getElementById('closure_schedule4').innerHTML = closureParagraph;
            }
        }
    });