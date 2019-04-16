import React from "react";

const AddNoteButton = ({ onClick }) => {
  return (
    <button onClick={onClick} className="btn-add">
      Add note
    </button>
  );
};

export default AddNoteButton;
