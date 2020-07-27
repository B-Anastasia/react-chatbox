import React, { useState } from "react";
import Radio from "../common/Radio";

const items = ["React", "Angular", "Redux"];

function SelectRadioBox() {
  const [value, setValue] = useState<string>("");

  return (
    <div>
      <Radio items={items} name={"skills"} value={value} onChange={setValue} />
    </div>
  );
}

export default SelectRadioBox;
