import TimeInformationSection from "./TimeInformationSection/TimeInformationSection";
import "./TimerSection.css"

function TimerSection(props) {

   

   // // Вычисление стиля для индикатора таймера
   const circleStyle = {
      
      strokeDashoffset: `calc( 946 - (946 * (${props.percentage} / 100) )`
   };

   return (
      <section className="timerSection">

         <div className="timer">
            <svg width="330px" height="330px">
               <circle className="base-circle" cx="150" cy="150" r="150" />
               <circle className="progress-circle" cx="150" cy="150" r="150" style={circleStyle} />
            </svg>
            <TimeInformationSection timeValue={props.timeValue} percentage={props.percentage} />

         </div>

      </section>
   )
}

export default TimerSection;