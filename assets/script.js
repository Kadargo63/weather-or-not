//https://api.openweathermap.org/data/2.5/weather?q=&appid=d778222891cde7aa699d4d39200e67b4
var button = document.querySelector(".button");

var name = document.querySelector(".name");
var desc = document.querySelector(".desc");
var temp = document.querySelector(".temp");

button.addEventListener("click", function() {
var inputValue = document.querySelector(".inputValue");
var key = "d778222891cde7aa699d4d39200e67b4";
var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + inputValue.value + "&appid=" + key

    fetch(apiUrl).then(function(response) {
        if (response.ok) {
            response.json().then(function(data) {
                console.log(data);
                })
            }else {
                alert("Error");
            }
        })
        .catch(function(error) {
            alert("Unable to connect to OpenWeather")
            //catch any errors
    });
})

// let userInput;

// function setup() {
//     userInput = select("#userinput");
//     userInput.changed(openWeather)
//     openWeather();

//     function openWeather() {
//         let term = userInput.value();
//          console.log(term)
//     }
// }

// function weatherBalloon(  ) {
    
// }
