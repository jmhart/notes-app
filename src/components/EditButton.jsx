import React from "react";

const EditButton = ({ disabled, onClick, isEditing }) => {
  return (
    <button disabled={disabled} onClick={onClick}>
      {isEditing ? "Save note" : "Edit note"}
    </button>
  );
};

export default EditButton;
