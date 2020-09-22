const chalk = require("chalk");
const yargs = require("yargs");

const getNotes = require("./notes");

// CHALK COLOR
const log = console.log;
const error = chalk.red.inverse.bold;

// Customize yargs version
yargs.version("1.1.0");

// add, remove, read, list
//create add command
yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Note body",
      demandOption: "true",
      type: "string",
    },
  },
  handler: (argv) => {
    log("Title: ", argv.title);
    log("Body: ", argv.body);
  },
});

//create remove command
yargs.command({
  command: "remove",
  describe: "Remove a note",
  handler: () => log("Removing the note!"),
});

//create remove command
yargs.command({
  command: "list",
  describe: "list your notes",
  handler: () => log("listing out all notes!"),
});

//create remove command
yargs.command({
  command: "read",
  describe: "read a note",
  handler: () => log("Reading the note!"),
});

yargs.parse();
