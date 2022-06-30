import React from "react";
import Filters from "./Filters";
import Task from "./Task";

const TaskList = ({ tasks }) => {
  return (
    <>
      <ul className="task-list">
        {tasks.map((task, i) => (
          <Task task={task} key={i} />
        ))}
        <li className="task-list__footer">
          <div>5 items left</div>
          {/* <Filters /> */}
          <div className="task-list__footer--item">Clear Completed</div>
        </li>
      </ul>
      <div className="filters">
        <Filters />
      </div>
    </>
  );
};

export default TaskList;
