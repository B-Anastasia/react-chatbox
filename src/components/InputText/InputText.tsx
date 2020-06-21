import React, {
  ChangeEvent,
  DetailedHTMLProps,
  InputHTMLAttributes,
  useState,
} from "react";
import scss from "./InputText.module.scss";
import { ButtonHelp } from "../Buttons";

export type InputTextPropsType = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  onEnter?: (val: string) => void;
  error?: string;
  help?: string;
  onKeySubmit?: (type: string) => void;
  onChangeInput?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const InputText: React.FC<InputTextPropsType> = ({
  onEnter,
  error,
  ...props
}) => {
  const { type, placeholder, id, help } = props;

  const placeholderName = placeholder && placeholder.toLowerCase();
  const [active, setActive] = useState<boolean>(false);
  const [inputError, setInputError] = useState<string>("");
  const [textInput, setTextInput] = useState<string>("");

  const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setInputError("");
    setTextInput(e.currentTarget.value);
  };

  const onChangeActiveInputHandler = (val: boolean) => () => {
    // setInputError("");
    setActive(val);
  };

  const onError = (errorTxt: string) => {
    setTextInput("");
    setInputError(errorTxt);
  };

  const onEnterCheck = (val: string) => {
    if (onEnter) {
      onEnter(val);
      setTextInput("");
    }
  };

  // validation form
  let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  let nameRe = /([^\sA-Za-z])+/g;
  let reg = /[0-9]{3}-[0-9]{3}-[0-9]{4}/;

  const onKeyPressHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    switch (e.charCode) {
      case 13:
        if (!textInput.trim()) {
          error && onError(`Field is empty.  ${error}`);
          setTextInput("");
          return;
        } else if (type === "email" && re.test(textInput)) {
          onEnterCheck(textInput);
        } else if (type === "text" && !nameRe.test(textInput)) {
          onEnterCheck(textInput);
        } else if (type === "tel" && reg.test(textInput)) {
          onEnterCheck(textInput);
        } else {
          if (error) {
            onError(
              type === "email"
                ? textInput +
                    " is not valid. Please enter a valid e-mail address"
                : type === "text"
                ? "Please enter a valid name with alphabets only"
                : type === "tel"
                ? "Please enter a valid phone number xxx-xxx-xxxx"
                : error
            );
          }
        }
    }
  };

  let formClass = inputError
    ? `${scss.error} ${scss.field__form}`
    : active
    ? `${scss.active} ${scss.field__form}`
    : scss.field__form;

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
          value={textInput}
          className={scss.field__input}
          required
          placeholder={placeholder}
          name={placeholderName}
          id={id}
          onKeyPress={onKeyPressHandler}
          onChange={onChangeInputHandler}
        />
        <label htmlFor={id} className={scss.field__label}>
          {placeholder}
        </label>
        {help && <ButtonHelp text={help} error={inputError} />}
      </div>
      {inputError ? (
        <span className={inputError && scss.error}>{inputError}</span>
      ) : null}
    </div>
  );
};

export default InputText;
