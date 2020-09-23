const chalk = require("chalk");
const yargs = require("yargs");

const { getNotes, addNotes, removeNotes } = require("./notes");

// CHALK COLOR
const log = console.log;
const error = chalk.red.inverse.bold;
const success = chalk.green.inverse.bold;

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
    addNotes(argv.title, argv.body, success, error);
  },
});

//create remove command
yargs.command({
  command: "remove",
  describe: "Remove a note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
  },
  handler: (argv) => removeNotes(argv.title, success, error),
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
