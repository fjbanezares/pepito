// Import the required module: 'express' for creating a web server and managing routes.
import express from "express";

// Create a new instance of the Express application. This instance will be used to define routes, middleware, and settings.
const app = express();

// Define the port number where the server will listen for incoming requests.
const port = 3000;

// Middleware: Logger
// The logger function acts as middleware. Middleware functions are executed in the order they are defined, 
// before the final route handler sends a response. This middleware logs the HTTP request's method and URL.
// Parameters:
// - req: Represents the HTTP request object.
// - res: Represents the HTTP response object (though not used here).
// - next: A callback function that passes control to the next middleware or route handler in the stack.
function logger(req, res, next) {
  console.log("Request Method: ", req.method); // Logs the HTTP method, e.g., GET, POST.
  console.log("Request URL: ", req.url); // Logs the requested URL path.
  next(); // Moves to the next middleware or route handler.
}

// Register the custom logger middleware. This applies the middleware globally to all incoming requests.
app.use(logger);

// Define a route handler for HTTP GET requests to the root ("/") path.
// The callback function sends a plain text response to the client.
app.get("/", (req, res) => {
  res.send("Hello"); // Sends "Hello" as the response body.
});

// Start the server and make it listen for requests on the defined port.
// The callback function logs a message indicating that the server is running.
app.listen(port, () => {
  console.log(`Listening on port ${port}`); // Logs a message with the port number.
});
