import React, { FormEvent } from "react";
import "./Radio.scss";

type IRadioType = {
  items: Array<string>;
  name: string;
  value: string;
  onChange: (value: string) => void;
};

function Radio(props: IRadioType) {
  const radioItems = props.items.map((item) => (
    <label className="radio">
      <input
        type="radio"
        name={props.name}
        value={item}
        checked={props.value === item}
      />
      <span>{item}</span>
    </label>
  ));
  const onChangeHandler = (e: FormEvent<HTMLDivElement>) => {
    const target = e.target as HTMLInputElement;
    props.onChange(target.value);
  };
  return <div onChange={onChangeHandler}>{radioItems}</div>;
}

export default Radio;
