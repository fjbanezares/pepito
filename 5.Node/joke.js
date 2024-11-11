// Import the required 'https' module to make HTTP requests.
const https = require('https');

// Define the API URL we want to fetch data from.
const apiUrl = 'https://api.chucknorris.io/jokes/random';

// Use the https.get() method to fetch data from the API.
https.get(apiUrl, (response) => {
    let data = '';

    // As data is received, append it to our data variable.
    response.on('data', (chunk) => {
        data += chunk;
    });

    // Once all data is received, parse it and display the joke.
    response.on('end', () => {
        const joke = JSON.parse(data);
        console.log('Random Chuck Norris Joke:', joke.value);
    });

}).on('error', (err) => {
    console.log('Error:', err.message);
});
