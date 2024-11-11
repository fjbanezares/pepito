// Import required modules
import express from "express";
import bodyParser from "body-parser";
import axios from "axios";

// Initialize an Express application
const app = express();
const port = 3000;

// Serve static files (like CSS or images) from the "public" directory
app.use(express.static("public"));

// Use bodyParser to parse incoming form data into a usable JavaScript object
app.use(bodyParser.urlencoded({ extended: true }));

// Define the root route ("/") using an asynchronous function
app.get("/", async (req, res) => {
  try {
    // Make a GET request to the API to fetch a random activity
    const response = await axios.get("https://bored-api.appbrewery.com/random");
    const result = response.data;
    console.log(result);

    // Render the "solution.ejs" view with the data received from the API
    res.render("solution.ejs", { data: result });
  } catch (error) {
    // If there's any error in the API request, log it and render the view with the error message
    console.error("Failed to make request:", error.message);
    res.render("solution.ejs", {
      error: error.message,
    });
  }
});

// Define the POST route for ("/") - this will be triggered when the user submits a form
app.post("/", async (req, res) => {
  try {
    // Extract the form data from the request body
    const type = req.body.type;
    const participants = req.body.participants;

    // Make a GET request to the API using the form data to filter the results
    const response = await axios.get(
      `https://bored-api.appbrewery.com/filter?type=${type}&participants=${participants}`
    );
    const result = response.data;
    console.log(result);

    // Render the "solution.ejs" view with a random result from the filtered activities
    res.render("solution.ejs", {
      data: result[Math.floor(Math.random() * result.length)],
    });
  } catch (error) {
    // If there's any error in the API request, log it and render the view with a default error message
    console.error("Failed to make request:", error.message);
    res.render("solution.ejs", {
      error: "No activities that match your criteria.",
    });
  }
});

// Start the Express server on the specified port
app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
