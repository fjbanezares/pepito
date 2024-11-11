import express from "express";

// Create a new instance of the Express application.
// This instance provides a series of methods for routing HTTP requests, middleware configurations, and other server-related tasks.
const app = express();

// Define the port number on which the Express application will listen for incoming HTTP requests.
const port = 3000;

// Define a route handler for HTTP GET requests made to the root ("/") path.
// This is a specific kind of middleware that's intended to handle requests to a particular route.
app.get("/", (req, res) => {
  // When a GET request is made to the root ("/") path, the provided callback function is executed.

  // The 'req' object represents the incoming HTTP request and has various properties and methods related to the request, such as query parameters, headers, and body.

  // The 'res' object represents the outgoing response that the server sends back to the client. It has methods to send data back to the client.

  // Here, we're using the 'res.send' method to send a simple text response "Hello" back to the client.
  res.send("Hello");
});

// Start the Express server on the specified port.
// The server will listen for incoming HTTP requests on this port.
app.listen(port, () => {
  // Once the server is successfully started, the provided callback function is executed.
  // This function logs a message to the console indicating that the server is up and running and listening on the specified port.
  console.log(`Listening on port ${port}`);
});
