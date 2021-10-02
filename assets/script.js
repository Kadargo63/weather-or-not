//api.openweathermap.org/data/2.5/forecast/daily?id={city ID}&cnt={cnt}&appid={d778222891cde7aa699d4d39200e67b4}

let userInput;

function setup() {
    userInput = select("#userinput");
    userInput.changed(openWeather)
    openWeather();

    function openWeather() {
        let term = userInput.value();
         console.log(term)
    }
}

function weatherBalloon( cityID ) {
    var key = '{d778222891cde7aa699d4d39200e67b4}'
    fetch('https://api.openweathermap.org/data.2.5/weather?id=' + cityID+ '&appid=' + key)
    .then(function(resp) {return resp.json() }) //convert data to json
    .then(function(data) {
        console.log(data);
    })
    .catch(function() {
        //catch any errors
    });
}
window.onload = function() {
    weatherBalloon(6167865);
}