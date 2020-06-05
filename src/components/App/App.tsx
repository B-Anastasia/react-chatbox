import React, { useState } from "react";
import TodoList from "../TodoList";
import "./App.scss";
import Chatbox from "../Chatbox";
export type IMessagePropsType = {
  id: number;
  img: string;
  name: string;
  img_name: string;
  text: string;
  time: string;
};

export type ITask = {
  id: number;
  title: string;
  priority: "high" | "low" | "medium";
  isDone: boolean;
};

export type Priority = "high" | "medium" | "low" | "all";
export type FilterType = "all" | "done" | "undone";

function App() {
  const [messages, setMessages] = useState<Array<IMessagePropsType>>([
    {
      id: 1,
      img:
        "https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/girl_female_woman_avatar-512.png",
      name: "Alisa",
      img_name: "Avatar",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur\n" +
        "          fugit, non placeat quidem recusandae vero!",
      time: "11:00",
    },
    {
      id: 2,
      img:
        "https://sun9-27.userapi.com/c628024/v628024444/5199/GJpQhbhQ9vE.jpg?ava=1",
      name: "Den",
      img_name: "Avatar",
      text:
        "Loremipsumdolorsitamet,consecteturadipisicingelitLoremipsumdolorsitamet,consecteturadipisicingelit.",
      time: "11:10",
    },
  ]);
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

  // const showTasksPriority = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const newValue = e.target.value;
  //   setPriority(newValue);
  // };

  let priorityTasks;
  priority !== "all"
    ? (priorityTasks = tasks.filter((t) => t.priority === priority))
    : (priorityTasks = tasks);

  let filteredTasks;
  filter === "done"
    ? (filteredTasks = priorityTasks.filter((t) => t.isDone))
    : filter === "undone"
    ? (filteredTasks = priorityTasks.filter((t) => !t.isDone))
    : (filteredTasks = priorityTasks);
  console.log(filteredTasks);
  return (
    <div className="app">
      <Chatbox messages={messages} />
      <TodoList
        tasks={filteredTasks}
        priority={priority}
        showTasksPriority={showTasksPriority}
        showFilterTasks={showFilterTasks}
      />
    </div>
  );
}

export default App;
