// Import the required module: 'express' for the Express framework.
import express from "express";

// Create a new instance of the Express application.
const app = express();
const port = 3000;

// Custom Middleware: Logger
// This middleware logs the HTTP request method (GET, POST, etc.) and the request URL.
function logger(req, res, next) {
  console.log("Request Method: ", req.method);
  console.log("Request URL: ", req.url);
  // Call the next middleware or route handler in the stack.
  next();
}

// Use the custom logger middleware for all routes.
app.use(logger);

// Define a route handler for HTTP GET requests made to the root ("/") path.
app.get("/", (req, res) => {
  // Send a simple text response.
  res.send("Hello");
});

// Start the Express server on the specified port.
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

