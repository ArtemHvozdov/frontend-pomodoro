import { useEffect, useState } from "react";
import Island from "../../BasicComponents/Island";
import SnoozeSectionTittle from "./SnoozeSectionTittle/SnoozeSectionTittle";
import TimerSection from "./TimersSection/TimerSection";
import ButtonsSection from "./ButtonsSection/ButtonsSection";
import "./SnoozeSection.css"

function SnoozeSection() {
   const [timeValue, setTimeValue] = useState(25 * 60)
   const [isCointing, setIsCounting] = useState(false)
   const [remainingTime, setRemainingTime] = useState(timeValue);

   function calculatePercentage() {
      let percentage = ((25 * 60 - timeValue) / (25 * 60)) * 200;
      return Math.round(percentage);
   }

   let minutes = Math.floor(timeValue / 60)
   let seconds = timeValue - minutes * 60;

   if (seconds < 10) {
      seconds = '0' + seconds;
   }
   if (minutes < 10) {
      minutes = '0' + minutes;
   }

   let time = {
      minutes: minutes,
      seconds: seconds
   }

   useEffect(() => {
      const interval = setInterval(() => {
         isCointing && setTimeValue((timeValue) => (timeValue >= 1 ? timeValue - 1 : 0))
         setRemainingTime((prevTime) => prevTime - 1)

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
         <TimerSection timeValue={time} percentage={calculatePercentage()} allTime={timeValue} />
         <ButtonsSection
            onClickStartBtn={handleStart}
            onClickStopBtn={handleStop}
            onClickPauseBtn={handlePause}
         />
      </Island>
   )
}

export default SnoozeSection;