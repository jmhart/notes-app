import React, { Component } from "react";
import Note from "../components/Note";

class Notes extends Component {
  render() {
    const { notes, handleEditNote, handleDeleteNote } = this.props;
    return (
      <div>
        {notes.map(n => (
          <Note
            key={n.id}
            id={n.id}
            title={n.title}
            text={n.text}
            onChange={handleEditNote}
            handleDelete={handleDeleteNote}
          />
        ))}
      </div>
    );
  }
}

export default Notes;
