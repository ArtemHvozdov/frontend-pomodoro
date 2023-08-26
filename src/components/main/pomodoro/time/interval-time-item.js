import Dote from "../../../common/dote"
import Text from "../../../common/text"
import VerticalLine from "../../../common/vertical-line"
import "./interval-time-item.css"

function IntervalTimeItem({ time, isCurrent, marginLeftValue }) {
    return (
        <div className="interval-item">
            <div className="interval-item-tittle">
                <Dote />
                <Text text={time} style={{ 'color': '#ffffff' }} />
                <Dote />
            </div>

            <div className="container-vertical-line">
                <VerticalLine />
            </div>
            {isCurrent && <div className="red-vertical-line" style={{ marginLeft: marginLeftValue + 'px' }}></div>}
        </div>
    )
}

export default IntervalTimeItem
