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
      const hour = (initialHour + hourOffset) % 24; // Calculate the hour interval
      const minute = (startMinute + 30 * i) % 60; // Calculate the minute interval

      const formattedHour = hour.toString().padStart(2, "0"); // Format the hour with a leading zero
      const formattedMinute = minute.toString().padStart(2, "0"); // Format the minute with a leading zero

      const interval = `${formattedHour}:${formattedMinute}`; // Create interval string

      timeIntervals.push(interval); // Add interval to array
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
         <section className="timeline__section">
            {timeIntervals.map((time, index) => (
               <section className={`timeline__section-container ${index === nearestIndex ? "nearest" : ""}`} key={index}>
                  <IntervalTimeItem time={time} />
                  {index < timeIntervals.length - 1 && <Dote />}
               </section>
            ))}
         </section>
      </Island >
   )
}

export default PomodoroSection;
