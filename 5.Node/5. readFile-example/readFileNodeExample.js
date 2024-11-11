// Import the fs module to interact with the file system
const fs = require('fs');
const path = require('path');

// Path to the file you want to read
//const filePath = 'example.txt';

// Path to the file you want to read, ensuring it's in the same directory as this script
const filePath = path.join(__dirname, 'example.txt');

// Read the content of the file
fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.error('An error occurred while reading the file:', err);
        return;
    }

    // Output the file content to the console
    console.log(data);
});
