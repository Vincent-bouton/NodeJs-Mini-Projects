const fs = require("fs");

const file = fs
  .readFileSync("../1-NodeJS-modules/lib.js", { encoding: "utf-8" })
  .toString();
console.log(file);

fs.writeFileSync("../1-NodeJS-modules/lib.js", "let me = 'me'");
