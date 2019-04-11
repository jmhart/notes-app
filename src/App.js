import React, { Component } from "react";
import Notes from "./components/Notes";
import AddNoteButton from "./components/AddNoteButton";
import { getNotes, addNote } from "./services/noteService";

class App extends Component {
  state = {
    notes: []
  };

  componentDidMount() {
    const notes = getNotes();
    this.setState({ notes });
  }

  handleAddNote = () => {
    const notes = [...this.state.notes];
    const newNote = {
      id: notes[notes.length - 1].id + 1,
      title: "",
      text: ""
    };
    notes.push(newNote);
    this.setState({ notes });
  };

  render() {
    return (
      <div className="App">
        <header>
          <h1>Notes App</h1>
        </header>
        <main>
          <AddNoteButton click={this.handleAddNote} />
          <Notes notes={this.state.notes} />
        </main>
      </div>
    );
  }
}

export default App;
