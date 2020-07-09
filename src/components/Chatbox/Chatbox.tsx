import React, { useState } from "react";
import Message from "./Message";
import "./Chatbox.scss";

/*type ChatboxPropsType = {
  messages: Array<IMessagePropsType>;
};*/

export type IMessagePropsType = {
  id: number;
  img: string;
  name: string;
  img_name: string;
  text: string;
  time: string;
};
// const Chatbox: React.FC<ChatboxPropsType> = (props) => {
const Chatbox: React.FC = () => {
  const [messages] = useState<Array<IMessagePropsType>>([
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

  return (
    <div className="chatbox">
      <Message message={messages[0]} />
      <Message message={messages[1]} />
      <Message message={messages[0]} />
    </div>
  );
};
export default Chatbox;
