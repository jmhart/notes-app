import React from "react";
import Note from "../components/Note";

const Notes = ({ notes }) => {
  return (
    <div>
      {notes.map(n => (
        <Note title={n.title} text={n.text} />
      ))}
    </div>
  );
};

export default Notes;
