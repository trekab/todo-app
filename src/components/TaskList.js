import React from "react";
import Task from "./Task";

const TaskList = ({ tasks }) => {
  return (
    <ul className="task-list">
      {tasks.map((task, i) => (
        <Task task={task} key={i} />
      ))}
      <li className="task-list__footer">
        <div>5 items left</div>
        <div>Clear Completed</div>
      </li>
    </ul>
  );
};

export default TaskList;
