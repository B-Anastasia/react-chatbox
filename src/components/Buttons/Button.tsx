import React, { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import scss from "./Buttons.module.scss";

type ButtonPropsType = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {};

const Button: React.FC<ButtonPropsType> = ({ ...props }) => {
  return (
    <button
      className={scss.btn + " " + scss.btn__primary}
      onClick={props.onClick}
      {...props}
    />
  );
};

export default Button;
