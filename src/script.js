// Function to update weather details
function weatherDetail(response) {
    let cityElement = document.querySelector("#current-city");
    let descriptionElement = document.querySelector("#description");
    let humidityElement = document.querySelector("#humidity-details");
    let windSpeedElement = document.querySelector("#speed-details");
    let temperatureElement = document.querySelector("#current-temperature-value");
    let weatherIconElement = document.querySelector("#weather-icon");
    let currentDateElement = document.querySelector("#current-date");





function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let day = days[date.getDay()];

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return `${day}${hours}:${minutes}`;
}

function searchCity(city) {
  let apiKey = "0c0fc4d0af9a25bbb3ad3644ab6e153c";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

  axios.get(apiUrl).then(weatherDetail);
}

function search(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector("#search-input");
  let cityElement = document.querySelector("#current-city");
  cityElement.innerHTML = searchInputElement.value;
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", search);

searchCity("Berlin");
