const location_name = document.querySelector('#location');
const searchinput = document.querySelector('#search');
const searchbutton = document.querySelector('#searchbtn');
const weather_img = document.querySelector('#weather-img');
const temprature = document.querySelector('.temprature');
const description = document.querySelector('.description');
const humidity = document.querySelector('#humidity');
const windspeed = document.querySelector('#windspeed');

const chekWeather = async (cityName) => {
    const api_key = "12b021e4cfbde1f8d63f8c04cf3107c8";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${api_key}`;
    try {
        const weather_data = await fetch(`${url}`);
        const data = await weather_data.json();
        console.log(data);

        location_name.innerHTML = data.name;
        temprature.innerHTML = Math.round(data.main.temp - 273.15);
        description.innerHTML = data.weather[0].description;
        humidity.innerHTML = `${data.main.humidity}%`;
        windspeed.innerHTML = `${Math.round(data.wind.speed * 3.6)} km/s`;

        switch (data.weather[0].main) {
            case 'Clouds':
                weather_img.src = "assets/images/cloudy.svg";
                break;

            case 'Rain':
                weather_img.src = "assets/images/rainy-6.svg";
                break;

            case 'Clear':
                weather_img.src = "assets/images/day.svg";
                break;
                
            case 'Snow':
                weather_img.src = "assets/images/snowy-6.svg";
                break;

            case 'Thunderstorm':
                weather_img.src = "assets/images/thunder.svg";
                break;

            case 'Drizzle': 
                weather_img.src = "assets/images/rainy-7.svg";
                break;

            case 'Mist':
                weather_img.src = "assets/images/mist.svg";
                break;

            case 'Haze':
                weather_img.src = "assets/images/haze.svg";
                break;

            case 'Smoke':
                weather_img.src = "assets/images/smoke.svg";
                break;

            case 'Fog':
                weather_img.src = "assets/images/fog.svg";
                break;

            default:
                break;
        }
    } catch (error) {
        alert("😬 Enter Correct Location...")
    }
}

searchinput.addEventListener('keyup', function (event) {
    // Check if the Enter key was pressed (keyCode 13)
    if (event.keyCode === 13) {
        searchbutton.click();
        searchinput.value = '';
        searchinput.blur();
    }
});

searchbutton.addEventListener('click', () => {
    chekWeather(searchinput.value);
});

chekWeather("Indore");