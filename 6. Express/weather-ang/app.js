
// const city = 'London';



const https = require("https");
const express = require("express");
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));


app.get("/", function (req, res) {

    res.sendFile(__dirname + "/index.html");


})

// app.post('/', function (req, res) {
//     const city = req.body.city;
//     console.log('City:', city);
//     // Continue with your code
// });

app.post("/", function (req, res) {

    console.log("el objeto requ..." + req);

    const bodyInputMainPage = req.body;
    console.log("la temperatura desc..." + bodyInputMainPage);

    const city = bodyInputMainPage.city;
    console.log("la ciudad desc..." + city);

    const apiKey = '8a87f86ec1e88dc50f110aa221e6473d';
    const unitsChosen = 'metric';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unitsChosen}`;



    https.get(apiUrl, function (response) {
        console.log(response);
        response.on("data", function (data) {
            console.log(data);
            const weatherResponseData = JSON.parse(data);
            console.log(weatherResponseData);
            const tempDataResponse = weatherResponseData.main.temp;
            console.log("la temperatura..." + tempDataResponse);
            const weathDescriotion = weatherResponseData.weather[0].description;
            console.log("la temperatura desc..." + weathDescriotion);
            const iconNice = weatherResponseData.weather[0].icon;
            console.log("la temperatura desc..." + iconNice);

            const imageURL = "http://openweathermap.org/img/wn/" + iconNice + "@2x.png";


            res.setHeader("Content-Type", "text/html");
            res.write("<h1>Weather App</h1>");
            res.write("<p> the temp is " + tempDataResponse + "</p>");
            res.write("<p> the weather is... " + weathDescriotion + "</p><img  src=" + imageURL + ">");
            res.send();




        })
    })
})


app.listen(3000, function () {
    console.log("Server running on port 3000");
})