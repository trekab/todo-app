import React from "react";
import Filters from "./Filters";
import Task from "./Task";

const TaskList = ({
  tasks,
  deleteTask,
  updateTaskStatus,
  clearCompletedTasks,
}) => {
  return (
    <>
      <ul className="task-list">
        {tasks.map((task) => (
          <Task
            task={task}
            key={task.id}
            deleteTask={deleteTask}
            updateTaskStatus={updateTaskStatus}
          />
        ))}
        <li className="task-list__footer">
          <div>{tasks.filter((task) => !task.completed).length} items left</div>
          <div className="task-list__filters">
            <Filters
              all="all-tasks"
              active="active-tasks"
              completed="completed-tasks"
            />
          </div>
          <div
            className="task-list__footer--item"
            onClick={clearCompletedTasks}
          >
            Clear Completed
          </div>
        </li>
      </ul>
      <div className="filters">
        <Filters all="all" active="active" completed="completed" />
      </div>
    </>
  );
};

export default TaskList;
