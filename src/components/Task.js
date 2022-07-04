import React, { useState } from "react";
import cross from "../images/icon-cross.svg";

const Task = ({ task, deleteTask }) => {
  const [taskCompleted, setTaskCompleted] = useState(task.completed);

  const handleTaskStatusChange = () => {
    setTaskCompleted(!taskCompleted);
  };

  const handleDeleteTask = () => {
    deleteTask(task);
  };

  return (
    <li className="task">
      <input
        type="checkbox"
        checked={taskCompleted}
        onChange={handleTaskStatusChange}
      />
      <p className="task-description">{task.title}</p>
      <img
        src={cross}
        alt="cross"
        className="cross-icon"
        onClick={handleDeleteTask}
      />
    </li>
  );
};

export default Task;
