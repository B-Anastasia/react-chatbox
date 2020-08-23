import React, { useState } from "react";
import Button from "../Buttons/Button";
import {
  checkAgeAC,
  hwReducer,
  IPersonType,
  resetAC,
  sortTypeAC,
} from "../../state/homeWorkReducer";
import scss from "./users.module.scss";

const startArr: Array<IPersonType> = [
  { age: 20, id: "2", name: "Dima" },
  { age: 26, id: "3", name: "Vlad" },
  { age: 10, id: "4", name: "Ura" },
  { age: 35, id: "5", name: "Oleg" },
];

function Users() {
  console.log("Users");
  const [users, setUsers] = useState<Array<IPersonType>>(startArr);
  const sortUpHandler = () => {
    let res = hwReducer(users, sortTypeAC("up"));
    setUsers(res);
  };
  const sortDownHandler = () => {
    let res = hwReducer(users, sortTypeAC("down"));
    setUsers(res);
  };
  const checkAgeHandler = () => {
    let res = hwReducer(users, checkAgeAC(18));
    setUsers(res);
  };
  const resetHandler = () => {
    let res = hwReducer(users, resetAC(startArr));
    setUsers(res);
  };

  return (
    <div className={scss.users}>
      <div className={scss.users_group}>
        {users.map((u) => {
          return (
            <div key={u.id}>
              <span>Name: {u.name}</span>
              <span> Age: {u.age}</span>
            </div>
          );
        })}
      </div>

      <div className={scss.group_btns}>
        <Button onClick={sortUpHandler}>Sort up</Button>
        <Button onClick={sortDownHandler}>Sort down</Button>
        <Button onClick={checkAgeHandler}>Check by age</Button>
        <Button onClick={resetHandler}>Reset</Button>
      </div>
    </div>
  );
}

export default Users;
