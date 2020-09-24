const request = require("postman-request");

const url =
  "http://api.weatherstack.com/current?access_key=c05df93ddaeecea354dd377eeffc4aec&query=brussels";

request(url, (err, res) => {
  const data = JSON.parse(res.body);
  console.log(data.current);
});
