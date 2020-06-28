import React from "react";
import "./App.scss";
import Navbar from "../Navbar/Navbar";
import { Route } from "react-router-dom";
import { Junior, JuniorPlus, PreJunior } from "../Pages";

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className={"container"}>
        <Route path="/pre-junior" component={PreJunior} />
        <Route path="/junior" component={Junior} />
        <Route path="/junior-plus" component={JuniorPlus} />
      </div>
    </div>
  );
}

export default App;
