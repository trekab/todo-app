import React from "react";
import Filters from "./Filters";
import Task from "./Task";

const TaskList = ({
  tasksTotal,
  tasks,
  deleteTask,
  updateTaskStatus,
  clearCompletedTasks,
  activeTasks,
  completedTasks,
  allTasks,
}) => {
  return (
    <>
      <ul className="task-list">
        {tasks.length > 0 ? (
          tasks.map((task) => (
            <Task
              task={task}
              key={task.id}
              deleteTask={deleteTask}
              updateTaskStatus={updateTaskStatus}
            />
          ))
        ) : (
          <p className="empty-tasks-note">No tasks available</p>
        )}
        <li className="task-list__footer">
          <div>
            {tasksTotal.filter((task) => !task.completed).length} items left
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
        <Filters
          activeTasks={activeTasks}
          completedTasks={completedTasks}
          allTasks={allTasks}
        />
      </div>
    </>
  );
};

export default TaskList;
