import React, { FC } from "react";
import { ITask } from "../../App/App";
import scss from "./Task.module.scss";
import Priority from "./Priority/Priority";
import IsDone from "./IsDone/IsDone";

type ITaskPropsType = {
  task: ITask;
  onDeleteTask: (id: number) => void;
  onDoneTask: (id: number) => void;
};

const Task: FC<ITaskPropsType> = (props) => {
  const { id, title, priority, isDone } = props.task;
  const taskName = isDone ? (
    <div className={scss.task__title + " " + scss.crossed}>{title}</div>
  ) : (
    <div className={scss.task__title}>{title}</div>
  );
  return (
    <li className={scss.task} key={id}>
      {taskName}
      <Priority priority={priority} />
      <IsDone isDone={isDone} />
      <input
        type="checkbox"
        className={scss.task__check}
        checked={isDone}
        onChange={() => props.onDoneTask(id)}
      />
      <button
        className={`btn ${scss.task__btn}`}
        onClick={() => props.onDeleteTask(id)}
      >
        x
      </button>
    </li>
  );
};

export default Task;
