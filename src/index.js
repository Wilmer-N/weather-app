import style from "./style.css";
import { loadAnimationEnd, loadAnimationStart } from "./loading";
import { weatherDataDom } from "./weatherDom";
import { whatWeatherIconDisplay } from "./whatWeatherIconDisplay";
const changeTempBtn = document.getElementById("far-cel");
let temperature;
let isCelcius = true;
const searchBtn = document.getElementById("search-btn");

async function getWeatherInLocation(searchedLocation) {
  loadAnimationStart();
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${searchedLocation}&APPID=e5761062516b5679bd319bd9ace0ba5a`,
    { mode: "cors" }
  );
  const weatherData = await response.json();
  loadAnimationEnd();
  temperature = weatherData.main.temp;
  whatWeatherIconDisplay(weatherData.weather[0].main);
  weatherDataDom(weatherData);
  console.log(weatherData)
  if (!isCelcius) {
    changeTemp();
  }
}
changeTempBtn.addEventListener("click", function () {
  changeTemp();
});

function changeTemp() {
  const tempDom = document.getElementById("temperature");
  const farOrCel = document.getElementById("far-cel");
  if (isCelcius) {
    isCelcius = false;
    console.log(temperature);
    farOrCel.lastElementChild.textContent = "F";
    tempDom.textContent = `${makeFarenheitFromCelsius(
      Number(temperature) - 273.15
    )}F`;
  } else {
    isCelcius = true;
    console.log(temperature);
    farOrCel.lastElementChild.textContent = "C";
    tempDom.textContent = `${(Number(temperature) - 273.15).toFixed(0)}C`;
  }
}

function makeFarenheitFromCelsius(temperature) {
  return Number(1.8 * temperature + 32).toFixed(0);
}
function makeCelciusFromFar(temperature) {
  return Number((temperature - 32) / 1.8).toFixed(0);
}

searchBtn.addEventListener("click", function () {
  const inputElement = document.getElementById("location-search-input");
  getWeatherInLocation(`${inputElement.value}`);
});
getWeatherInLocation("London");
