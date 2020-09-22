const chalk = require('chalk')
const getNotes = require("./notes")

const log = console.log

const notes = getNotes()

console.log(notes)
log(chalk.green.inverse.bold("Success"))

