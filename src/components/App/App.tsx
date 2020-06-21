import React from "react";
import "./App.scss";
import UserForm from "../UserForm";
import RegistrationForm from "../RegistrationForm/RegistrationForm";

function App() {
  return (
    <div className="app">
      <div className={"container"}>
        <h2>Option 1</h2>
        <RegistrationForm />
        <h2>Option 2</h2>
        <UserForm />
      </div>
    </div>
  );
}

export default App;
