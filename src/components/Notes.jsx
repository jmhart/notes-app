import React, { Component } from "react";
import Note from "./Note";
import AddNoteButton from "./AddNoteButton";
import { getNotes, addNote, deleteNote } from "../services/noteService";

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

  render() {
    const { notes } = this.state;
    return (
      <React.Fragment>
        <AddNoteButton click={this.handleAddNote} />
        <div>
          {notes.map(n => (
            <Note
              key={n.id}
              id={n.id}
              title={n.title}
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
