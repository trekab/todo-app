import React, { useState } from "react";
import cross from "../images/icon-cross.svg";

const Task = ({ task, deleteTask, updateTaskStatus }) => {
  const [taskCompleted, setTaskCompleted] = useState(task.completed);

  const handleTaskStatusChange = () => {
    setTaskCompleted(!taskCompleted);
    updateTaskStatus(task, !taskCompleted);
  };

  const handleDeleteTask = () => {
    deleteTask(task);
  };

  return (
    <li className="task">
      <div
        className="check-mark"
        mark={taskCompleted ? "mark-true" : "mark-false"}
      ></div>
      <input
        type="checkbox"
        checked={taskCompleted}
        onChange={handleTaskStatusChange}
        id={task.id}
      />
      <label htmlFor={task.id} className="task-description">
        {task.title}
      </label>
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
