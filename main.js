const weatherContainer = document.getElementById('weather')
const searchBtn = document.querySelector('.btns')
const cityInput = document.querySelector('#citySearch')

const searchCity = (city) => {
    weatherContainer.innerHTML = ""
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=60ebf86e53cfceb0e5c4a9676d9d2841`) 
    .then(response => response.json())
.then((data) => {
  console.log(data);
  const cityName = data.name;
  const temp = Math.round(data.main['temp']);
  const tempMin = Math.round(data.main['temp_min']);
  const tempMax = Math.round(data.main['temp_max']);
  const wind = data.wind.deg;
  const weather = data.weather[0]['main'];
  weatherContainer.insertAdjacentHTML('beforeend',`<ul><li><span class="title">City : </span> ${cityName}</li><li> <span class="title">General wheater : </span>${weather}</li><li> <span class="title">Temperature :</span> ${temp}</li><li><span class="title"> Temperature min : </span>${tempMin}</li><li><span class="title"> Temperature max : </span>${tempMax}</li></ul> `)

})

}
[
    {
      "id": 803,
      "main": "Clouds",
      "description": "broken clouds",
      "icon": "04d"
    }
  ]


// console.log(data.name)
// let cityName = data.name;
// cityName.innerHTML = "City " +" ${cityName}";
searchBtn.addEventListener('click',(event) => {
    console.log(cityInput.value)
    searchCity(cityInput.value)
})
