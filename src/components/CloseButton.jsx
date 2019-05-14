import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CloseButton = ({ onClick }) => {
  return (
    <div onClick={onClick} className="btn-close">
      <FontAwesomeIcon icon={"times"} />
    </div>
  );
};

export default CloseButton;
