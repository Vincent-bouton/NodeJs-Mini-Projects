const request = require("postman-request");
const geocode = require("./utils/geocode");
// const url =
//   "http://api.weatherstack.com/current?access_key=c05df93ddaeecea354dd377eeffc4aec&query=brussels";
//
// request({ url: url, json: true }, (err, res) => {
//   if (err) {
//     console.log("Unable to connect to weather service");
//   } else if (res.body.error) {
//     console.log(res.body.error.info);
//   } else {
//     console.log(
//       `${res.body.current.weather_descriptions[0]}. it is currently ${res.body.current.temperature} degress out. it feels like ${res.body.current.feelslike} degress out.`
//     );
//   }
// });

geocode("Belgium", (err, data) => {
  console.log("Error", err);
  console.log("Data", data);
});
