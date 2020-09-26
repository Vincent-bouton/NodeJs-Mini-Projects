const request = require("postman-request");

const url =
  "http://api.weatherstack.com/current?access_key=c05df93ddaeecea354dd377eeffc4aec&query=brussels";

request({ url: url, json: true }, (err, res) => {
  console.log(
    `${res.body.current.weather_descriptions[0]}. it is currently ${res.body.current.temperature} degress out. it feels like ${res.body.current.feelslike} degress out.`
  );
});

const geocodeURL =
  "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoidmluY2VudC1yaXNrMCIsImEiOiJja2ZqeW04cmIxOXY1MnFzMmg5ZjR6cWg5In0.2z8lz29P4OCUdMqVOkocMQ&limit=1";

request({ url: geocodeURL, json: true }, (err, res) => {
  const lat = res.body.features[0].center[1];
  const long = res.body.features[0].center[0];
  console.log("lat : " + lat + " long : " + long);
});
