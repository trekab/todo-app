import React from "react";

const Task = ({ task }) => {
  return (
    <li className="task">
      <input type="checkbox" />
      {task}
    </li>
  );
};

export default Task;
