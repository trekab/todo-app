import React, { useState } from "react";

const AddTaskForm = ({ addTask }) => {
  const [task, setTask] = useState("");
  const handleFormSubmit = (e) => {
    e.preventDefault();
    addTask(task);
    setTask("");
  };
  return (
    <form onSubmit={handleFormSubmit}>
      <input type="checkbox" /><label></label>
      <input
        type="text"
        placeholder="Create a new todo..."
        onChange={(e) => {
          setTask(e.target.value);
        }}
        value={task}
        required
      /><label></label>
    </form>
  );
};

export default AddTaskForm;
