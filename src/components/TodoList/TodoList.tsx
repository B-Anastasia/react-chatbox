import React from "react";
import scss from "./TodoList.module.scss";
import { FilterType, ITask, Priority } from "../App/App";
import Task from "./Task";
import FilterRow from "./FliterRow";

type ITodoListPropsType = {
  tasks: Array<ITask>;
  priority: Priority;
  showTasksPriority: (val: Priority) => void;
  showFilterTasks: (filter: FilterType) => void;
  onDeleteTask: (id: number) => void;
  onDoneTask: (id: number) => void;
};

const TodoList: React.FC<ITodoListPropsType> = (props) => {
  const tasks = props.tasks.map((el) => (
    <Task
      onDeleteTask={props.onDeleteTask}
      onDoneTask={props.onDoneTask}
      task={el}
      key={el.id}
    />
  ));

  return (
    <div className={scss.todos}>
      <h1>TodoList</h1>
      <FilterRow
        priority={props.priority}
        showTasksPriority={props.showTasksPriority}
        showFilterTasks={props.showFilterTasks}
      />
      <ul className={scss.todos__list}>{tasks}</ul>
    </div>
  );
};
export default TodoList;
