const fs = require('fs');

const path = require('path');

// Path to the file you want to read
//const filePath = 'example.txt';

// Path to the file you want to read, ensuring it's in the same directory as this script
const filePath = path.join(__dirname, 'example.txt');

console.log('Script start'); // 1. Directly goes to Call Stack and logs to console.

// Schedules a timer with 0 ms, but it won't execute until Call Stack is clear.
setTimeout(() => {
    console.log('Inside setTimeout callback'); // 7. Executed after the Call Stack is clear.
}, 0);

// Starts an asynchronous file read operation.
fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) throw err;
    console.log('File read completed'); // 6. Logged after the file read operation is done.
});

// Schedule another timeout.
setTimeout(() => {
    console.log('Second setTimeout callback'); // 8. Executed after the first setTimeout and file read callbacks.
}, 10);

// A simple synchronous operation to demonstrate Call Stack blocking.
for (let i = 0; i < 100; i++) {
    console.log(i); // 2. This loop blocks the Call Stack and logs numbers to the console.
}

console.log('Script end'); // 3. Directly goes to Call Stack after the loop and logs to console.

// Event Loop now checks the Call Stack and starts executing callbacks from the Callback Queue.
