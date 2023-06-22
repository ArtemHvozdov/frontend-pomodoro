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
      const hour = (initialHour + Math.floor((startMinute + 30 * i) / 60)) % 24; // Рассчитываем час интервала
      const minute = (startMinute + 30 * i) % 60; // Рассчитываем минуту интервала

      const formattedHour = hour.toString().padStart(2, "0"); // Форматируем час в формат с ведущим нулем
      const formattedMinute = minute.toString().padStart(2, "0"); // Форматируем минуту в формат с ведущим нулем

      const interval = `${formattedHour}:${formattedMinute}`; // Формируем строку интервала

      timeIntervals.push(interval); // Добавляем интервал в массив
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

               // <div className={`timeline__section-container ${index === nearestIndex ? "nearest" : ""}`} key={index}>
               //    <IntervalTimeItem time={time} />
               //    {index < timeIntervals.length - 1 && <Dote />}
               // </div>
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