// Import necessary modules
const fs = require('fs');
const path = require('path');

// Path to the text file in the same directory as this script
const filePath = path.join(__dirname, 'message.txt');

// Read the text file
fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading the file:', err);
        return;
    }
    console.log('File content:', data);
});
