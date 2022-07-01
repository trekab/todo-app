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
          <div className="task-list__filters">
            <Filters
              all="all-tasks"
              active="active-tasks"
              completed="completed-tasks"
            />
          </div>
          <div className="task-list__footer--item">Clear Completed</div>
        </li>
      </ul>
      <div className="filters">
        <Filters all="all" active="active" completed="completed" />
      </div>
    </>
  );
};

export default TaskList;
