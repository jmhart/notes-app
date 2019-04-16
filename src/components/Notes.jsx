import React, { Component } from "react";
import Note from "./Note";
import AddNoteButton from "./AddNoteButton";
import SaveButton from "./SaveButton";
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
        <div className="btn-add">
          <AddNoteButton onClick={this.handleAddNote} />
          <SaveButton onClick={this.handleSave} />
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
