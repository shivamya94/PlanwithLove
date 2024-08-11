// script.js
const apiKey = 'YOUR_API_KEY_HERE'; // Replace with your OpenWeatherMap API key

const searchButton = document.getElementById('search');
const cityInput = document.getElementById('city');
const locationElement = document.getElementById('location');
const temperatureElement = document.getElementById('temperature');
const descriptionElement = document.getElementById('description');
const weatherBox = document.querySelector('.weather-box');

searchButton.addEventListener('click', () => {
    const city = cityInput.value;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
            locationElement.textContent = `Location: ${data.name}, ${data.sys.country}`;
            temperatureElement.textContent = `Temperature: ${data.main.temp}°C`;
            descriptionElement.textContent = `Description: ${data.weather[0].description}`;
            weatherBox.style.display = 'block';
        })
        .catch((error) => {
            console.error('Error fetching weather data:', error);
            alert('An error occurred. Please try again.');
        });
});
