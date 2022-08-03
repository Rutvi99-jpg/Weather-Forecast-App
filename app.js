//api.openweathermap.org/data/2.5/weather?q={city name}&appid={your api key}

const weatherApi = {
    key: "a18aa45af2219d9ad9ed4522a74aa988",
    baseUrl: "https://api.openweathermap.org/data/2.5/weather"
}

const searchInputBox = document.getElementById('input-box');

// Event Listener function on keypress


   
     function loading() {
    console.log(searchInputBox.value);
     getweatherReport(searchInputBox.value);
     document.querySelector('.weather-body').style.display ="block";
     }



// Get weather Report

function getweatherReport(city) {
    fetch(`${weatherApi.baseUrl}?q=${city}&appid=${weatherApi.key}&units=metric`)
    .then(weather => {
         return weather.json();
        // console.log(weather);
    }).then(showweatherReport);
}


//Show Weather Report
function showweatherReport(weather){
    console.log(weather);

     let city = document.getElementById('city');
     city.innerText=`${weather.name}, ${weather.sys.country}`;

    let temperature = document.getElementById('temp');
    temperature.innerHTML = `${Math.round(weather.main.temp)}&deg;C`;

    let minMaxTemp = document.getElementById('min-max');
    minMaxTemp.innerHTML = `${Math.floor(weather.main.temp_min)}&deg;C (min)/ ${Math.ceil(weather.main.temp_max)}&deg;C (max)`;

    let weatherType = document.getElementById('weather');
    weatherType.innerText = `${weather.weather[0].main}`;

    let date = document.getElementById('date');
    let todayDate = new Date();
    date.innerText = dateManage(todayDate);

    if(weatherType.textContent == 'Clear') {
        document.body.style.backgroundImage = "url('images/clear.jpg')";
    }
    else  if(weatherType.textContent == 'Clouds') {
        document.body.style.backgroundImage = "url('images/cloudy.jpg')";
    }
    else if(weatherType.textContent == 'Sunny') {
        document.body.style.backgroundImage = "url('images/sunny.jpeg')";
    }
    else if(weatherType.textContent == 'Snow') {
        document.body.style.backgroundImage = "url('images/snow.jpg')";
    }
    else if(weatherType.textContent == 'Rain') {
        document.body.style.backgroundImage = "url('images/rain.jpg')";
    }
    else if(weatherType.textContent == 'Thunderstorm') {
        document.body.style.backgroundImage = "url('images/thunderstorm.jpg')";
    }
    else  if(weatherType.textContent == 'Haze') {
        document.body.style.backgroundImage = "url('images/cloudy.jpg')";

}
}


//Date manage

function dateManage(dateArg) {
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let months =["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "Deceber"];

    let year = dateArg.getFullYear();
    let month = months[dateArg.getMonth()];
    let date = dateArg.getDate();
    let day = days[dateArg.getDay()];

    return `${date} ${month} (${day}), ${year}`;
}


