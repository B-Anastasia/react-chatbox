import React, { useState } from "react";
import Select from "../common/Select";

function SelectBox() {
  // console.log("box");
  const [value, setValue] = useState<string>("");
  const onChangeHandler = (newValue: string) => {
    setValue(newValue);
  };
  return (
    <div style={{ width: "30rem" }}>
      <Select
        options={["1", "2", "3"]}
        value={value}
        onChange={onChangeHandler}
      />
    </div>
  );
}

export default SelectBox;
