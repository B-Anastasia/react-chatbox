import React from "react";
import "./Pages.scss";
import Chatbox from "../Chatbox";
import TodoList from "../TodoList";
import InputGreeting from "../InputGreeting";
import RegistrationForm from "../RegistrationForm/RegistrationForm";

function PreJunior() {
  return (
    <div className={"pages"}>
      <h2>Hometask #1</h2>
      <Chatbox />
      <h2>Hometask #2</h2>
      <div className={"todo"}>
        <TodoList />
      </div>
      <h2>Hometask #3</h2>
      <InputGreeting />
      <h2>Hometask #4</h2>
      <RegistrationForm />
    </div>
  );
}

export default PreJunior;
