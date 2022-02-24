const input = document.querySelector("#city-input");
const checkWeather = document.querySelector("#check-weather");
const changeBtn = document.querySelector("#change");
import axios from "axios";

let apiKey = "98e542634b71c020756d8ff10e6a6ae7";
let city = "Brest";
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&lang=ru&units=metric&appid=${apiKey}`;


axios.get(url).then((res) => {
	document.querySelector("#info-icon").innerHTML = `<img src="https://openweathermap.org/img/wn/${res.data.weather[0]['icon']}@2x.png">`;
  document.querySelector("#city-name").innerHTML = res.data.name;
  document.querySelector("#temp").innerHTML = res.data.main.temp + "°C";
  document.querySelector("#humidity").innerHTML = res.data.main.humidity;
  document.querySelector("#wind-speed").innerHTML = res.data.wind.speed;
  document.querySelector("#feels-like").innerHTML =
    res.data.main.feels_like + "°C";
  document.querySelector("#pressure").innerHTML = res.data.main.pressure;
	document.querySelector("#desc").innerHTML = res.data.weather[0].description;
});

checkWeather.addEventListener("click", () => {
  city = input.value;
  let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&lang=ru&units=metric&appid=${apiKey}`;
	axios.get(url).then((res) => {
		document.querySelector("#info-icon").innerHTML = `<img src="https://openweathermap.org/img/wn/${res.data.weather[0]['icon']}@2x.png">`;
    document.querySelector("#city-name").innerHTML = res.data.name;
    document.querySelector("#temp").innerHTML = res.data.main.temp + "°C";
    document.querySelector("#humidity").innerHTML = res.data.main.humidity;
    document.querySelector("#wind-speed").innerHTML = res.data.wind.speed;
    document.querySelector("#feels-like").innerHTML =
      res.data.main.feels_like + "°C";
    document.querySelector("#pressure").innerHTML = res.data.main.pressure;
    document.querySelector("#desc").innerHTML = res.data.weather[0].description;
  });
  input.value = "";
});

changeBtn.addEventListener("click", () => {
  axios.get(url).then((res) => {
    res.data.main.temp = (res.data.main.temp * 9) / 5 + 32;
    document.querySelector("#temp").innerHTML = res.data.main.temp + "°F";
    document.querySelector("#feels-like").innerHTML =
      res.data.main.feels_like + "°F";
  });
});
