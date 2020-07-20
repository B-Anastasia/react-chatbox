import React, { useState } from "react";
import EditableSpan from "../common/EditableSpan";
import scss from "./Span.module.scss";
import { Button } from "../Buttons";

const defaultValue = "This is an editable span";
function Span() {
  const [value, setValue] = useState<string>(defaultValue);
  const onAddNewValue = () => {
    setValue(value);
  };

  const onChangeValue = (chart: string) => {
    setValue(chart);
  };

  const onClickBtnSaveHandler = () => {
    saveState("value", value);
  };

  const onClickBtnReturnHandler = () => {
    const a = restoreState("value", defaultValue);
    setValue(a);
  };

  const onClickBtnClearHandler = () => {
    setValue(defaultValue);
    localStorage.clear();
  };

  return (
    <div className={scss.span}>
      <div className={scss.span__span}>
        <EditableSpan
          value={value}
          onEnter={onAddNewValue}
          onChange={onChangeValue}
          placeholder={"Editable span! Try it!"}
        />
      </div>
      <div className={scss.span__buttons}>
        <div className={scss.span__btn}>
          <Button onMouseDown={onClickBtnSaveHandler}>Save</Button>
        </div>
        <div className={scss.span__btn}>
          <Button onMouseDown={onClickBtnReturnHandler}>Return</Button>
        </div>
        <div className={scss.span__btn}>
          <Button onMouseDown={onClickBtnClearHandler}>Clear</Button>
        </div>
      </div>
    </div>
  );
}

export default Span;

// функция для сохранения объектов в память браузера (данные в этом хранилище сохраняться даже при перезагрузке компа)
export function saveState<T>(key: string, state: T) {
  const stateAsString = JSON.stringify(state);
  localStorage.setItem(key, stateAsString);
}

// функция для получения сохранённого объекта в памяти браузера
export function restoreState<T>(key: string, defaultState: T) {
  const stateAsString = localStorage.getItem(key);
  if (stateAsString !== null) defaultState = JSON.parse(stateAsString) as T;
  return defaultState;
}
