import React from "react";

const AddNoteButton = ({ click }) => {
  return (
    <button onClick={click} className="btn-add">
      Add note
    </button>
  );
};

export default AddNoteButton;
