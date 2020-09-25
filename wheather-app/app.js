const request = require("postman-request");

const url =
  "http://api.weatherstack.com/current?access_key=c05df93ddaeecea354dd377eeffc4aec&query=brussels";

request({ url: url, json: true }, (err, res) => {
  console.log(
    `${res.body.current.weather_descriptions[0]}. it is currently ${res.body.current.temperature} degress out. it feels like ${res.body.current.feelslike} degress out.`
  );
});
