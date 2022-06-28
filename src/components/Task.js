import React from "react";

const Task = ({ task }) => {
  return (
    <div className="task">
      <input type="checkbox" />
      {task}
    </div>
  );
};

export default Task;
