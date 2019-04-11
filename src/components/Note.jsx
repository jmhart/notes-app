import React from "react";

const Note = ({ title, text }) => {
  return (
    <div className="note">
      <div className="note-title">{title}</div>
      <textarea placeholder="Type notes here...">{text}</textarea>
      <button className="btn-save">Save</button>
      <button className="btn-edit">Edit</button>
    </div>
  );
};

export default Note;
