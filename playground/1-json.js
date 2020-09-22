const fs = require("fs");

const dataBuffer = fs.readFileSync("1-json.json");
const dataJSON = dataBuffer.toString();
const data = JSON.parse(dataJSON);

data.name = "Vincent";
data.age = "19";

const meJSON = JSON.stringify(data);
fs.writeFileSync("1-json.json", meJSON);
