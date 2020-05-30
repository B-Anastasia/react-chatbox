import React from "react";
import "./Message.scss";
import Avatar from "../Avatar";
import { MessagesPropsType } from "../Chatbox/Chatbox";

interface MessagePropsType {
  message: MessagesPropsType;
}

const Message: React.FC<MessagePropsType> = ({ message }) => {
  const { img, name, img_name, text, time } = message;
  return (
    <div className={"chatbox__message"}>
      <div className={"avatar"}>
        <Avatar img={img} img_name={img_name} />
      </div>
      <div className={"chatbox__message__ind_message"}>
        <span>{name}</span>
        <span>{text}</span>
        <span>{time}</span>
      </div>
    </div>
  );
};

export default Message;
