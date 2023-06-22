import Text from "../../../BasicComponents/Text"
import VerticalLine from "../../../BasicComponents/VerticalLine"

function IntervalTimeItem({ time }) {
   return (
         <div>
            <Text text={time} style={{'color': '#ffffff'}}/>
            <VerticalLine />
         </div>
   )
}

export default IntervalTimeItem