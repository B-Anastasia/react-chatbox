import React from "react";
import Message from "../Message";
import "./Chatbox.scss";

export type MessagesPropsType = {
  id: number;
  img: string;
  name: string;
  img_name: string;
  text: string;
  time: string;
};

type ChatboxPropsType = {
  messages: MessagesPropsType[];
};

const Chatbox: React.FC<ChatboxPropsType> = (props) => {
  return (
    <div className="chatbox">
      <Message message={props.messages[0]} />
      <Message message={props.messages[1]} />
      <Message message={props.messages[0]} />
    </div>
  );
};
export default Chatbox;
