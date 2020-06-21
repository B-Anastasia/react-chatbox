import React from "react";
import scss from "./UserForm.module.scss";
import InputText from "../InputText/InputText";
import { v1 } from "uuid";
import { Button } from "../Buttons";

const UserForm = () => {
  const onEnter = (val: string) => {
    alert(`Your field ${val} was added succesfully!`);
  };

  return (
    <div className={scss.user__form}>
      <InputText
        error={"Field is required!"}
        type="text"
        placeholder="Name"
        id={v1()}
        onEnter={onEnter}
      />
      <InputText
        error={"Field is required!"}
        type="email"
        placeholder="E-mail"
        id={v1()}
        onEnter={onEnter}
        help={"You need to put your real e-mail address"}
      />
      <InputText
        error={"Field is required!"}
        type="tel"
        placeholder="Tel"
        id={v1()}
        onEnter={onEnter}
        help={"Please enter a valid phone number xxx-xxx-xxxx"}
      />
      <Button>Add</Button>
    </div>
  );
};
export default UserForm;
