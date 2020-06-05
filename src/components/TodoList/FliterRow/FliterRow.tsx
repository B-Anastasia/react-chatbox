import React, { ChangeEvent, FC } from "react";
import scss from "./FilterRow.module.scss";
import { FilterType, Priority } from "../../App/App";

type FilterRow = {
  priority: Priority;
  showTasksPriority: (val: Priority) => void;
  showFilterTasks: (filter: FilterType) => void;
};

const FilterRow: FC<FilterRow> = ({
  showFilterTasks,
  showTasksPriority,
  priority,
}) => {
  return (
    <div className={scss.filterRow}>
      <select
        value={priority}
        className={`${scss.filterRow__priority} btn border`}
        onChange={(event: ChangeEvent<HTMLSelectElement>) => {
          showTasksPriority(event.target.value as Priority);
        }}
      >
        <option value="all">All Priorities</option>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
      <button
        className={`${scss.filterRow__buttons} btn border`}
        onClick={() => showFilterTasks("all")}
      >
        All
      </button>
      <button
        className={`${scss.filterRow__buttons} btn border`}
        onClick={() => showFilterTasks("undone")}
      >
        Active
      </button>
      <button
        className={`${scss.filterRow__buttons} btn border`}
        onClick={() => showFilterTasks("done")}
      >
        Done
      </button>
    </div>
  );
};

export default FilterRow;
