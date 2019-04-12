import React, { Component } from "react";
import Notes from "./components/Notes";

class App extends Component {
  render() {
    return (
      <div className="container">
        <header>
          <h1>Notes App</h1>
        </header>
        <main>
          <Notes />
        </main>
      </div>
    );
  }
}

export default App;
