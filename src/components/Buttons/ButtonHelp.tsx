import React, { useState } from "react";
import scss from "./Buttons.module.scss";
import { HelpCircle } from "../../Icons";

type ButtonPropsType = {
  text?: string;
  error?: string;
};

function ButtonHelp({ error, text }: ButtonPropsType) {
  const [help, setHelp] = useState<boolean>(false);
  if (help) {
    setTimeout(() => setHelp(false), 3000);
  }
  return (
    <div>
      {help && <span className={scss.help}>{text}</span>}
      <button onMouseOver={() => setHelp(true)}>
        <HelpCircle fill={error ? "red" : "grey"} />
      </button>
    </div>
  );
}

export default ButtonHelp;
