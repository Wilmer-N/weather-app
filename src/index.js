import style from "./style.css";

async function getWeatherInLocation(searchedLocation) {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${searchedLocation}&APPID=e5761062516b5679bd319bd9ace0ba5a`,
    { mode: "cors" }
  );
  const weatherData = await response.json();
  console.log(weatherData)
}



// {coord: {…}, weather: Array(1), base: 'stations', main: {…}, visibility: 10000, …}
// base
// :
// "stations"
// clouds
// :
// {all: 75}
// cod
// :
// 200
// coord
// :
// {lon: -0.1257, lat: 51.5085}
// dt
// :
// 1669657438
// id
// :
// 2643743
// main
// :
// {temp: 281.53, feels_like: 280.4, temp_min: 279.61, temp_max: 282.64, pressure: 1010, …}
// name
// :
// "London"
// sys
// :
// {type: 2, id: 2075535, country: 'GB', sunrise: 1669621169, sunset: 1669651064}
// timezone
// :
// 0
// visibility
// :
// 10000
// weather
// :
// [{…}]
// wind
// :
// {speed: 2.06, deg: 20}
// [[Prototype]]
// :
// Object
