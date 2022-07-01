import React from "react";

const Filters = ({ all, active, completed }) => {
  return (
    <div className="task-filters">
      <input type="radio" id={all} name="filter" value="All" />
      <label htmlFor={all}>All</label>
      <input type="radio" id={active} name="filter" value="Active" />
      <label htmlFor={active}>Active</label>
      <input type="radio" id={completed} name="filter" value="Completed" />
      <label htmlFor={completed}>Completed</label>
    </div>
  );
};

export default Filters;
