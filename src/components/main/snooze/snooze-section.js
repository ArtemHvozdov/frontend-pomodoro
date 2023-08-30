import { useEffect, useState } from "react";
import Island from "../../common/island";
import SnoozeSectionTittle from "./snooze/snooze-section-tittle";
import TimerSection from "./timer/timer-section";
import ButtonsSection from "./buttons/buttons-section";
import calculatePercentage from "../../../utility/pomodoro/snooze-section/calculate-percentage-utility";
import calculateTime from "../../../utility/pomodoro/snooze-section/calculate-time-utility";

function SnoozeSection() {
    const [timeValue, setTimeValue] = useState(25 * 60)
    const [isCointing, setIsCounting] = useState(false)

    let time = calculateTime(timeValue)

    useEffect(() => {
        const interval = setInterval(() => {
            isCointing && setTimeValue((timeValue) => (timeValue >= 1 ? timeValue - 1 : 0))
        }, 1000)
        return () => {
            clearInterval(interval);
        }
    }, [isCointing])

    function handleStart() {
        setIsCounting(true)
    }

    function handleStop() {
        setIsCounting(false)
        setTimeValue(25 * 60)
    }
    function handlePause() {
        setIsCounting(false)
    }

    return (
        <Island>
            <SnoozeSectionTittle />
            <TimerSection timeValue={time} percentage={calculatePercentage(timeValue)} />
            <ButtonsSection
                onClickStartBtn={handleStart}
                onClickStopBtn={handleStop}
                onClickPauseBtn={handlePause}
            />
        </Island>
    )
}

export default SnoozeSection;
