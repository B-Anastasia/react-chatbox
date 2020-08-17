import React from "react";
import Span from "../Span";
import SelectBox from "../SelectBox";
import SelectRadioBox from "../SelectRadioBox";
import Users from "../Users/Users";

function Junior() {
    console.log("jun");
    return (
        <div className={"pages"}>
            <h2>Hometask #6</h2>
            <Span/>
            <h2>Hometask #7</h2>
            <SelectBox/>
            <SelectRadioBox/>
            <h2>Hometask #8</h2>
            <Users/>
        </div>
    );
}

export default Junior;
