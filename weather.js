async function getWeather() {
    const city = document.getElementById("cityInput").value.trim();
    if (!city) {
        document.getElementById("weatherInfo").innerHTML = "<p>Please enter a city name</p>";
        return;
    }
    
    const apiKey = "YOUR_API_KEY";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        
        if (response.ok) {
            document.getElementById("weatherInfo").innerHTML = `
                <p>Temperature: ${data.main.temp}°C</p>
                <p>Weather: ${data.weather[0].description}</p>
                <p>Humidity: ${data.main.humidity}%</p>
                <p>Wind Speed: ${data.wind.speed} m/s</p>
            `;
        } else {
            document.getElementById("weatherInfo").innerHTML = `<p>${data.message}</p>`;
        }
    } catch (error) {
        document.getElementById("weatherInfo").innerHTML = "<p>Error fetching weather data</p>";
    }
}
