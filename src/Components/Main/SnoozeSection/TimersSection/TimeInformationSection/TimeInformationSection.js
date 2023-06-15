import Text from "../../../../BasicComponents/Text";
import "./TimeInformationSection.css"

function TimeInformationSection(props) {
   const isFinished = Number(props.timeValue.minutes) === 0 && Number(props.timeValue.seconds) === 0;



   return (
      <section className="timeInformationSection">
         <div className="timer__minutes">
            <div className={isFinished ? "timer__pulse" : ""}>
               <Text text={props.timeValue.minutes}/>:
               <Text text={props.timeValue.seconds}/>
            </div>
         </div>
         <div className="timer__procents">{props.percentage}%</div>
      </section>
   )
}

export default TimeInformationSection;