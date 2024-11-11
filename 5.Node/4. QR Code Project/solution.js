// Importing necessary modules
import inquirer from "inquirer";     // Importing the inquirer library, which allows interactive command-line prompts
import qr from "qr-image";           // Importing the qr-image library, which generates QR codes
import fs from "fs";                 // Importing the native Node.js 'fs' (file system) module for file operations

// Begin user interaction
inquirer
  .prompt([                          // Initiating a prompt to the user
    {
      message: "Type in your URL: ", // Message to display to the user
      name: "URL",                   // The name of the property to store the user's answer
    },
  ])
  .then((answers) => {               // Once user inputs the URL, this code will execute
    const url = answers.URL;         // Extracting the URL from the answer

    var qr_svg = qr.image(url);      // Creating a QR code image from the user's URL
    qr_svg.pipe(fs.createWriteStream("qr_img.png")); // Saving the QR code image to a file named 'qr_img.png'

    fs.writeFile("URL.txt", url, (err) => {        // Writing the URL to a text file named 'URL.txt'
      if (err) throw err;                          // If there's an error in saving, throw it
      console.log("The file has been saved!");     // Display a success message once the file is saved
    });
  })
  .catch((error) => {                // Error handling section
    if (error.isTtyError) {
      // If the error is a TTY error, it means the prompt couldn't be rendered in the current environment.
      // Handle or display error related to rendering prompts here.
    } else {
      // If it's a different kind of error, handle or display it here.
    }
  });

/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
