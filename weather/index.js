$(document).keypress(function(event){
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if(keycode == '13'){
        updateLocation();  
    }
});
function updateLocation(){
    var uLoc = document.getElementById("input").value;
    console.log(uLoc)
    var apiGet = `https://api.openweathermap.org/data/2.5/weather?q=${uLoc}&appid=9ff81a32f74a6ac0ae72420fa124c223&units=metric`;
    console.log(apiGet);
    $.getJSON(apiGet, function(data) {
        var temp = `Current temperature: ${data.main.temp}°<br>` 
        var feel = `Feels like: ${data.main.feels_like}°<br>` 
        var locationd = `${data.name}, ${data.sys.country}<br>`
        var location = `${data.name}<br>`
        var windspeed = `Wind speed: ${data.wind.speed} km/h<br>`
        $("#temp").html(temp);
        $("#location").html(locationd);
        $("#heading").html(location);
        $("#feel").html(feel);
        $("#speed").html(windspeed);
    });
}