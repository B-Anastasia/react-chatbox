import React, { DetailedHTMLProps, InputHTMLAttributes } from "react";
import scss from "../InputGreeting.module.scss";

// type IInputValuePropsType = {
//   value: string;
// onChangeInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
//   onKeySubmit: (e: React.KeyboardEvent<HTMLInputElement>) => void;
// };
type IInputValuePropsType = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  value: string;
  onEnter?: (val: string) => void;
  error?: string;
  help?: string;
  onKeySubmit: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  onChangeInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const InputValue: React.FC<IInputValuePropsType> = ({
  value,
  onChangeInput,
  onKeySubmit,
}) => {
  return (
    <React.Fragment>
      <input
        type="input"
        value={value}
        className={scss.form__field}
        placeholder="Name"
        name="name"
        id="name"
        required
        onChange={onChangeInput}
        onKeyPress={onKeySubmit}
      />
      <label htmlFor="name" className={scss.form__label}>
        Name
      </label>
    </React.Fragment>
  );
};

export default InputValue;
