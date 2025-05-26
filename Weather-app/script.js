// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
// https://api.openweathermap.org/data/2.5/weather?q=dubai&appid=f54abaee51a9505b48a4f1802abdb88f&units=metric
// f54abaee51a9505b48a4f1802abdb88f&units=metric

// const apiKey = "f54abaee51a9505b48a4f1802abdb88f";
// const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

// const searchBox = document.querySelector(".search input")
// const searchBtn = document.querySelector(".search button")
// const weatherIcon = document.querySelector(".weather-icon")



//     async function checkWeather(city){
//     const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    
//     if(response.status == 404){
//     document.querySelector(".error").style.display = "block";
//     document.querySelector(".weather").style.display = "none";
//     } else{const data = await response.json();

// // console.log(data);

// document.querySelector(".city").innerHTML = data.name;
// document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
// document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
// document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

// if(data.weather[0].main == "Clouds"){
//     weatherIcon.src = "images/clouds.png";
// } else if(data.weather[0].main == "Clear"){
//     weatherIcon.src = "images/clear.png";
// }else if(data.weather[0].main == "Rain"){
//     weatherIcon.src = "images/Rain.png";
// }else if(data.weather[0].main == "Drizzle"){
//     weatherIcon.src = "images/Drizzle.png";
// }else if(data.weather[0].main == "Mist"){
//     weatherIcon.src = "images/Mist.png";
// }
// document.querySelector(".weather").style.display = "block";
// document.querySelector(".error").style.display = "none";

//     }

    
// }

// searchBtn.addEventListener("click", () => {
//     checkWeather(searchBox.value);
// })

async function fetchData() {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const data = await response.json();
    console.log(data);
  }

  fetchData();