import React, { useState } from "react";
import scss from "./InputGreeting.module.scss";
import { v1 } from "uuid";

type ArrayType = {
  id: string;
  name: string;
};

function InputGreeting() {
  let [value, setValue] = useState<string>("");
  let [arr, setArr] = useState<Array<ArrayType>>([]);
  let [count, setCount] = useState<number>();
  const onNewLetter = (value: string) => {
    setValue(value);
  };

  const onAlertGreeting = (name: string) => {
    alert(`Welcome ${name}`);
  };
  const correctName = (name: string) => {
    return name
      .toLowerCase()
      .split("")
      .map((char, i) => (char[i] === char[0] ? char.toUpperCase() : char))
      .join("");
  };

  const onSubmitValue = () => {
    if (value.trim() === "") {
      setValue("");
      return alert(`Your name is empty`);
    }
    let newName = correctName(value);
    let newValue = { id: v1(), name: newName };
    const newArray = [...arr, newValue];
    let newCount = newArray.length;
    setArr(newArray);
    setCount(newCount);
    setValue("");
    onAlertGreeting(newName);
  };

  return (
    <div className={scss.form}>
      <div className={`${scss.form__group} ${scss.field}`}>
        <input
          type="input"
          value={value}
          className={scss.form__field}
          placeholder="Name"
          name="name"
          id="name"
          required
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            onNewLetter(e.currentTarget.value);
          }}
          onKeyPress={(e: React.KeyboardEvent<HTMLInputElement>) =>
            e.charCode === 13 && onSubmitValue()
          }
        />
        <label htmlFor="name" className={scss.form__label}>
          Name
        </label>
        <button className={`${scss.btn} btn`} onClick={onSubmitValue}>
          <span>Add</span>
        </button>
      </div>
      <span className={scss.count}>{count}</span>
    </div>
  );
}

export default InputGreeting;
