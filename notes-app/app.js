const chalk = require('chalk')
const getNotes = require("./notes")

const log = console.log
const error = chalk.red.inverse.bold

const command = process.argv[2]

if(command === 'add'){
    log('Adding note!')
}else if(command === 'remove'){
    log('Removing note!')
}else{
    log(error('ERROR: Choose between "add" or "remove"'))
}