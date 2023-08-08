import Dote from "../../../BasicComponents/Dote"
import Text from "../../../BasicComponents/Text"
import VerticalLine from "../../../BasicComponents/VerticalLine"
import "./IntervalTimeItem.css"

function IntervalTimeItem({ time }) {
    return (
        <div className="intervalItem">
            <div className="intervalItem-tittle">
                <Dote />
                <Text text={time} style={{ 'color': '#ffffff' }} />
                <Dote />
            </div>

            <div className="container-vertical-line">
                <VerticalLine />
            </div>
        </div>
    )
}

export default IntervalTimeItem
