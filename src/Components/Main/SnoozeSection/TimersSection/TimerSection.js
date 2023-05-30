import TimeInformationSection from "./TimeInformationSection/TimeInformationSection";
import "./TimerSection.css"

function TimerSection(props) {
   return (
      <section className="timersSection">

         <div className="timer">
            <svg width="330px" height="320px">
               <circle cx="150" cy="150" r="150"></circle>
               <circle cx="150" cy="150" r="150"></circle>
            </svg>
            <TimeInformationSection timeValue={props.timeValue} percentage={props.percentage}/>
            
         </div>

      </section>
   )
}

export default TimerSection;