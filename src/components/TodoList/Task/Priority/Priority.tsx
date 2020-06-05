import scss from "./Priority.module.scss";
import React from "react";

type PriorityProps = {
  priority: "high" | "low" | "medium";
};

function Priority({ priority }: PriorityProps) {
  switch (priority) {
    case "low":
      return (
        <div className={`${scss.task__priority} ${scss.low} border`}>
          {priority}
        </div>
      );
    case "medium":
      return (
        <div className={`${scss.task__priority} ${scss.medium} border`}>
          {priority}
        </div>
      );
    default:
      return <div className={`${scss.task__priority} border`}>{priority}</div>;
  }
}

export default Priority;
