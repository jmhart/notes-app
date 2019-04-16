import React from "react";

const AddButton = ({ onClick }) => {
  return (
    <button onClick={onClick} className="btn-add">
      Add note
    </button>
  );
};

export default AddButton;
