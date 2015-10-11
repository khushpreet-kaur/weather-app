var cities = [
  "Bangalore",
  "Hong Kong",
  "Taiwan",
  "Pune",
  "Hyderabad",
  "Melbourne",
  "Agra", 
  "Paris",
  "Lahore"
];

var data = [];

function renderWeather(data) {
  var template =  _.template(document.getElementById("city-weather").innerHTML);  
  var html = template(data);
  document.getElementById("results").innerHTML += html;
}

function addCity() {

  var city = document.getElementById("city").value;

  if ( city === "" ) {
    alert ( "Enter a city" );
  }
  else {
    getWeather(city, function(data) {
      renderWeather(data);
      $("#myModal").modal("hide");
    }); 
  }
}

function getWeather(city, cb) {
  $.simpleWeather({
    location: city, 
    unit: "c",
    success: function(result) {
      data.push(result);
      cb(result);
    }
  });
}


window.onload = function() {
  cities.forEach(function(city) {
    getWeather(city, function(data) {
      renderWeather(data);
    });
  });
};
