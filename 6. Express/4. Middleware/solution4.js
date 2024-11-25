// Import necessary modules for the application to function.
import express from "express"; // Express framework for creating the server and handling routes.
import bodyParser from "body-parser"; // Middleware for parsing incoming request bodies.
import { dirname } from "path"; // For handling file and directory paths.
import { fileURLToPath } from "url"; // To work with file URLs in ES6 modules.

// Workaround for __dirname in ES6 modules:
// Unlike CommonJS, ES6 modules don't have __dirname by default.
// This line calculates the current directory of the script using 'path' and 'url' modules.
const __dirname = dirname(fileURLToPath(import.meta.url));

// Initialize an Express application instance.
// This `app` instance will be used to define routes and middleware.
const app = express();

// Define the port number where the server will listen for incoming requests.
const port = 3000;

// A variable to store the generated band name.
// **Note:** Storing this globally is not a good practice for concurrent users.
// If multiple users make requests, they will overwrite each other's band name.
// Better practice: handle the band name within the request context.
var bandName = "";

// Use the body-parser middleware to parse URL-encoded data from the body of POST requests.
// This is essential for extracting form data sent in the body of POST requests.
app.use(bodyParser.urlencoded({ extended: true })); // `extended: true` allows rich objects and arrays in URL-encoded data.

// Middleware: bandNameGenerator
// This middleware extracts 'street' and 'pet' fields from the request body
// and generates a "band name" by concatenating these values.
function bandNameGenerator(req, res, next) {
  // Log the request body for debugging purposes.
  // **Note:** Logging all request bodies might expose sensitive data in a production environment.
  console.log("Request Body:", req.body);

  // Generate the band name from 'street' and 'pet' fields.
  // These fields must be present in the request body (e.g., submitted via a form).
  // Ensure the form in `/public/index.html` has input fields with names "street" and "pet".
  req.bandName = req.body["street"] + req.body["pet"];

  // Proceed to the next middleware or route handler.
  next();
}

// Apply the bandNameGenerator middleware globally.
// **Note:** Applying it globally means it runs on every request. This is unnecessary unless every route needs a band name.
// A better approach would be to apply it selectively to the specific route(s) that need it.
app.use(bandNameGenerator);

// Define a GET route for the root path ("/").
// Serves the HTML file located at `/public/index.html`.
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html"); // Sends the file as a response to the client.
});

// Define a POST route for "/submit".
// This route responds with the generated band name.
app.post("/submit", (req, res) => {
  // Sends an HTML response displaying the generated band name.
  res.send(`<h1>Your band name is:</h1><h2>${req.bandName}✌️</h2>`);
});

// Start the Express application on the specified port.
// The callback logs a message indicating that the server is running.
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
