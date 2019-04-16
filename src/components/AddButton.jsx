import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AddButton = ({ onClick }) => {
  return (
    <button onClick={onClick} className="btn-add">
      <FontAwesomeIcon icon={"plus"} size="2x" />
      <div className="btn-add-text">Add note</div>
    </button>
  );
};

export default AddButton;
