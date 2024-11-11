// Importing the Express framework to create a web server.
const express = require('express');

// Creating an instance of the Express server.
const app = express();

// Importing the CORS (Cross-Origin Resource Sharing) middleware. This is used to enable cross-domain requests.
const cors = require('cors');

// Use the CORS middleware on our Express server. This will allow frontend applications from different origins to interact with this server without facing CORS restrictions.
app.use(cors());

// Serve static files (like HTML, CSS, JS) from the 'public' directory. 
// This means any files in the 'public' directory will be accessible over the web.
app.use(express.static('public'));

// Start the server on port 3030. 
// Once the server starts, the callback function logs a message to the console.
app.listen(3030, () => {
    console.log('Server is running on port 3030');
});
