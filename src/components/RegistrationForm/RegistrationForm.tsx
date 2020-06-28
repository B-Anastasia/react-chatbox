import React, { ChangeEvent, useState } from "react";
import scss from "./RegistrationForm.module.scss";
import { v1 } from "uuid";
import { Button } from "../Buttons";
import { ArrowRight2 } from "../../Icons/index";
import Input from "../Input/Input";

const RegistrationForm = () => {
  const [textInput, setTextInput] = useState<string>("");
  const [inputError, setInputError] = useState<string>("");
  let nameRe = /([^\sA-Za-z])+/g;

  // validation form
  // let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  // let reg = /[0-9]{3}-[0-9]{3}-[0-9]{4}/;

  const onEnter = () => {
    alert(`Your field ${textInput} was added succesfully!`);
    setInputError("");
    setTextInput("");
  };

  const onSubmit = () => {
    if (!textInput.trim()) {
      setInputError(`Field is empty.`);
      setTextInput("");
      return;
    }
    if (!nameRe.test(textInput)) {
      onEnter();
    } else {
      setInputError("Please enter a valid name with alphabets only");
      setTextInput("");
    }
  };

  const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setInputError("");
    setTextInput(e.currentTarget.value);
  };

  return (
    <div className={scss.user__form}>
      <Input
        onEnter={onSubmit}
        onChange={onChangeInputHandler}
        value={textInput}
        error={inputError}
        placeholder={"Name"}
        id={v1()}
        onChangeError={setInputError}
      />
      <Button onClick={onSubmit}>
        <ArrowRight2 fill={"white"} />
      </Button>
    </div>
  );
};

export default RegistrationForm;
