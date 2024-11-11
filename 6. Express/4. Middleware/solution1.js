// Import necessary modules:
// - 'express' for the Express framework.
// - 'body-parser' for parsing incoming request bodies.
// - 'path' and 'url' for handling directory and file paths in a Node.js environment.
import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

// Convert the module URL to a directory path.
// This is a utility for working with ES6 module syntax in a Node.js environment.
const __dirname = dirname(fileURLToPath(import.meta.url));

// Create a new instance of the Express application.
const app = express();
const port = 3000;

// Middleware: Body Parsing
// Use the 'express.urlencoded' middleware to parse incoming requests with URL-encoded payloads.
// This middleware parses the request body and populates the 'req.body' object with the parsed data.
// The 'extended' option allows for parsing of more complex data structures (e.g., arrays, nested objects).
app.use(express.urlencoded({ extended: true }));

// Define a route handler for HTTP GET requests made to the root ("/") path.
app.get("/", (req, res) => {
  // Send an HTML file from the 'public' directory as a response.
  // This is useful for serving static files like web pages.
  res.sendFile(__dirname + "/public/index.html");
});

// Define a route handler for HTTP POST requests made to "/submit".
app.post("/submit", (req, res) => {
  // Log the parsed request body to the console.
  // If a client sends a POST request to "/submit" with a URL-encoded form, the data will be parsed and made available in 'req.body'.
  console.log(req.body);
  // The response isn't specified here, so the server will not send anything back to the client by default.
  // In a real-world scenario, you'd likely send a response or redirect the user after processing the POST data.
});

// Start the Express server on the specified port.
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
