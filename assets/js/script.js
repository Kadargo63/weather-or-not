//https://api.openweathermap.org/data/2.5/weather?q=&appid=d778222891cde7aa699d4d39200e67b4
var button = document.querySelector(".button");

button.addEventListener("click", function() {
var inputValue = document.querySelector(".inputValue");
var key = "d778222891cde7aa699d4d39200e67b4";
var apiUrl = "https://api.openweathermap.org/data/2.5/forecast?q=" + inputValue.value + "&appid=" + key;

var name = document.querySelector(".name");
var desc = document.querySelector(".desc");
var temp = document.querySelector(".temp");

    fetch(apiUrl).then(function(response) {
        if (response.ok) {
            response.json().then(function(data) {
                console.log(data);
                var nameValue = data['name'];
                var tempValue = data['list']['0']['main']['temp']; 
                var descValue = data['weather'][0]['description'];

                name.innerHTML = nameValue;
                temp.innerHTML = tempValue;
                desc.innerHTML = descValue;
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


