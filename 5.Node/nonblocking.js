// Require the built-in 'http' module
const http = require('http');

// Define the server's logic
const server = http.createServer((req, res) => {
    // Simulate a delay with setTimeout
    setTimeout(() => {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Hello, World!\n');
    }, 5000); // 5 seconds delay
});

// Start listening on port 3000
server.listen(3000, () => {
    console.log('Server running at http://127.0.0.1:3000/');
});
