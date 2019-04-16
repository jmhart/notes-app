import React from "react";

const DeleteButton = ({ onClick }) => {
  return (
    <div className="bnt-delete">
      <button onClick={onClick}>Delete</button>
    </div>
  );
};

export default DeleteButton;
