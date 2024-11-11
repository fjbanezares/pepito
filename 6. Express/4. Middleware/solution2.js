// Import the required modules:
// - 'express' for the Express framework.
// - 'morgan' for logging HTTP requests.
import express from "express";
import morgan from "morgan";

// Create a new instance of the Express application.
const app = express();
const port = 3000;

// Middleware: HTTP Request Logging using 'morgan'
// Add 'morgan' middleware to the application with the "combined" format.
// This logs standard Apache combined log output which contains information like remote IP, date, HTTP method, status code, user agent, and more.
app.use(morgan("combined"));

// Define a route handler for HTTP GET requests made to the root ("/") path.
app.get("/", (req, res) => {
  // Send a simple text response.
  res.send("Hello");
});

// Start the Express server on the specified port.
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
