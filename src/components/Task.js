import React from "react";
import cross from "../images/icon-cross.svg";

const Task = ({ task }) => {
  return (
    <li className="task">
      <input type="checkbox" />
      <p className="task-description">{task}</p>
      <img src={cross} alt="cross" className="cross-icon" />
    </li>
  );
};

export default Task;
