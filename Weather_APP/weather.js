const http = require("http");
const axios = require("axios");
const readlineSync = require("readline-sync");
require("dotenv").config();
const apiKey = process.env.apiKey;

http
  .createServer((request, response) => {
    response.setHeader("Content-Type", "application/json");
    response.write("Server Running\n");
    console.log("Server Running\n");

    function getWeather(location) {
      const apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`;

      axios
        .get(apiUrl)
        .then((response) => {
          const weatherData = response.data;
          const temperature = weatherData.main.temp - 273.15;
          const windSpeed = weatherData.wind.speed;
          const description = weatherData.weather[0].description;

          console.log(`Weather in ${location}:`);
          console.log(`Temperature: ${temperature.toFixed(2)} °C`);
          console.log(`Wind Speed: ${windSpeed} m/s`);
          console.log(`Description: ${description}`);
        })
        .catch((error) => {
          console.log("Error retrieving weather data:", error.message);
        });
    }

    const location = readlineSync.question("Enter a location: ");

    getWeather(location);

    response.end();
  })
  .listen(7000);
