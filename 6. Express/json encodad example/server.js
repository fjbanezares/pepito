const express = require('express');

const app = express();
app.use(express.json());

app.use(express.static('public')); // Serve static files like HTML and JavaScript

// Define a simple route that responds with "Hello, world!"
app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.post('/submit-data', (req, res) => {
    const formData = req.body;
    console.log('executing POST');
    console.log('Name:', formData.name);
    console.log('Email:', formData.email);

    res.send('Data received');
});

app.listen(2000, () => {
    console.log('Server is running on port 2000');
});
