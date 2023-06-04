import TimeInformationSection from "./TimeInformationSection/TimeInformationSection";
import "./TimerSection.css"

function TimerSection(props) {
   return (
      <section className="timerSection">

         <div className="timer">
            <svg width="310px" height="310px">
               <circle cx="145" cy="145" r="145"></circle>
               <circle cx="145" cy="145" r="145"></circle>
            </svg>
            <TimeInformationSection timeValue={props.timeValue} percentage={props.percentage}/>
            
         </div>

      </section>
   )
}

export default TimerSection;