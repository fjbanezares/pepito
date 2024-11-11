const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');

app.get('/', function (req, res) {
    res.render('index', { environment: process.env.NODE_ENV });
});

app.listen(3000, function () {
    console.log('App is listening on port 3000');
});
