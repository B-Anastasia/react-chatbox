import React, { ChangeEvent } from "react";
import scss from "./Select.module.scss";

type ISelectPropsType = {
  options: Array<string>;
  value: string;
  onChange: (newVal: string) => void;
};

function Select(props: ISelectPropsType) {
  console.log("select");
  const options = props.options.map((op) => (
    <option value={op.toLowerCase()}>{op}</option>
  ));

  const onChange = (e: ChangeEvent<HTMLSelectElement>) =>
    props.onChange(e.target.value);

  return (
    <select className={scss.select} value={props.value} onChange={onChange}>
      {options}
    </select>
  );
}

export default Select;
