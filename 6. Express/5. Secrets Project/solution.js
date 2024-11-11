// Import necessary modules
import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

// Get the directory name of the current module (for ES modules)
const __dirname = dirname(fileURLToPath(import.meta.url));

// Initialize an Express application
const app = express();
const port = 3000;

// Variable to check if the user is authorized
//var userIsAuthorised = false;
// / security flaw due to the use of the global variable userIsAuthorised. Once a user submits the correct password, userIsAuthorised is set to true, and all subsequent users will be considered authorized, even if they don't provide a password or provide an incorrect one.

// Use bodyParser middleware to parse URL-encoded requests
app.use(bodyParser.urlencoded({ extended: true }));

// Middleware function to check the password in the request body
function passwordCheck(req, res, next) {
  // Retrieve password from the request body
  const password = req.body["password"];

  // Check if the password matches the secret password
  if (password === "ILoveProgramming") {
    req.userIsAuthorised = true;
  }
  // Move on to the next middleware or route handler
  next();
}

// Use the passwordCheck middleware for all incoming requests
app.use(passwordCheck);

// Route handler for GET requests to the root ("/") path
app.get("/", (_, res) => {
  // Send the index.html file to the user
  res.sendFile(__dirname + "/public/index.html");
});

// Route handler for POST requests to "/check" path
app.post("/check", (req, res) => {
  // Check if the user is authorized (based on the passwordCheck middleware result)
  if (req.userIsAuthorised) {
    // Send the secret.html file to the user
    res.sendFile(__dirname + "/public/secret.html");
  } else {
    // Send the index.html file to the user if not authorized
    res.sendFile(__dirname + "/public/index.html");
    // Alternatively, redirect the user back to the root path
    // res.redirect("/");
  }
});

// Start the Express server on the specified port
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
