// Include the file system module from Node.js standard library.
const fs = require("fs");

// Use the writeFile method to create (or overwrite if it already exists) a file named "pepito.txt".
// The content of this file will be the string "Hello Node".
fs.writeFile("pepito.txt", "Hello Node", (err) => {
  // This callback function is executed after the writeFile operation completes.

  // If an error occurs during the file writing process, an exception is thrown,
  // which will cause the Node.js application to crash if not caught.
  if (err) throw err;

  // If no error occurs, it logs to the console that the file has been successfully saved.
  console.log("The file has been saved!");
});

// Use the readFile method to read the contents of "pepito.txt" with UTF-8 encoding.
fs.readFile("pepito.txt", "utf8", (err, data) => {
  // This callback function is executed after the readFile operation completes.

  // Similar to writeFile, if an error occurs during the file reading process, an exception is thrown.
  if (err) throw err;

  // If the file is read successfully, it logs the contents of the file to the console.
  console.log(data);
});
