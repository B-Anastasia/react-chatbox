import React from "react";
import Span from "../Span";
import SelectBox from "../SelectBox";
import SelectRadioBox from "../SelectRadioBox";
import Users from "../Users/Users";
import Time from "../Time/Time";

function Junior() {
  console.log("jun");
  return (
    <div className={"pages"}>
      <h2>Hometask #6</h2>
      <Span />
      <h2>Hometask #7</h2>
      <SelectBox />
      <SelectRadioBox />
      <h2>Hometask #8</h2>
      <Users />
      <h2>Hometask #9</h2>
      <Time />
    </div>
  );
}

export default Junior;
