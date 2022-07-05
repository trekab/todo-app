import React, { useState } from "react";

const Filters = ({ all, active, completed }) => {
  const filterValues = [all, active, completed];
  const [filter, setFilter] = useState("All");

  const filterChangeHandler = (e) => {
    setFilter(e.currentTarget.value);
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
