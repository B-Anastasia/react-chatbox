import scss from "./IsDone.module.scss";
import React from "react";

type IsDoneProps = {
  isDone: boolean;
};

function IsDone({ isDone }: IsDoneProps) {
  if (isDone) {
    return (
      <div className={scss.task__isDone + " border " + scss.done}>Done</div>
    );
  }
  return <div className={`${scss.task__isDone} border`}>Working on it</div>;
}

export default IsDone;
