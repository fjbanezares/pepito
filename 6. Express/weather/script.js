// This is the API key for the OpenWeatherMap API, allowing you to make requests to the API.
const apiKey = '8a87f86ec1e88dc50f110aa221e6473d';

// Here, we're getting the form element by its ID and adding an event listener for its 'submit' event.
document.getElementById('weather-form').addEventListener('submit', async (event) => {
    // The preventDefault() method stops the form from performing its default action, i.e., sending a POST request.
    // This way, we can handle the form submission in our own custom way using JavaScript.
    event.preventDefault();

    // Retrieve the value of the city input field.
    const city = document.getElementById('city').value;

    // Construct the URL to make a request to the OpenWeatherMap API. This URL contains the city name and API key.
    // We're also specifying that we want the temperature in metric units (Celsius).
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        // Use the fetch API to make a request to the OpenWeatherMap API.
        const response = await fetch(apiUrl);

        // Parse the response as JSON.
        const data = await response.json();

        // Construct a string with the weather information. This will be displayed in our HTML.
        const weatherInfo = `
          <h2>Weather in ${city}:</h2>
          <p>Temperature: ${data.main.temp} °C</p>
          <p>Description: ${data.weather[0].description}</p>
        `;

        // Display the weather information in the 'weather-info' div in our HTML.
        document.getElementById('weather-info').innerHTML = weatherInfo;
    } catch (error) {
        // If there's any error (e.g., network error, API limit reached, invalid city name, etc.), 
        // it will be caught here and printed to the console.
        console.error('Error fetching weather data:', error);
    }
});
