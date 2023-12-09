

const searchInput = document.querySelector(".search");
const searchBtn = document.querySelector(".search-btn");

const weather = {
  apiKey: "6b4c292e3e049dbf64d6c2441cc77864",
  fetchWeather: function (city) {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.apiKey}&units=metric&lang=RU`
    )
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
        this.displayWeather(data);
      });
  },
  displayWeather: function (data) {
    document.querySelector(".weather-coun").innerText = `${data.name}`
    document.querySelector(".temp").innerText = data.main.temp;
    document.querySelector(".humidity").innerText = `${data.main.humidity} %`
    document.querySelector(".speed").innerText = `${data.wind.speed} км/ч`
    document.querySelector(".img").src = `https://openweathermap.org/img/wn/` + data.weather?.[0].icon + ".png";
  },

  searchWeather: function (){
    this.fetchWeather(searchInput.value)
}
}
weather.fetchWeather("Bishkek")

searchInput.addEventListener("keyup", (e) =>{
    if(e.key == "Enter")
  weather.searchWeather();
})

searchBtn.addEventListener("click", () => {
    weather.searchWeather()
})

  
weather.fetchWeather("Bishkek")


