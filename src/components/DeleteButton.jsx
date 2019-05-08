import React from "react";

const DeleteButton = ({ onClick }) => {
  return (
    <button className="bnt-delete" onClick={onClick}>
      Delete
    </button>
  );
};

export default DeleteButton;
