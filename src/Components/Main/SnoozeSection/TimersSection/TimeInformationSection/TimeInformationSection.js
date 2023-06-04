
import "./TimeInformationSection.css"

function TimeInformationSection(props) {
   
   
   return (
      <section className="timeInformationSection">
         <div className="timer__minutes">{props.timeValue.minutes}:{props.timeValue.seconds}</div>
         <div className="timer__procents">{props.percentage}%</div>
      </section>
   )
}

export default TimeInformationSection;