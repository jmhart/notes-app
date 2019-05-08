import React from "react";

const EditButton = ({ onClick, isEditing }) => {
  return (
    <button onClick={onClick}>{isEditing ? "Save note" : "Edit note"}</button>
  );
};

export default EditButton;
