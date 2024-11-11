// Import necessary modules
import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

// This is a workaround to use __dirname in ES6 modules since it's not directly available as in CommonJS.
const __dirname = dirname(fileURLToPath(import.meta.url));

// Initialize an express application
const app = express();
const port = 3000;

// A variable to store the generated band name
var bandName = "";
//Storing bandName as a global variable is not a good practice, especially if there are concurrent users. Each user's band name will overwrite the others. Ideally, the band name generation should happen within the context of the request and be sent directly in the response, without storing it globally.

// Use the body-parser middleware to parse the body of incoming POST requests.
// This makes the content of the body available under req.body.
app.use(bodyParser.urlencoded({ extended: true }));

// Custom middleware: bandNameGenerator
// This middleware extracts the 'street' and 'pet' fields from the body of a request
// and concatenates them to generate a band name.
function bandNameGenerator(req, res, next) {
  // Log the body of the request (this will log every request's body which might not be ideal in a real-world application)
  console.log(req.body);

  // Generate the band name by concatenating the 'street' and 'pet' values from the request body.
  //bandName = req.body["street"] + req.body["pet"];

  //bandName = req.body.street + req.body.pet;

  req.bandName = req.body["street"] + req.body["pet"];
  //Make sure the /public/index.html file has form fields with names "street" and "pet" to ensure the middleware functions as expected.

  // Call the next middleware in line.
  next();
}

// Use the bandNameGenerator middleware for all incoming requests.
// NOTE: This middleware will run for all routes, which might not be ideal. It's better to apply it only where needed.
app.use(bandNameGenerator);

// Route for the root path. Sends an HTML file in response.
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

// POST route for "/submit". This is where the band name is displayed to the user after being generated.
app.post("/submit", (req, res) => {
  res.send(`<h1>Your band name is:</h1><h2>${req.bandName}✌️</h2>`);
});

// Start the express application on the defined port.
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
