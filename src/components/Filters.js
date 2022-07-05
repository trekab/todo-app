import React, { useState } from "react";

const Filters = ({ activeTasks, completedTasks, allTasks }) => {
  const filterValues = ["All", "Active", "Completed"];
  const [filter, setFilter] = useState("All");

  const filterChangeHandler = (e) => {
    setFilter(e.currentTarget.value);
    if (e.currentTarget.value === "Active") {
      activeTasks();
    } else if (e.currentTarget.value === "Completed") {
      completedTasks();
    } else {
      allTasks();
    }
  };

  return (
    <div className="task-filters">
      {filterValues.map((f) => (
        <div key={f}>
          <input
            type="radio"
            id={f}
            name="filter"
            value={f}
            onChange={filterChangeHandler}
            checked={filter === f}
          />
          <label htmlFor={f}>{f}</label>
        </div>
      ))}
    </div>
  );
};

export default Filters;
