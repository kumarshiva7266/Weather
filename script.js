async function getWeather() {
    const city = document.getElementById('city').value;
    const apiKey = 'ec9e139411c54eb8f33b7988885d597f'; // Replace with your actual API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  
    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error('City not found');
      }
      const data = await response.json();
      document.getElementById('weather-result').innerHTML = `
        <h3>Weather in ${data.name}</h3>
        <p>Temperature: ${data.main.temp}°C</p>
        <p>Weather: ${data.weather[0].description}</p>
        <p>Humidity: ${data.main.humidity}%</p>
      `;
    } catch (error) {
      document.getElementById('weather-result').innerHTML = `<p>Error: ${error.message}</p>`;
    }
  }
  