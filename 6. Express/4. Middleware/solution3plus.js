// Import the required module: 'express' for the Express framework.
// Express is a minimal and flexible Node.js web application framework.
import express from "express";

// Create a new instance of the Express application.
// This `app` instance is used to configure routes, middleware, and server behavior.
const app = express();

// Define the port number where the application will listen for incoming requests.
// Using 3000 as a common development port.
const port = 3000;

// Middleware: Logger
// This middleware logs essential information about incoming HTTP requests.
// It also tracks the response status code in two ways (using `res.on` and overriding `res.send`).

function logger(req, res, next) {
  console.log("Request Method:", req.method); // Logs the HTTP method (e.g., GET, POST).
  console.log("Request URL:", req.url); // Logs the URL of the request.

  // Listen to the 'finish' event on the response object.
  // The 'finish' event is triggered when the response is fully sent to the client.
  res.on('finish', () => {
    console.log("Response Status Code:", res.statusCode); // Logs the response status code.
  });

  next(); // Pass control to the next middleware or route handler in the stack.
}

// Uncommented Alternative Logger (Commented Out for Clarity)
// The alternative logger function demonstrates how to override `res.send` to capture 
// and log response information before the response is sent to the client.
// This can be useful if you need to log or modify the response content itself.

// function logger(req, res, next) {
//   console.log("Request Method:", req.method); // Logs the HTTP method.
//   console.log("Request URL:", req.url); // Logs the requested URL.

//   // Capture the original `res.send` function.
//   // This allows us to intercept and inspect (or modify) the response body.
//   const originalSend = res.send;

//   // Override the `res.send` function with our custom logic.
//   res.send = function (...args) {
//     console.log("Response Status Code:", res.statusCode); // Log the status code.
//     // Call the original `res.send` function with its original arguments
//     // to ensure the response is still sent to the client.
//     originalSend.apply(res, args);
//   };

//   next(); // Pass control to the next middleware or route handler.
// }

// Register the custom logger middleware.
// This applies the logger middleware globally, meaning it will run for all routes.
app.use(logger);

// Define a route handler for HTTP GET requests to the root ("/") path.
// This route sends a simple response: "Hello".
app.get("/", (req, res) => {
  res.send("Hello"); // Sends "Hello" as the response body.
});

app.put("/:uyfgfu", (req, res) => {
  const uyfgfu = req.params.uyfgfu; // Accede al parámetro de la URL
  res.send(`Hello ${uyfgfu}`); // Utiliza la variable en la respuesta
});


// Start the Express server on the specified port.
// This makes the server listen for incoming HTTP requests.
app.listen(port, () => {
  console.log(`Listening on port ${port}`); // Logs a message indicating the server is running.
});
