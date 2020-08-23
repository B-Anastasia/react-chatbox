import React, { useState } from "react";
import moment from "moment";
import { Button } from "../Buttons";
import scss from "./Time.module.scss";

function Time() {
  const [time, setTime] = useState(moment().format("LTS"));
  const [timerId, setTimerId] = useState<number | null>(null);
  const [data, setData] = useState(false);

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
  if (data) {
    setTimeout(() => setData(false), 2000);
  }
  return (
    <div className={`${scss.block_time} container_sm`}>
      {data && <div className={scss.data}>{moment().format("LL")}</div>}
      <div className={scss.time}>
        <span onMouseEnter={() => setData(true)}>{time}</span>
      </div>
      <div className={scss.buttons}>
        <Button onClick={runIntervalTime}>set interval</Button>
        <Button onClick={stopIntervalTime}>stop interval</Button>
      </div>
    </div>
  );
}

export default Time;
