
var button = document.querySelector(".button");
var inputValue = document.querySelector(".inputValue");
var name = document.querySelector("name");
var desc = document.querySelector("name");
var temp = document.querySelector("name");
var key = "d778222891cde7aa699d4d39200e67b4";
var apiUrl = "https://api.openweathermap.org/data/2.5/forecast?id=524901" + "&appid=" + key;

button.addEventListener("click", function() {
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
