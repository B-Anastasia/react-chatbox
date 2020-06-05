import React, { FC } from "react";
import { ITask } from "../../App/App";
import scss from "./Task.module.scss";
import Priority from "./Priority/Priority";
import IsDone from "./IsDone/IsDone";

type ITaskPropsType = {
  task: ITask;
};

const Task: FC<ITaskPropsType> = (props) => {
  const { id, title, priority, isDone } = props.task;
  return (
    <li className={scss.task} key={id}>
      <div className={scss.task__title}>{title}</div>
      <Priority priority={priority} />
      <IsDone isDone={isDone} />
      <input
        type="checkbox"
        id={"check"}
        className={`${scss.task__check} ${scss.crossed}`}
        checked={isDone}
      />
      <button className={`btn ${scss.task__btn}`}>x</button>
    </li>
  );
};

export default Task;
