import React, { Component } from "react";
import Note from "./Note";
import AddButton from "./AddButton";
import {
  getNotes,
  addNote,
  deleteNote,
  saveNotes
} from "../services/noteService";

class Notes extends Component {
  state = {
    notes: []
  };

  componentDidMount() {
    if (localStorage.getItem("notes") === null) {
      localStorage.setItem("notes", JSON.stringify(this.state.notes));
    }
    const notes = getNotes();
    this.setState({ notes });
  }

  handleAddNote = () => {
    addNote();
    this.setState({ notes: getNotes() });
  };

  handleEditNote = (id, text) => {
    const notes = [...this.state.notes];
    const index = notes.findIndex(n => n.id === id);
    notes[index].text = text;
    saveNotes(notes);
    this.setState({ notes });
  };

  handleDeleteNote = id => {
    deleteNote(id);
    this.setState({ notes: getNotes() });
  };

  handleSave = () => {
    saveNotes(this.state.notes);
  };

  render() {
    const { notes } = this.state;
    return (
      <React.Fragment>
        <div className="menu">
          <AddButton onClick={this.handleAddNote} />
        </div>
        <div className="note-list">
          {notes.map(n => (
            <Note
              key={n.id}
              id={n.id}
              text={n.text}
              onChange={this.handleEditNote}
              handleDelete={this.handleDeleteNote}
            />
          ))}
        </div>
      </React.Fragment>
    );
  }
}

export default Notes;
