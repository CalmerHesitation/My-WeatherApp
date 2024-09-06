function updateWeather(response) {
  let temperatureElement = document.querySelector("#temperature");
  let temperature = response.data.temperature.current;
  let cityElement = document.querySelector("#city");

  cityElement.innerHTML = response.data.city;
  temperatureElement.innerHTML = Math.round(temperature);
}

function searchCity(city) {
  let apiKey = "e30to1ab37b3986111e09fa174072f0d";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
  axios.get(apiUrl).then(updateWeather);
}

function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#searchFormInput");
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = searchInput.value;

  searchCity(searchInput.value);
}

let searchFormElement = document.querySelector("#searchForm");
searchFormElement.addEventListener("submit", handleSearchSubmit);
