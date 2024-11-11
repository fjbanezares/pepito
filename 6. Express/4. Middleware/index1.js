// Import required modules from Node.js and third-party packages.
import express from "express";  // Import the Express framework.
import { dirname } from "path";  // Import 'dirname' method from the 'path' module for handling directory names.
import { fileURLToPath } from "url";  // Import 'fileURLToPath' method to convert file URL to a path string.

// The following two lines are a workaround for getting '__dirname' in ES modules.
// In CommonJS, '__dirname' is available out-of-the-box, but in ES modules, this is how you can achieve the same.
const __dirname = dirname(fileURLToPath(import.meta.url));  // Convert the current ES module file URL to its directory path.

// Initialize an Express application. This creates an instance of the Express application.
const app = express();
const port = 3000;  // Define the port number where the Express server will listen.

// Middleware and Route Handler:
// 'app.get' defines a middleware for handling HTTP GET requests to the root ('/') path.
// Note: In this simple code, you're not seeing typical middleware like 'app.use()'. What you're seeing is a direct route handler.
app.get("/", (req, res) => {
  // This callback function (route handler) is executed when a GET request is made to the root path.

  // 'res.sendFile' sends a file as the response. Here, it sends an 'index.html' from the 'public' directory.
  // '__dirname' provides the absolute path of the directory where the current executing script resides.
  // So, '__dirname + "/public/index.html"' gives the absolute path to the 'index.html' file.
  res.sendFile(__dirname + "/public/index.html");
});

// Start the Express server:
// 'app.listen' starts the Express server and makes it listen for incoming requests on the specified port.
app.listen(port, () => {
  // This callback function is executed once the server is up and running.
  // It logs a message to the console indicating that the server is listening on the defined port.
  console.log(`Listening on port ${port}`);
});
