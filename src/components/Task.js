import React, { useState } from "react";
import cross from "../images/icon-cross.svg";

const Task = ({ task }) => {
  const [taskCompleted, setTaskCompleted] = useState(task.completed);

  const handleTaskStatusChange = () => {
    setTaskCompleted(!taskCompleted);
  };

  return (
    <li className="task">
      <input
        type="checkbox"
        checked={taskCompleted}
        onChange={handleTaskStatusChange}
      />
      <p className="task-description">{task.title}</p>
      <img src={cross} alt="cross" className="cross-icon" />
    </li>
  );
};

export default Task;
