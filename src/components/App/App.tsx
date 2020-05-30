import React from "react";
import scss from "./App.module.scss";
import Chatbox from "../Chatbox";

function App() {
  const messages = [
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
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      time: "11:10",
    },
  ];

  return (
    <div className={scss.app}>
      <Chatbox messages={messages} />
    </div>
  );
}

export default App;
