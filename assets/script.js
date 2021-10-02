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

function weatherBalloon(  ) {
    var key = "d778222891cde7aa699d4d39200e67b4";
    var apiUrl = pro.openweathermap.org/data/2.5/forecast/hourly?q={city name},{state code}&appid={key};
    fetch(apiUrl).then(function(response) {
        if (response.ok) {
            response.json().then(function(data) {
                console.log(data);
            })
        }else {
            alert("ErRor");
        }
    })
    .catch(function(error) {
        alert("Unable to connect to OpenWeather")
        //catch any errors
    });
}
window.onload = function() {
    weatherBalloon(2643743);
}