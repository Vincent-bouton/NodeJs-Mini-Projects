const validator = require("validator")
const notes = require('./notes')

notes()

console.log(validator.isURL('https://aaaaa.com'))