const fs = require("fs");

const getNotes = () => "Your notes...";

const addNotes = (title, body, chalkSuccess, chalkError) => {
  const notes = loadNotes();
  const duplicateNotes = notes.filter((note) => note.title === title);

  if (duplicateNotes.length === 0) {
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
  getNotes: getNotes,
  addNotes: addNotes,
  removeNotes: removeNotes,
  listNotes: listNotes,
};
