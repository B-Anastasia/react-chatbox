import React, {ChangeEvent, useState} from "react";
// import scss from "./EditableSpan.module.scss";
import Input from "../../Input/Input";

type IEditableSpan = {
    value: string;
    onEnter: () => void;
    onChange: (chart: string) => void;
    placeholder?: string;
};

function EditableSpan({
                          value,
                          onChange,
                          onEnter,
                          placeholder,
                      }: IEditableSpan) {
    const [editMode, setEditMode] = useState<boolean>(false);
    const [error, setError] = useState<string>("");

    const onClickHandler = () => {
        setEditMode(true);
    };

    const addNewValue = () => {
        if (!value.trim()) {
            setError("Empty field!");
            return;
        }
        onEnter();
        setEditMode(false);
    };

    const onChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
        setError("");
        onChange(e.currentTarget.value);
    };

    const onBlur = () => {
        addNewValue();
        if (!value || error) {
            return;
        }
    };

    return !editMode ? (
        <span style={{wordBreak: "break-word"}} onDoubleClick={onClickHandler}>
      {value}
    </span>
    ) : (
        <Input
            value={value}
            onEnter={addNewValue}
            onChange={onChangeValue}
            error={error}
            placeholder={placeholder}
            onBlur={onBlur}
            onChangeError={setError}
        />
    );
}

export default EditableSpan;
