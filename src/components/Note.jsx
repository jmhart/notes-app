import React from "react";

const Note = ({ id, title, text, onChange, handleDelete }) => {
  return (
    <div className="note">
      <div className="note-title">{title}</div>
      <textarea
        placeholder="Type notes here..."
        value={text}
        onChange={e => onChange(id, e.currentTarget.value)}
      />
      <div className="bnt-delete">
        <button onClick={() => handleDelete(id)}>Delete</button>
      </div>
    </div>
  );
};

export default Note;
