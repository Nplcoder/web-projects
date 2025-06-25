const apiKey = "f54abaee51a9505b48a4f1802abdb88f";

const weatherData = document.querySelector("#Weather-data");
const cityInputELe = document.querySelector("#city-input");
const formEle = document.querySelector("form");

formEle.addEventListener('submit', (event) =>{
    event.preventDefault();
    const cityValue = cityInputELe.value
    console.log(cityValue)
    getWeatherData(cityValue);
});

async function getWeatherData(cityValue){
    try{
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${apiKey}&units=metric`)

        if(!response.ok){
            throw new Error("Network response was not ok")
        }

        const data = await response.json()
        console.log(data)

        const temperature = Math.round(data.main.temp)
        const description = data.weather[0].description
        const icon = data.weather[0].icon
        const details = [
            `Feels like: ${Math.round(data.main.feels_like)}`,
            `Humidity: ${data.main.humidity}`,
            `Wind speed: ${data.wind.speed}`,
        ]

        weatherData.querySelector(".icon").innerHTML = `<img src="http://openweathermap.org/img/wn/${icon}.png" alt="Weather Icon">`
    }catch(error){

    }
}