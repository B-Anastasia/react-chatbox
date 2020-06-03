import React from "react";
import scss from "./TodoList.module.scss";
import { ITaskPropsType } from "../App/App";

type ITodoListPropsType = {
  tasks: Array<ITaskPropsType>;
};

const TodoList: React.FC<ITodoListPropsType> = (props) => {
  const tasks = props.tasks.map((el) => <div key={el.id}>{el.title}</div>);
  return (
    <div className={scss.todos}>
      <h1>TodoList</h1>
      {tasks}
    </div>
  );
};
export default TodoList;
