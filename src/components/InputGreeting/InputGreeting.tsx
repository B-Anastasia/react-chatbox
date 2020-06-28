import React, { useState } from "react";
import scss from "./InputGreeting.module.scss";
import { v1 } from "uuid";
import Count from "./Count/Count";
import InputValue from "./InputValue/InputValue";
import Input from "../Input/Input";
import { Button } from "../Buttons";

export type ArrayType = {
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

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    onNewLetter(e.currentTarget.value);
  };

  const onKeySubmit = (e: React.KeyboardEvent<HTMLInputElement>) => {
    e.charCode === 13 && onSubmitValue();
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

  const onFilterArr = (id: string) => {
    let filterArr = arr.filter((n) => n.id !== id);
    setArr(filterArr);
    setCount(filterArr.length);
  };

  return (
    <React.Fragment>
      <h3>Hometask #3</h3>
      <div className={scss.form}>
        <div className={`${scss.form__group} ${scss.field}`}>
          <InputValue
            value={value}
            onChangeInput={onChangeInput}
            onKeySubmit={onKeySubmit}
          />
          <Button
            className={`${scss.btn} ${scss.btn__add} btn`}
            onClick={onSubmitValue}
          >
            <span>Add</span>
          </Button>
        </div>
        <Count count={count} arr={arr} onFilterArr={onFilterArr} />
      </div>
      <h3>Hometask #4</h3>
      <div className={scss.form__greet}>
        <Input
          onEnter={onSubmitValue}
          placeholder={"Name"}
          value={value}
          onChange={onChangeInput}
        />
        <Button onClick={onSubmitValue}>Add</Button>
        <Count count={count} arr={arr} onFilterArr={onFilterArr} />
      </div>
    </React.Fragment>
  );
}

export default InputGreeting;
