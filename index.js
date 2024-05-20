const submitIcon = document.querySelector(".icon-search");
const city = document.querySelector(".search input");
const weather = document.querySelector(".weather");
const invalid = document.querySelector(".invalid");

const temp = document.querySelector(".w-top h1");
const image = document.querySelector(".w-top img");
const cityNameEl = document.querySelector(".w-top h2");
const humidity = document.querySelector(".wb-left h3");
const windSpeed = document.querySelector(".wb-right h3");

submitIcon.addEventListener("click", city);
const apiKey = "b86a69cbcdb59d54705b86de5c5471fc";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric";

async function checkWeather(city) {
  const response = await fetch(apiUrl + `&appid=${apiKey}` + `&q=${city}`);
  var data = await response.json();

  if (response.status == 404) {
    invalid.style.display = "block";
  } else {
    temp.innerHTML = Math.round(data.main.temp) + "°C";
    cityNameEl.innerHTML = data.name;
    humidity.innerHTML = data.main.humidity + "%";
    windSpeed.innerHTML = data.wind.speed + "%";
    if (data.weather[0].main == "Clouds") {
      image.src = "./images/clouds.png";
    } else if (data.weather[0].main == "Clear") {
      image.src = "./images/clear.png";
    } else if (data.weather[0].main == "Drizzle") {
      image.src = "./images/drizzle.png";
    } else if (data.weather[0].main == "Mist") {
      image.src = "./images/mist.png";
    } else if (data.weather[0].main == "Rain") {
      image.src = "./images/rain.png";
    } else if (data.weather[0].main == "Snow") {
      image.src = "./images/snow.png";
    }
    invalid.style.display = "none";
  }
}

submitIcon.addEventListener("click", (event) => {
  checkWeather(city.value);
  city.value = "";
});
