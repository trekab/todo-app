import React, { useRef } from "react";
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
  rearrangeTasks,
}) => {
  const dragItem = useRef();
  const dragOverItem = useRef();
  const dragStart = (e, position) => {
    dragItem.current = position;
  };
  const dragEnter = (e, position) => {
    dragOverItem.current = position;
  };

  const drop = () => {
    const copyListItems = [...tasks];
    const dragItemContent = copyListItems[dragItem.current];
    copyListItems.splice(dragItem.current, 1);
    copyListItems.splice(dragOverItem.current, 0, dragItemContent);
    dragItem.current = null;
    dragOverItem.current = null;
    rearrangeTasks(copyListItems);
  };
  return (
    <>
      <ul className="task-list">
        {tasks.map((task, index) => (
          <Task
            task={task}
            key={task.id}
            taskIndex={index}
            deleteTask={deleteTask}
            updateTaskStatus={updateTaskStatus}
            onDragStart={dragStart}
            onDragEnter={dragEnter}
            onDragEnd={drop}
          />
        ))}
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
