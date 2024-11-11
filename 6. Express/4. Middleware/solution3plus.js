// Import the required module: 'express' for the Express framework.
import express from "express";

// Create a new instance of the Express application.
const app = express();
const port = 3000;

// Custom Middleware: Logger
// This middleware logs the HTTP request method (GET, POST, etc.) and the request URL.

function logger(req, res, next) {
  console.log("Request Method:", req.method);
  console.log("Request URL:", req.url);

  // Listen to the 'finish' event on the response object
  res.on('finish', () => {
    console.log("Response Status Code:", res.statusCode);
  });

  next();
}

// function logger(req, res, next) {
//   console.log("Request Method:", req.method);
//   console.log("Request URL:", req.url);



//   // Capture the original 'res.send' function
//   const originalSend = res.send;

//   // Override 'res.send' function
//   res.send = function (...args) {
//     console.log("Response Status Code:", res.statusCode); // Log the status code
//     originalSend.apply(res, args); // Call the original 'res.send' function
//   }

//   next();
// }


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

