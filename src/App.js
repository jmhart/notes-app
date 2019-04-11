import React, { Component } from "react";
import Notes from "./components/Notes";
import AddNoteButton from "./components/AddNoteButton";
import { getNotes, addNote, deleteNote } from "./services/noteService";

class App extends Component {
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
    return (
      <div className="App">
        <header>
          <h1>Notes App</h1>
        </header>
        <main>
          <AddNoteButton click={this.handleAddNote} />
          <Notes
            notes={this.state.notes}
            handleEditNote={this.handleEditNote}
            handleDeleteNote={this.handleDeleteNote}
          />
        </main>
      </div>
    );
  }
}

export default App;
