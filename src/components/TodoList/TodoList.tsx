import React, { useState } from "react";
import scss from "./TodoList.module.scss";
import Task from "./Task";
import FilterRow from "./FliterRow";

// type ITodoListPropsType = {
//   tasks: Array<ITask>;
//   priority: Priority;
//   showTasksPriority: (val: Priority) => void;
//   showFilterTasks: (filter: FilterType) => void;
//   onDeleteTask: (id: number) => void;
//   onDoneTask: (id: number) => void;
// };
export type ITask = {
  id: number;
  title: string;
  priority: "high" | "low" | "medium";
  isDone: boolean;
};

export type Priority = "high" | "medium" | "low" | "all";

export type FilterType = "all" | "done" | "undone";

// const TodoList: React.FC<ITodoListPropsType> = () => {
const TodoList: React.FC = () => {
  const [tasks, setTasks] = useState<Array<ITask>>([
    { id: 3, title: "Learn React", priority: "high", isDone: true },
    { id: 4, title: "Sleep", priority: "low", isDone: false },
    { id: 5, title: "Buy new jeans", priority: "medium", isDone: true },
    { id: 6, title: "Buy fish", priority: "medium", isDone: false },
  ]);

  const [priority, setPriority] = useState<Priority>("all");
  const [filter, setFilter] = useState<FilterType>("all");

  function showTasksPriority(val: Priority) {
    setPriority(val);
  }

  function showFilterTasks(filter: FilterType) {
    setFilter(filter);
  }

  function onDeleteTask(id: number) {
    const newArr = tasks.filter((t) => t.id !== id);
    setTasks(newArr);
  }

  function onDoneTask(id: number) {
    const newArr = tasks.map((t) => {
      if (t.id === id) {
        return { ...t, isDone: !t.isDone };
      }
      return { ...t };
    });
    setTasks(newArr);
  }

  let priorityTasks =
    priority !== "all" ? tasks.filter((t) => t.priority === priority) : tasks;

  let filteredTasks =
    filter === "done"
      ? priorityTasks.filter((t) => t.isDone)
      : filter === "undone"
      ? priorityTasks.filter((t) => !t.isDone)
      : priorityTasks;

  const tasksArr = filteredTasks.map((el) => (
    <Task
      onDeleteTask={onDeleteTask}
      onDoneTask={onDoneTask}
      task={el}
      key={el.id}
    />
  ));

  return (
    <div className={scss.todos}>
      <h1>TodoList</h1>
      <FilterRow
        priority={priority}
        showTasksPriority={showTasksPriority}
        showFilterTasks={showFilterTasks}
      />
      <ul className={scss.todos__list}>{tasksArr}</ul>
    </div>
  );
};
export default TodoList;
