const notes = [
  {
    id: 1,
    title: "Grocery list",
    text: "Tomatoes, garlic, onion, pasta"
  },
  {
    id: 2,
    title: "Chores",
    text: "Take out the garbage. Do the dishes."
  },
  {
    id: 3,
    title: "Todo",
    text: "Mail birthday cards. Write a blog post. Respond to emails."
  }
];

export function getNotes() {
  return notes;
}

export function addNote() {
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
}

export function deleteNote(id) {
  const index = notes.findIndex(n => n.id === id);
  notes.splice(index, 1);
}
