import style from "./style.css";
import {loadAnimationEnd, loadAnimationStart} from "./loading"

let isCelcius = true;
const searchBtn = document.getElementById("search-btn")

async function getWeatherInLocation(searchedLocation) {
  loadAnimationStart()
  try{
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${searchedLocation}&APPID=e5761062516b5679bd319bd9ace0ba5a`,
    { mode: "cors" }
  );
  const weatherData = await response.json();
  loadAnimationEnd()
  console.log(weatherData)
  weatherDataDom(weatherData);
  }catch(error){
    if(error.cod == 400){
      alert("City not founf")
    }
  }

}

function weatherDataDom(weatherData) {
  const tempDom = document.getElementById("temperature");
  let temperature = Number(weatherData.main.temp) - 273.15;
  tempDom.textContent = `${temperature.toFixed(0)}C`
  const whereDom = document.getElementById("location")
  whereDom.textContent = `${weatherData.name}, ${weatherData.sys.country}`
  const weatherDom = document.getElementById("weather")
  weatherDom.textContent = `${weatherData.weather[0].main}`
  const weatherDescriptionDom = document.getElementById("weather-description")
  weatherDescriptionDom.textContent = `${weatherData.weather[0].description}`
  const feelsLikeDom = document.getElementById("feels-like")
  feelsLikeDom.textContent = `${weatherData.main.feels_like}`
  const humidityDom = document.getElementById("humidity")
  humidityDom.textContent = `${weatherData.main.humidity}`
  const pressureDom = document.getElementById("pressure")
  pressureDom.textContent = `${weatherData.main.pressure}`
  const minTempDom = document.getElementById("min-temp")
  minTempDom.textContent = `${weatherData.main.temp_min}`
  const maxTempDom = document.getElementById("max-temp")
  maxTempDom.textContent = `${weatherData.main.temp_max}`
}

// function makeFarenheitFromCelsius(temperature) {
//   return (1.8 * (temperature) + 32).toFixed(0)
// }
// function makeCelciusFromFar(temperature) {
//   return ((temperature - 32)/1.8).toFixed(0);
// }

searchBtn.addEventListener("click", function(){
  const inputElement = document.getElementById("location-search-input")
  getWeatherInLocation(`${inputElement.value}`)
})
getWeatherInLocation("London")
