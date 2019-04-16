import React from "react";
import DeleteButton from "./DeleteButton";

const Note = ({ id, title, text, onChange, handleDelete }) => {
  return (
    <div className="note">
      <div className="note-title">{title}</div>
      <textarea
        placeholder="Type notes here..."
        value={text}
        onChange={e => onChange(id, e.currentTarget.value)}
      />
      <DeleteButton onClick={() => handleDelete(id)} />
    </div>
  );
};

export default Note;
