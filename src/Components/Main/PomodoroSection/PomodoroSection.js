import Island from "../../BasicComponents/Island";
import Dote from "../../BasicComponents/Dote";
import IntervalTimeItem from "./IntervalTimeItem/IntervalTimeItem";
import "./PomodoroSection.css"


function PomodoroSection() {
   const currentTime = new Date();
   const startHour = currentTime.getHours();
   const startMinute = Math.floor(currentTime.getMinutes() / 30) * 30;

   const timeIntervals = [];

   let initialHour = (startHour - 12 + 24) % 24;

   for (let i = 0; i < 48; i++) {
      const hourOffset = Math.floor((startMinute + 30 * i) / 60);
      const hourInterval = (initialHour + hourOffset) % 24;
      const minuteInterval = (startMinute + 30 * i) % 60;

      const formattedHour = hourInterval.toString().padStart(2, "0"); 
      const formattedMinute = minuteInterval.toString().padStart(2, "0");

      const interval = `${formattedHour}:${formattedMinute}`;

      timeIntervals.push(interval);
   }

   const nearestIndex = timeIntervals.findIndex((time) => {
      const [hour, minute] = time.split(":");
      const intervalTime = new Date();
      intervalTime.setHours(Number(hour));
      intervalTime.setMinutes(Number(minute));
      return intervalTime > currentTime;
   })

   return (
      <Island>
         <div className="red-vertical-line"></div>
         <div className="timeline__section">
            {timeIntervals.map((time, index) => (
               <div className={`timeline__section-container ${index === nearestIndex ? "nearest" : ""}`} key={index}>
                  <IntervalTimeItem time={time} />
                  {index < timeIntervals.length - 1 && <Dote />}
               </div>
            ))}
         </div>
      </Island >
   )
}

export default PomodoroSection;
