import React from "react";
import Message from "./Message";
import "./Chatbox.scss";
import { IMessagePropsType } from "../App/App";

type ChatboxPropsType = {
  messages: Array<IMessagePropsType>;
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
