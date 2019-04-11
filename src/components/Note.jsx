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
      <button onClick={() => handleDelete(id)} className="btn-edit">
        Delete
      </button>
    </div>
  );
};

export default Note;
