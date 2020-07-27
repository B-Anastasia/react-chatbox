import React, { useState } from "react";
import Radio from "../common/Radio";

function SelectRadioBox() {
  const [value, setValue] = useState<string>("");
  const items = ["React", "Angular", "Redux"];
  return (
    <div>
      <Radio items={items} name={"skills"} value={value} onChange={setValue} />
    </div>
  );
}

export default SelectRadioBox;
