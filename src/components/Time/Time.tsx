import React, {useState} from "react";
import moment from "moment";
import {Button} from "../Buttons";
import scss from "./Time.module.scss";

function Time() {
    const [time, setTime] = useState(moment().format("LTS"));
    const [timerId, setTimerId] = useState<number | null>(null);
    const [activeTime, setActiveTime] = useState<boolean>(false);
    const runIntervalTime = () => {
        const new_timerId = window.setInterval(() => {
            setTime(moment().format("LTS"));
        }, 1000);
        setTimerId(new_timerId);
        setActiveTime(true);
    };
    const stopIntervalTime = () => {
        if (timerId) {
            clearInterval(timerId);
            setActiveTime(false);
        }
        return;
    };
    const btnAct = !activeTime ? scss.active : scss.inactive;
    const btnInact = activeTime ? scss.active : scss.inactive;

    return (
        <div className={`${scss.block_time} container_sm`}>
            <div className={scss.time}>
                <span>{time}</span>
                <div className={scss.data}>{moment().format("LL")}</div>
            </div>
            <div className={scss.buttons}>
                <div className={scss.btn + " " + btnAct}>
                    <Button onClick={runIntervalTime} disabled={activeTime}>
                        set interval
                    </Button>
                </div>
                <div className={scss.btn + " " + btnInact}>
                    <Button onClick={stopIntervalTime} disabled={!activeTime}>
                        stop interval
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default Time;
