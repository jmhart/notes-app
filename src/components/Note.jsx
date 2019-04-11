import React from "react";

const Note = ({ id, title, text, onChange }) => {
  return (
    <div className="note">
      <div className="note-title">{title}</div>
      <textarea
        placeholder="Type notes here..."
        value={text}
        onChange={e => onChange(id, e.currentTarget.value)}
      />
      <button className="btn-save">Save</button>
      <button className="btn-edit">Edit</button>
    </div>
  );
};

export default Note;
