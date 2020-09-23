const fs = require("fs");
const chalk = require("chalk");

const addNotes = (title, body, chalkSuccess, chalkError) => {
  const notes = loadNotes();
  const duplicateNote = notes.find((note) => note.title === title);

  if (!duplicateNote) {
    notes.push({
      title: title,
      body: body,
    });

    saveNotes(notes);
    console.log(chalkSuccess("New note added"));
  } else {
    console.log(chalkError("Note title taken!"));
  }
};

const removeNotes = (title, chalkSuccess, chalkError) => {
  const notes = loadNotes();
  const matchingNotes = notes.filter((note) => note.title !== title);

  if (notes.length === matchingNotes.length) {
    console.log(chalkError(`"${title}" does not exist`));
  } else {
    saveNotes(matchingNotes);
    console.log(chalkSuccess(`"${title}" has been removed`));
  }
};

const listNotes = (chalkSuccess, chalkError) => {
  const notes = loadNotes();
  if (notes.length === 0) {
    console.log(chalkError("No notes found"));
  } else {
    console.log(chalkSuccess("Your notes :"));
    notes.forEach((note) => console.log(note.title));
  }
};

const readNotes = (title, chalkSuccess, chalkError) => {
  const notes = loadNotes();
  const matchNote = notes.find((note) => note.title === title);

  if (matchNote) {
    console.log(chalk.blue.inverse("Title :"), matchNote.title);
    console.log(chalk.inverse("Body :"), matchNote.body);
  } else {
    console.log(chalkError("Note not find"));
  }
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

module.exports = {
  addNotes: addNotes,
  removeNotes: removeNotes,
  listNotes: listNotes,
  readNotes: readNotes,
};
