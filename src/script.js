// Function to update weather details
function weatherDetail(response) {
    let cityElement = document.querySelector("#current-city");
    let descriptionElement = document.querySelector("#description");
    let humidityElement = document.querySelector("#humidity-details");
    let windSpeedElement = document.querySelector("#speed-details");
    let temperatureElement = document.querySelector("#current-temperature-value");
    let weatherIconElement = document.querySelector("#weather-icon");
    let currentDateElement = document.querySelector("#current-date");

    // Fetch data from the API response
    let temperature = Math.round(response.data.main.temp);
    let cityName = response.data.name;
    let description = response.data.weather[0].description;
    let humidity = response.data.main.humidity;
    let windSpeed = response.data.wind.speed;
    let iconUrl = `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`;

    // Update elements with API data
    cityElement.innerHTML = cityName;
    descriptionElement.innerHTML = description;
    humidityElement.innerHTML = `${humidity}%`;
    windSpeedElement.innerHTML = `${windSpeed} km/h`;
    temperatureElement.innerHTML = temperature;
    weatherIconElement.innerHTML = `<img src="${iconUrl}" alt="${description}" class="weather-app-icon" />`;





