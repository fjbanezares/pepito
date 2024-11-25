// Import necessary modules for functionality
// `https`: Used to make HTTPS requests to external APIs (e.g., OpenWeatherMap API).
// `express`: A framework for building web servers in Node.js.
// `body-parser`: Middleware to parse incoming request bodies in a middleware before your handlers.
const https = require("https");
const express = require("express");
const bodyParser = require("body-parser");

// Create an instance of the Express application.
const app = express();

// Use body-parser middleware to parse URL-encoded form data submitted via POST requests.
// This allows you to access form fields using `req.body`.
app.use(bodyParser.urlencoded({ extended: true }));

// Define the root route ("/") for handling GET requests.
// This route serves the main HTML file (index.html), which contains the input form.
app.get("/", function (req, res) {
    // Send the HTML file located in the current directory.
    // Ensure that `index.html` exists in the same directory as this script.
    res.sendFile(__dirname + "/index.html");
});

// Define the root route ("/") for handling POST requests.
// This route handles form submissions from `index.html`.
app.post("/", function (req, res) {
    // Log the entire request object (for debugging purposes).
    // **Note:** This outputs a lot of data, typically not ideal for production.
    console.log("The request object: " + req);

    // Extract the submitted form data from `req.body`.
    const bodyInputMainPage = req.body; // Contains key-value pairs submitted via the form.
    console.log("Form data received: " + bodyInputMainPage);

    // Extract the `city` field from the form data (input name should match).
    const city = bodyInputMainPage.city;
    console.log("City extracted from form: " + city);

    // Define API parameters for OpenWeatherMap:
    const apiKey = "8a87f86ec1e88dc50f110aa221e6473d"; // Your OpenWeatherMap API key.
    const unitsChosen = "metric"; // Units for temperature (metric = Celsius).
    // Construct the API URL dynamically based on the submitted city.
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unitsChosen}`;

    // Make an HTTPS GET request to the OpenWeatherMap API.
    https.get(apiUrl, function (response) {
        console.log("API response status code: " + response.statusCode); // Log the HTTP status code.

        // Listen for data chunks from the API response.
        response.on("data", function (data) {
            console.log("Raw API data: " + data); // Log the raw data received (in Buffer format).

            // Parse the JSON data received from the API.
            const weatherResponseData = JSON.parse(data);
            console.log("Parsed API response: ", weatherResponseData);

            // Extract specific weather data:
            const tempDataResponse = weatherResponseData.main.temp; // Current temperature.
            console.log("Temperature: " + tempDataResponse);

            const weatherDescription = weatherResponseData.weather[0].description; // Weather description (e.g., clear, cloudy).
            console.log("Weather description: " + weatherDescription);

            const iconNice = weatherResponseData.weather[0].icon; // Icon for the weather.
            console.log("Weather icon: " + iconNice);

            // Construct the URL for the weather icon image.
            const imageURL = "http://openweathermap.org/img/wn/" + iconNice + "@2x.png";

            // Respond to the client with an HTML page showing weather data.
            res.setHeader("Content-Type", "text/html"); // Set content type to HTML.
            res.write("<h1>Weather App</h1>"); // Title for the app.
            res.write("<p>The temperature in " + city + " is " + tempDataResponse + "°C.</p>"); // Temperature info.
            res.write("<p>The weather is: " + weatherDescription + ".</p>"); // Weather description.
            res.write("<img src=" + imageURL + ">"); // Display the weather icon.
            res.send(); // End the response and send the data to the client.
        });
    });
});

// Start the server and listen for incoming requests on port 3000.
app.listen(3000, function () {
    console.log("Server running on port 3000"); // Log a message indicating the server is running.
});
