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
    feelsLikeDom.textContent = `${(Number(weatherData.main.feels_like) - 273.15).toFixed(0)}C`
    const humidityDom = document.getElementById("humidity")
    humidityDom.textContent = `${weatherData.main.humidity}%`
    const pressureDom = document.getElementById("pressure")
    pressureDom.textContent = `${weatherData.main.pressure}hPa`
    const minTempDom = document.getElementById("min-temp")
    minTempDom.textContent = `${(Number(weatherData.main.temp_min) - 273.15).toFixed(0)}C`
    const maxTempDom = document.getElementById("max-temp")
    maxTempDom.textContent = `${(Number(weatherData.main.temp_max) - 273.15).toFixed(0)}C`
  }
  export {weatherDataDom} 