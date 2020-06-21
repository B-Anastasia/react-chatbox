import React, { DetailedHTMLProps, InputHTMLAttributes, useState } from "react";
import scss from "./Input.module.scss";
import { ButtonHelp } from "../Buttons";

export type InputNyaPropsType = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  onEnter?: () => void;
  error?: string;
  help?: string;
  onChangeInput?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeError?: (val: string) => void;
};

const Input: React.FC<InputNyaPropsType> = (props) => {
  const { onEnter, error, help, onChangeInput, ...restProps } = props;
  const { placeholder, type, value, id, onChangeError } = restProps;
  const placeholderName = placeholder && placeholder.toLowerCase();

  const [active, setActive] = useState<boolean>(false);

  let formClass = error
    ? `${scss.error} ${scss.field__form}`
    : active
    ? `${scss.active} ${scss.field__form}`
    : scss.field__form;

  const onChangeActiveInputHandler = (val: boolean) => () => {
    console.log(val);
    setActive(val);
    if (active) {
      onChangeError && onChangeError("");
    }
  };

  const onKeyPressHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    switch (e.charCode) {
      case 13:
        if (onEnter) {
          onEnter();
        }
    }
  };

  return (
    <div
      onClick={onChangeActiveInputHandler(true)}
      onBlur={onChangeActiveInputHandler(false)}
      className={"form"}
    >
      <div className={formClass}>
        <input
          {...props}
          type={type}
          value={value}
          className={scss.field__input}
          required
          placeholder={placeholder}
          name={placeholderName}
          id={id}
          onKeyPress={onKeyPressHandler}
          onChange={onChangeInput}
        />
        <label htmlFor={id} className={scss.field__label}>
          {placeholder}
        </label>
        {help && <ButtonHelp text={help} error={error} />}
      </div>
      {error ? <span className={error && scss.error}>{error}</span> : null}
    </div>
  );
};

export default Input;
