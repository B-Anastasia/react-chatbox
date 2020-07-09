import React, { DetailedHTMLProps, InputHTMLAttributes, useState } from "react";
import scss from "./Input.module.scss";
import { ButtonHelp } from "../Buttons";

export type InputNyaPropsType = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  onEnter: () => void;
  error?: string;
  help?: string;
  onChangeError?: (val: string) => void;
};

const Input: React.FC<InputNyaPropsType> = ({
  onEnter,
  error,
  help,
  onChangeError,
  ...props
}) => {
  const [active, setActive] = useState<boolean>(false);

  let formClass = error
    ? `${scss.error} ${scss.field__form}`
    : active
    ? `${scss.active} ${scss.field__form}`
    : scss.field__form;

  const onChangeActiveInputHandler = (val: boolean) => () => {
    setActive(val);
    if (active) {
      onChangeError && onChangeError("");
    }
  };

  const onKeyPressHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    switch (e.charCode) {
      case 13:
        onEnter();
    }
  };

  const onFocusHandler = () => onChangeError && onChangeError("");

  return (
    <div
      onClick={onChangeActiveInputHandler(true)}
      onBlur={onChangeActiveInputHandler(false)}
      className={"form"}
    >
      <div className={formClass}>
        <input
          {...props}
          className={scss.field__input}
          onKeyPress={onKeyPressHandler}
          autoFocus={true}
          onFocus={onFocusHandler}
        />
        <label htmlFor={props.id} className={scss.field__label}>
          {props.placeholder}
        </label>
        {help && <ButtonHelp text={help} error={error} />}
      </div>
      {error ? <span className={error && scss.error}>{error}</span> : null}
    </div>
  );
};

export default Input;
