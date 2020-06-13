import React from "react";
import scss from "../InputGreeting.module.scss";
import { ArrayType } from "../InputGreeting";

type CountPropsType = {
  count: number | undefined;
  arr: Array<ArrayType>;
  onFilterArr: (n: string) => void;
};

const Count: React.FC<CountPropsType> = ({ count, arr, onFilterArr }) => {
  let names = arr.map((n) => {
    return (
      <div key={n.id}>
        {n.name}
        <button
          className={`${scss.btn} ${scss.btn__del} btn`}
          onClick={() => onFilterArr(n.id)}
        >
          x
        </button>
      </div>
    );
  });

  return (
    <div className={scss.count}>
      <span className={scss.count__num}>{count ? count : ""}</span>
      {names}
    </div>
  );
};

export default Count;
