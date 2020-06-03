import React, { useState } from "react";
import scss from "./App.module.scss";
import Chatbox from "../Chatbox";
import TodoList from "../TodoList";

export type IMessagePropsType = {
  id: number;
  img: string;
  name: string;
  img_name: string;
  text: string;
  time: string;
};

export type ITaskPropsType = {
  id: number;
  title: string;
  priority: string;
};

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
  const [tasks, setTasks] = useState<Array<ITaskPropsType>>([
    { id: 3, title: "Learn React", priority: "high" },
    { id: 4, title: "Sleep", priority: "low" },
    { id: 5, title: "Buy new jeans", priority: "medium" },
    { id: 6, title: "Buy fish", priority: "medium" },
  ]);

  return (
    <div className={scss.app}>
      <Chatbox messages={messages} />
      <TodoList tasks={tasks} />
    </div>
  );
}

export default App;
