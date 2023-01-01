var APIKey = "appid=9fa92ea9dac0de419dc72b07b352638a";
var citiesListArr = [];
var numOfCities = 5;
var unit = "units=imperial";
var dailyWeatherApiStarts =
  "https://api.openweathermap.org/data/2.5/weather?q=";
var dailyUVIndexApiStarts = "https://api.openweathermap.org/data/2.5/uvi?";
var forecastWeatherApiStarts =
  "https://api.openweathermap.org/data/2.5/onecall?";
var searchCityForm = $("#searchCityForm");
var searchedCities = $("#searchedCityLi");
