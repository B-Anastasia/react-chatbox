import React, {
  ChangeEvent,
  DetailedHTMLProps,
  InputHTMLAttributes,
  useState,
} from "react";
import scss from "./InputText.module.scss";
import { HelpCircle } from "../../Icons";

export type InputTextPropsType = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & { onEnter?: () => void; error?: string; help?: string; icon?: any };

const InputText: React.FC<InputTextPropsType> = ({
  onEnter,
  error,
  ...props
}) => {
  const { type, placeholder, id, help } = props;
  const placeholderName = placeholder && placeholder.toLowerCase();
  const [textInput, setTextInput] = useState<string>("");
  const [active, setActive] = useState<boolean>(false);
  const [inputError, setInputError] = useState<string>("");

  const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setInputError("");
    let inputChar = e.currentTarget.value;
    setTextInput(inputChar);
    console.log(textInput);
  };
  const onChangeActiveInputHandler = (val: boolean) => () => {
    setInputError("");
    setActive(val);
  };

  const onError = (errorTxt: string) => {
    setTextInput("");
    setInputError(errorTxt);
  };

  let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  let nameRe = /([^\sA-Za-z])+/g;

  const onKeyPressHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    setTextInput("");
    switch (e.charCode) {
      case 13:
        if (!textInput.trim()) {
          error && onError(`Field is empty.  ${error}`);
          setTextInput("");
          return;
        }
        if (type === "email" && re.test(textInput)) {
          if (onEnter) {
            onEnter();
            setTextInput("");
          }
        } else if (type === "text" && !nameRe.test(textInput)) {
          if (onEnter) {
            onEnter();
            setTextInput("");
          }
        } else {
          if (error) {
            onError(
              type === "email"
                ? textInput +
                    " is not valid. Please enter a valid e-mail address"
                : type === "text"
                ? "Please enter a valid name with alphabets only"
                : error
            );
          }
        }
    }
  };
  return (
    <div
      onClick={onChangeActiveInputHandler(true)}
      onBlur={onChangeActiveInputHandler(false)}
      className={"form"}
    >
      <div
        className={
          inputError
            ? `${scss.error} ${scss.field__form}`
            : active
            ? `${scss.active} ${scss.field__form}`
            : scss.field__form
        }
      >
        <input
          // onClick={onChangeActiveInputHandler(true)}
          type={type}
          value={textInput}
          className={scss.field__input}
          required
          {...props}
          placeholder={placeholder}
          name={placeholderName}
          id={id}
          onKeyPress={onKeyPressHandler}
          onChange={onChangeInputHandler}
        />
        <label htmlFor={id} className={scss.field__label}>
          {placeholder}
        </label>
        <Button
          icon={<HelpCircle fill={inputError ? "red" : "grey"} />}
          text={help}
        />
      </div>
      {inputError ? (
        <span className={inputError && scss.error}>{inputError}</span>
      ) : null}
    </div>
  );
};

type ButtonPropsType = {
  icon: any;
  text?: string;
};

function Button({ icon, text }: ButtonPropsType) {
  const [help, setHelp] = useState<boolean>(false);
  if (help) {
    setTimeout(() => setHelp(false), 3000);
  }
  return (
    <div>
      {help && <span className={scss.help}>{text}</span>}
      <button onMouseOver={() => setHelp(true)}>{icon}</button>
    </div>
  );
}

export default InputText;
