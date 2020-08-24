import React, { useState } from "react";
import moment from "moment";
import { Button } from "../Buttons";
import scss from "./Time.module.scss";

function Time() {
  const [time, setTime] = useState(moment().format("LTS"));
  const [timerId, setTimerId] = useState<number | null>(null);

  const runIntervalTime = () => {
    const new_timerId = window.setInterval(() => {
      setTime(moment().format("LTS"));
    }, 1000);
    setTimerId(new_timerId);
  };
  const stopIntervalTime = () => {
    if (timerId) {
      clearInterval(timerId);
    }
    return;
  };

  return (
    <div className={`${scss.block_time} container_sm`}>
      {/*{data && <div className={scss.data}>{moment().format("LL")}</div>}*/}
      <div className={scss.time}>
        <span>{time}</span>
        <div className={scss.data}>{moment().format("LL")}</div>
      </div>
      <div className={scss.buttons}>
        <Button onClick={runIntervalTime}>set interval</Button>
        <Button onClick={stopIntervalTime}>stop interval</Button>
      </div>
    </div>
  );
}

export default Time;
