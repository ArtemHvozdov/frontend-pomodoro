import Island from "../../BasicComponents/Island";
import "./PomodoroSection.css"


function PomodoroSection() {
   const currentTime = new Date();
   const startHour = currentTime.getHours();
   const startMinute = Math.floor(currentTime.getMinutes() / 15) * 15;

   const timeIntervals = [];

   for (let i = 0; i < 8; i++) {
      const hour = (startHour + Math.floor((startMinute + 15 * i) / 60)) % 24; // Рассчитываем час интервала
      const minute = (startMinute + 15 * i) % 60; // Рассчитываем минуту интервала

      const formattedHour = hour.toString().padStart(2, "0"); // Форматируем час в формат с ведущим нулем
      const formattedMinute = minute.toString().padStart(2, "0"); // Форматируем минуту в формат с ведущим нулем

      const interval = `${formattedHour}:${formattedMinute}`; // Формируем строку интервала

      timeIntervals.push(interval); // Добавляем интервал в массив
   }
   return (
      <Island>
         <section className="timeline__section">
            <div className="interval">
               {timeIntervals.map((time, index) => (
                  <div className="interval-item" key={index}>
                     <div>{time}</div>
                     {index < timeIntervals.length - 1 && <div className="dote"></div>}
                  </div>
               ))}
            </div>

            <section className="timeline">
               {timeIntervals.map((time) => (
                  <div className="vertical-line-block">
                     <div className="vertical-line"></div>
                  </div>
                  
               ))}
            </section>
         </section>



      </Island >
   )
}

export default PomodoroSection;