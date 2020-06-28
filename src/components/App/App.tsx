import React from "react";
import "./App.scss";
import RegistrationForm from "../RegistrationForm/RegistrationForm";
import InputGreeting from "../InputGreeting";
import Chatbox from "../Chatbox";
import TodoList from "../TodoList";

function App() {
  return (
    <div className="app">
      <div className={"container"}>
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
    </div>
  );
}

export default App;
