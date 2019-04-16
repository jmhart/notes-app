export function getNotes() {
  const notes = localStorage.getItem("notes");
  return JSON.parse(notes);
}

export function addNote() {
  const notes = getNotes();
  let id = 1;
  if (notes.length) {
    id = notes[notes.length - 1].id + 1;
  }
  const note = {
    id: id,
    title: "",
    text: ""
  };
  notes.push(note);
  saveNotes(notes);
}

export function deleteNote(id) {
  const notes = getNotes();
  const index = notes.findIndex(n => n.id === id);
  notes.splice(index, 1);
  saveNotes(notes);
}

export function saveNotes(notes) {
  localStorage.setItem("notes", JSON.stringify(notes));
}
